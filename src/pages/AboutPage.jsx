import '@/assets/css/AboutPage.css'

const AboutPage = () => {
  return (
    <>
      {/* <!-- hero --> */}
      <div
        className="hero "
        style={{
          backgroundImage: "url('../src/assets/imgs/banner2.jpg')",
          backgroundSize: 'cover',
        }}
      >
        <div className="header">
          <div className="contact-info">
            <span> 09061398691</span>
            <span> info@zpemiketransport.org</span>
            <span> Ihiama Plaza GUO, Port Harcourt, Onitsha, Anambra</span>
          </div>
          <div className="social-icons">
            <i className="ri-facebook-circle-fill"></i>
            <i className="ri-linkedin-box-fill"></i>
            <i className="ri-google-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-instagram-line"></i>
          </div>
        </div>
      </div>

      {/* <!-- Navbar --> */}
      <nav className="navbar">
        <div className="line"></div>
        <img src="../src/assets/imgs/pemike_Logo.png" alt="Logo" />
        <div className="nav-links">
          <a href="/">HOME</a>
          <a href="./about.html" className="active">
            ABOUT
          </a>
          <a href="./services.html">SERVICES</a>
          <a href="/contact.html">CONTACT</a>
          <div className="book-now">Book Now</div>
        </div>
        <div className="menu-toggle" onClick="toggleMenu()">
          ☰
        </div>
        <div className="mobile-menu" id="mobile-menu">
          <span className="close-menu" onClick="toggleMenu()">
            &times;
          </span>
          <a href="/">Home</a>
          <a href="/about.html">About</a>
          <a href="/services.html">Services</a>
          <a href="/contact.html">Contact</a>
          <div className="book-now">Book Now</div>
        </div>
      </nav>

      <div className="about">
        <h1>ABOUT US</h1>
        <p style={{ textAlign: 'center' }}>
          Home{' '}
          <span>
            <i className="ri-arrow-right-s-line"></i>
          </span>{' '}
          About Us
        </p>
      </div>

      {/* <!-- your gateway  --> */}

      <div className="gateway">
        <div className="gateway-text">
          <h1>YOUR GATEWAY TO SEEMLESS TRANSPORTATION</h1>

          <p style={{ textAlign: 'justify' }}>
            Welcome to <strong>Pemike Transport Limited</strong>, your trusted
            partner in transport and logistics. Founded with a commitment to
            excellence, we are dedicated to providing seamless, efficient, and
            reliable transportation solutions tailored to meet the dynamic needs
            of businesses and individuals across Nigeria.
          </p>

          <p style={{ textAlign: 'justify' }}>
            We specialize in a wide range of transport and logistics services,
            including cargo handling, freight forwarding, warehousing, and
            distribution. Whether you are moving goods within your city or
            across state lines, Pemike Transport Limited is equipped to handle
            your needs with precision and care.
          </p>

          <p style={{ textAlign: 'justify' }}>
            At Pemike Transport Limited, we pride ourselves on our
            customer-first approach, offering end-to-end logistics services that
            ensure timely and secure delivery of goods, no matter the distance.
            Our modern fleet, combined with a team of experienced professionals,
            guarantees efficiency, safety, and professionalism every step of the
            way.
          </p>
        </div>

        <div className="statements">
          <div>
            <h1 style={{ paddingBottom: '15px' }}>Mission</h1>
            <p>
              To provide reliable, efficient, and customer-centric transport and
              logistics solutions that drive business growth and economic
              connectivity across Nigeria.
            </p>
          </div>

          <div>
            <h1 style={{ paddingBottom: '15px' }}>Vision</h1>
            <p>
              To be Nigeria’s most trusted transport and logistics company,
              setting the benchmark for excellence in service delivery,
              operational efficiency, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutPage
