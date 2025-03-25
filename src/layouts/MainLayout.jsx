import { Link, Outlet } from 'react-router'
import AppHeader from '../components/AppHeader'

const MainLayout = ({ isHomePage = false }) => {
  return (
    <>
      {!isHomePage && <AppHeader />}

      <div className="py-5 bg-gray-200">
        <Outlet />
      </div>

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
