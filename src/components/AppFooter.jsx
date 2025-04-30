import AppLogo from '@/assets/imgs/pemike_Logo.png'
import { Link } from 'react-router'

const AppFooter = () => {
  return (
    <section>
      <footer
        className="footer"
        style={{ backgroundColor: '#155dfc !important' }}
      >
        {/* <!-- Column 1 --> */}
        <div className="footer-column">
          <img src={AppLogo} alt="Pemike Logo" />
          <p>
            Pemike Transport is a trusted provider of reliable and efficient
            land transportation services, specializing in passenger transit and
            timely logistics solutions across Nigeria.
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
  )
}
export default AppFooter
