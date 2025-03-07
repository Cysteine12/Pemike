import { Link, Outlet } from 'react-router'
import { toggleMenu } from '@/assets/js/index.js'

const MainLayout = () => {
  return (
    <>
      {/* <!-- Header Section --> */}
      <div className="header">
        <div className="contact-info">
          <span> 09061398691</span>
          <span> info@pemiketransport.org</span>
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

      {/* <!-- Navbar --> */}
      <nav className="navbar">
        <div className="line"></div>
        <img src="../src/assets/imgs/pemike_Logo.png" alt="Logo" />
        <div className="nav-links">
          <Link to="/" className="active">
            HOME
          </Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/contact">CONTACT</Link>
          <div className="book-now">Book Now</div>
        </div>
        <div className="menu-toggle" onClick={() => toggleMenu()}>
          ☰
        </div>
        <div className="mobile-menu" id="mobile-menu">
          <span className="close-menu" onClick={() => toggleMenu()}>
            &times;
          </span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <div className="book-now">BOOK NOW</div>
        </div>
      </nav>

      <Outlet />

      {/* <!-- Footer   -----------------> */}
      <section>
        <footer className="footer">
          {/* <!-- Column 1 --> */}
          <div className="footer-column">
            <img src="../src/assets/imgs/pemike_Logo.png" alt="Pemike Logo" />
            <p>
              Pemike Transport is a trusted provider of reliable and efficient
              land transportation services, specializing in passenger transit
              and timely logistics solutions across Nigeria.
            </p>
          </div>

          {/* <!-- Column 2 --> */}
          <div className="footer-column">
            <h2>QUICK LINKS</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* <!-- Column 3 --> */}
          <div className="footer-column">
            <h2>CONNECT WITH US</h2>
            <p id="icons">
              <i className="ri-facebook-fill"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="ri-instagram-line"></i>
            </p>
          </div>

          {/* <!-- Column 4 --> */}
          <div className="footer-column">
            <h2>CONTACT US</h2>
            <p>
              <span>
                <i className="ri-phone-fill"></i>
              </span>
              09061398691, 09011520658
            </p>
            <p>
              {' '}
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              Ihiama Plaza, opposite GUO, Port Harcourt Road, Onitsha, Anambra
              State, Nigeria.
            </p>
          </div>
        </footer>

        <section>
          <div className="copyright">
            <p>Copyright &copy; 2025 Pemike Transport. All rights reserved.</p>
          </div>
        </section>
      </section>
    </>
  )
}
export default MainLayout
