export const About = () => {
  return (
    <>
      <div className="about-main">
        <div className="container grid grid-two-cols">
          <div className="about-content">
            <p> Welcome to The Tech Elevators </p>
            <h1> Why Choose Us?</h1>
            <p>
              Expertise: Our team consists of experienced IT professionals who
              are passionate about staying up-to-date with the latest technology
              trends.
              <br />
              <br />
              Customisation: We understand that every business is unique. That's
              why we create solutions that are tailored to your specific needs
              and goals.
              <br />
              <br />
              Customer-Centric Approach: We priotize your satisfaction and
              provide top-notch support to address your IT concerns.
              <br />
              <br />
              Affordability: We offer competitive pricing without compromising
              on the quality of our services.
              <br />
              <br />
              Reliability: Count on us to eb there when you need us. We're
              committed to ensuring your IT environment is reliable and avilable
              24/7.
              <br />
              <br />
            </p>

            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
          <div className="about-image">
            <img
              src="/images/about.png"
              alt="People Surfing why we are the best!!"
              width="500"
              height="500"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
