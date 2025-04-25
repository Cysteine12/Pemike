import { Link } from 'react-router'
import VehicleImage from '@/assets/imgs/primike-transport-768x661.png'
import BaggageImg from '@/assets/imgs/lucide--baggage-claim (1).svg'
import Person1 from '@/assets/imgs/Yakubu-Ibrahim-3.jpg'
import Person2 from '@/assets/imgs/Chioma-Okafor-1.jpg'
import Person3 from '@/assets/imgs/Kehinde-Olatunji-1-200x300.jpg'
import Person4 from '@/assets/imgs/Adetola-Adebayo.jpg'
import AppLogo from '@/assets/imgs/pemike_Logo.png'
import {
  FaArrowLeft,
  FaArrowRight,
  FaBus,
  FaClock,
  FaPhone,
  FaUsers,
} from 'react-icons/fa'
import SearchModal from '../components/SearchModal'
import { toggleMenu, startCarousel } from '@/assets/js/index.js'
import '../assets/css/HomePage.css'
import {
  updateContent,
  changeNextSlide,
  changePrevSlide,
  prevExploreSlide,
  nextExploreSlide,
} from '../assets/js'
import { useAuthStore } from '@/stores/useAuthStore'
import AppSlider from '@/components/AppSlider'
import { useEffect } from 'react'

