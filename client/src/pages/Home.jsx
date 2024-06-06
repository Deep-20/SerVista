export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Worlds #1 ranked IT Company</p>
              <h1>Welcome to the Tech Elevators</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Tech Elevators,
                we specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn"> Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn"> Learn More</button>
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="Team coding"
                width="500"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd Section  */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2> 50+ </h2>
            <p> registered companies </p>
          </div>
          <div className="div1">
            <h2>100,00+ </h2>
            <p>happy clients</p>
          </div>
          <div className="div1">
            <h2> %00+</h2>
            <p>Well Known Developers</p>
          </div>
          <div className="div1">
            <h2> 24/7 </h2>
            <p>service</p>
          </div>
        </div>
      </section>

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              lets discuss how The Tech Elevators can help your business thrive
              in the digital age.
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
        </div>
      </section>
    </>
  );
};