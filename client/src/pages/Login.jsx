import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/api/auth/login";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        alert("Invalid Credential");
        console.log("Invalid Credential");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/login.png"
                  alt="A Person Trying to Login"
                  width="500"
                  height="500"
                />
              </div>
              <div className="login-form">
                <div className="main-heading mb3">
                  <h1>Login Form</h1>{" "}
                </div>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email"> Email </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="Password"> Password </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