const HomePage = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated())

  useEffect(() => {
    const intervalId = startCarousel()

    return () => {
      clearInterval(intervalId)
    }
  }, [])

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
        <img src={AppLogo} alt="Logo" />
        <div className="nav-links">
          <Link
            to="/"
            className="p-10 rounded-2xl text-white hover:bg-amber-600"
          >
            HOME
          </Link>
          <Link
            className="p-10 rounded-2xl text-white hover:bg-amber-600"
            to="/about"
          >
            ABOUT
          </Link>
          <Link
            className="p-10 rounded-2xl text-white hover:bg-amber-600"
            to="/services"
          >
            SERVICES
          </Link>
          <Link
            className="p-10 rounded-2xl text-white hover:bg-amber-600"
            to="/contact-us"
          >
            CONTACT
          </Link>
          {isAuthenticated ? (
            <Link to="/dashboard" className="-mt-2">
              <div className="book-now">Dashboard</div>
            </Link>
          ) : (
            <Link to="/trips" className="-mt-2">
              <div className="book-now">Book Now</div>
            </Link>
          )}
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
          {isAuthenticated ? (
            <Link to="/dashboard" className="-mt-2">
              <div className="book-now">Dashboard</div>
            </Link>
          ) : (
            <Link to="/trips" className="-mt-2">
              <div className="book-now">Book Now</div>
            </Link>
          )}
        </div>
      </nav>
      <div className="carousel">
        <div
          className="carousel-item active"
          style={{ backgroundImage: "url('./imgs/slider3.jpg')" }}
        >
          SMOOTH RIDES <br /> AFFORDABLE FARES
        </div>
        <div
          className="carousel-item"
          style={{ backgroundImage: "url('./imgs/slider2.jpg')" }}
        >
          <h1 style={{ alignItems: 'center' }}>
            FAST, RELIABLE DELIVERY <br /> YOUR GOODS, ON TIME, EVERY TIME
          </h1>

          <div className="functions">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                gap: '15px',
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: 'orangered',
                }}
              ></div>
              <p>WAREHOUSING</p>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                gap: '15px',
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: 'orangered',
                }}
              ></div>
              <p>STORAGE SOLUTIONS</p>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                gap: '15px',
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: 'orangered',
                }}
              ></div>
              <p>INDUSTRIAL LOGISTICS</p>
            </div>
          </div>
        </div>

        <div className="carousel-nav">
          <div className="carousel-dot active"></div>
          <div className="carousel-dot"></div>
        </div>
      </div>

      <SearchModal />

      <section>
        <div className="bg-white rounded-2xl shadow-2xl p-10 m-4">
          {/* <!-- Text and Image --> */}
          <div className="content-container">
            {/* <!-- Text Content --> */}
            <div className="content">
              <h2 id="text">EXPLORE THE TRANSPORT SERVICE</h2>
              <p className="description" id="description">
                Pemike Transport is your trusted partner for 24/7 transportation
                and logistics services. We specialize in the seamless movement
                of people and goods, ensuring reliability, safety, and
                efficiency at all times. Whether you need timely passenger
                transportation or secure logistics solutions, Pemike Transport
                is committed to meeting your needs around the clock. With a
                focus on customer satisfaction and operational excellence, we
                make every journey and delivery smooth and stress-free.
              </p>
              <h3 className="benefits-title">BENEFITS:</h3>
              <ul className="benefits-list">
                <li id="benefit1">✔ Round-the-Clock Availability</li>
                <li id="benefit2">✔ Enhanced Reliability</li>
                <li id="benefit3">✔Increased Flexibility</li>
                <li id="benefit4">✔ Improved Emergency Support</li>
                <li id="benefit5">✔ Customer Satisfaction</li>
              </ul>
            </div>

            <div className="image-container">
              <img id="image" src={VehicleImage} alt="Dynamic Image" />
            </div>
          </div>

          {/* <!-- Cards (Desktop) --> */}
          <div className="cards-container">
            <div className="card active" onClick={() => updateContent(0)}>
              <FaPhone className="text-[50px]" />
              <p>24/7 SERVICE</p>
            </div>

            <div className="card" onClick={() => updateContent(1)}>
              <FaBus className="text-[50px]" />
              <p>DELIVERY</p>
            </div>

            <div className="card" onClick={() => updateContent(2)}>
              <FaClock className="text-[50px]" />
              <p>TIME</p>
            </div>

            <div className="card" onClick={() => updateContent(3)}>
              <FaUsers className="text-[50px]" />
              <p>TEAM</p>
            </div>
          </div>

          {/* <!-- Mobile Slider --> */}
          <div className="mobile-slider">
            <button onClick={() => prevExploreSlide()}>❮</button>
            <div className="mobile-card active" id="mobile-card">
              <div id="mobile-icon">
                <i className="ri-phone-fill"></i>
                <p>24/7 SERVICE</p>
              </div>
            </div>
            <button onClick={() => nextExploreSlide()}>❯</button>
          </div>
        </div>
      </section>

      {/* <!-- our services section  ------------> */}
      <section style={{ position: 'relative' }}>
        <div className="our_services px-20">
          <p>OUR SERVICES</p>
          <center>
            <h1 style={{ width: '75%', lineHeight: '30px' }}>
              At <strong>Pemike Transport,</strong> we specialize in land
              freight and passenger transit, ensuring safe, reliable, and
              efficient transportation. Whether you need to move goods
              seamlessly across regions or travel comfortably to your
              destination, we are committed to delivering top-notch service with
              professionalism and punctuality
            </h1>
          </center>
        </div>

        <div className="overlay flex flex-col md:flex-row">
          <div>
            <FaBus className="text-[70px] m-auto text-blue-600" />

            <p>Passenger Transit</p>
            <h1>
              Our passenger transit services ensure safe, comfortable, and
              reliable transportation for individuals and groups across various
              destinations
            </h1>

            <Link to="/about">Read More</Link>
          </div>
          <hr className="hh" />

          <div>
            <i>
              <img
                src={BaggageImg}
                alt=""
                style={{ width: '70px' }}
                className="m-auto"
              />
            </i>

            <p>Land Frieght</p>
            <h1>
              We provide reliable logistics solutions for businesses and
              guarantee efficient and secure transportation of goods,s ensuring
              timely deliveries every time.
            </h1>

            <Link to="/">Read More</Link>
          </div>
        </div>
      </section>

      {/* <!-- our clients says -------------> */}
      <section className="testimonial-section">
        <p id="client"> CLIENT SAYS</p>

        <div className="testimonial-container">
          <div className="slider" id="slider">
            <div className="slide">
              <img
                src={Person1}
                alt="Yakubu Ibrahim"
                className="profile-img mx-auto"
              />
              <h3>
                Yakubu Ibrahim <span>Kano</span>
              </h3>
              <p>
                Pemike Transport provides exceptional services wit prompt
                deliveries. Thier professionalism and commitmen to their
                customer makes them the best for any traveller.{' '}
              </p>
            </div>
            <div className="slide">
              <img
                src={Person2}
                alt="Chioma Okafor"
                className="profile-img mx-auto"
              />
              <h3>
                Chioma Okafor <span>Anambra</span>
              </h3>
              <p>
                Thier dedication to customer satisfaction is unmatched. Every
                delivery has been seemless, and thier passenger services are
                equally top notch
              </p>
            </div>
            <div className="slide">
              <img
                src={Person3}
                alt="Kehinde Olatunji"
                className="profile-img mx-auto"
              />
              <h3>
                Kehinde Olatunji, <span>Oyo</span>
              </h3>
              <p>
                From the first time I used Pemike Transport I know i have found
                a reliable partner. Thier timely services and friendly staff are
                second to none
              </p>
            </div>
            <div className="slide">
              <img
                src={Person4}
                alt="Adetola Adedayo"
                className="profile-img mx-auto"
              />
              <h3>
                Adetola Adedayo, <span>Kano</span>
              </h3>
              <p>
                Pemike Transport has consistently exceeded my expectations with
                thier punctual and reliable service. I trust them for both
                personal and logistics needs.
              </p>
            </div>
          </div>
        </div>

        <div className="navigation">
          <button className="nav-button" onClick={() => changePrevSlide()}>
            <FaArrowLeft />
          </button>
          <button className="nav-button" onClick={() => changeNextSlide()}>
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* <!-- our vehicles --------------> */}
      <section>
        <div className="vehicles">
          <p>Our Vehicles</p>

          <AppSlider />
        </div>
      </section>
    </>
  )
}
export default HomePage
