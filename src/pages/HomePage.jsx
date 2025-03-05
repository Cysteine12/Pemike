import { Link } from 'react-router'
import '../assets/css/HomePage.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const HomePage = () => {
  return (
    <>
      {/* <!-- Carousel --> */}
      <div className="carousel">
        <div
          className="carousel-item active"
          style={{ backgroundImage: "url('./assets/slider3.jpg')" }}
        >
          SMOOTH RIDES <br /> AFFORDABLE FARES
        </div>
        <div
          className="carousel-item"
          style={{ backgroundImage: "url('./assets/slider2.jpg')" }}
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

      {/* <!-- explore section  ------------> */}

      <section>
        <div className="container">
          {/* <!-- Text and Image --> */}
          <div className="content-container">
            {/* <!-- Text Content --> */}
            <div className="content">
              <h2 id="text">EXPLORE THE FREIGHT SERVICE</h2>
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
              <img
                id="image"
                src="../src/assets/imgs/primike-transport-768x661.png"
                alt="Dynamic Image"
              />
            </div>
          </div>

          {/* <!-- Cards (Desktop) --> */}
          <div className="cards-container">
            <div className="card active" onClick="updateContent(0)">
              <i className="ri-phone-fill"></i>
              <p>24/7 SERVICE</p>
            </div>

            <div className="card" onClick="updateContent(1)">
              <i className="ri-bus-fill"></i>
              <p>DELIVERY</p>
            </div>

            <div className="card" onClick="updateContent(2)">
              <i className="ri-time-line"></i>
              <p>TIME</p>
            </div>

            <div className="card" onClick="updateContent(3)">
              <i className="ri-team-fill"></i>
              <p>TEAM</p>
            </div>
          </div>

          {/* <!-- Mobile Slider --> */}
          <div className="mobile-slider">
            <button onClick="prevSlide()">❮</button>
            <div className="mobile-card active" id="mobile-card">
              <div id="mobile-icon">
                <i className="ri-phone-fill"></i>
                <p>24/7 SERVICE</p>
              </div>
            </div>
            <button onClick="nextSlide()">❯</button>
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
            <i className="ri-bus-fill "></i>

            <p>Passenger Transit</p>
            <h1>
              Our passenger transit services ensure safe, comfortable, and
              reliable transportation for individuals and groups across various
              destinations
            </h1>

            <Link to="/">Read More</Link>
          </div>
          <hr className="hh" />

          <div>
            <i>
              <img
                src="../src/assets/imgs/lucide--baggage-claim (1).svg"
                alt=""
                style={{ width: '70px' }}
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
                src="../src/assets/imgs/Yakubu-Ibrahim-3.jpg"
                alt="Yakubu Ibrahim"
                className="profile-img"
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
                src="../src/assets/imgs/Chioma-Okafor-1.jpg"
                alt="Chioma Okafor"
                className="profile-img"
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
                src="../src/assets/imgs/Kehinde-Olatunji-1-200x300.jpg"
                alt="Kehinde Olatunji"
                className="profile-img"
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
                src="../src/assets/imgs/Adetola-Adebayo.jpg"
                alt="Adetola Adedayo"
                className="profile-img"
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
          <button className="nav-button" onClick="prevSlide()">
            <FaArrowLeft />
          </button>
          <button className="nav-button" onClick="nextSlide()">
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* <!-- our vehicles --------------> */}
      <section>
        <div className="vehicles">
          <p>Our Vehicles</p>

          {/* <!-- swiper  --> */}
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src="../src/assets/imgs/Pemike_1.1.jpg" alt="Slide 1" />
              </div>
              <div className="swiper-slide">
                <img src="../src/assets/imgs/Pemike_2.1.jpg" alt="Slide 2" />
              </div>
              <div className="swiper-slide">
                <img src="../src/assets/imgs/Pemike_3.1.jpg" alt="Slide 3" />
              </div>
              <div className="swiper-slide">
                <img src="../src/assets/imgs/Pemike_4.1.jpg" alt="Slide 4" />
              </div>
              <div className="swiper-slide">
                <img src="../src/assets/imgs/Pemike_5.1.jpg" alt="Slide 4" />
              </div>
            </div>

            {/* <!-- Pagination --> */}
            <div className="swiper-pagination"></div>

            {/* <!-- Navigation Buttons --> */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </section>
    </>
  )
}
export default HomePage
