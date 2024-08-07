import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ username: "", email: "", phone: "" });
  const { authorizationToken } = useAuth();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/admin/users/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: authorizationToken,
            },
          }
        );
        console.log("Response from user data by id update page: ", response);
        if (response.ok) {
          const data = await response.json();

          setUser(data);
        }
      } catch (error) {
        console.log("Error found in Update User Data page: " + error);
      }
    };

    fetchUser();
  }, [id, authorizationToken]);

  useEffect(() => {
    console.log("User data from update page: ", user);
  }, [user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("JSON stringify: ", user);
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: authorizationToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      console.log("Response from update user page: ", data);
      if (response.ok) {
        toast.success("User Updated Successfully!!");
      }
    } catch (error) {
      toast.error("Failed to Update User!!");
      console.log(error);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="user-form">
          <div className="main-heading">
            <h1>Update User Data</h1>
          </div>

          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                required
                autoComplete="off"
                value={user.username}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Mobile</label>
              <input
                type="text"
                name="phone"
                required
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
