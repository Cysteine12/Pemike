import '@/assets/css/ContactPage.css'
import AppFooter from '@/components/AppFooter'

const ContactPage = () => {
  return (
    <>
      <section className="get_in_touch">
        <div className="get_in_touch_header">
          <h1>GET IN TOUCH</h1>
        </div>

        <div className="contact">
          <div className="contact_address">
            <div>
              <i className="ri-map-pin-fill"></i>
              <p>
                <strong>Address</strong>
                <br />
                <b>Lagos:</b> No. 241 Lagos Road, Idiroko Bus Stop, Opposite
                Federal Government College, Ikorodu, Lagos State. <br />
                <b>Asaba:</b> El GAHO plaza koka, beside Triple Queen Hotel,
                Koka, Asaba, Delta State. <br />
                <b>Onitsha:</b> Ihiama Plaza, opposite GUO, Port Harcourt Road
                by Iweka Flyover, Onitsha, Anambra State, Nigeria.
              </p>
            </div>

            <div>
              <i className="ri-mail-fill"></i>
              <p>
                <strong>Email</strong>
                <br />
                <a
                  href="mailto:info@pemiketransport.org"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  info@pemiketransport.org
                </a>
              </p>
            </div>

            <div>
              <i className="ri-phone-fill"></i>
              <p>
                <strong>Phone</strong>
                <br />
                <a
                  href="tel:09061398691"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  09061398691
                </a>
                <br />
                <a
                  href="tel:09011520658"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  09011520658
                </a>
              </p>
            </div>
          </div>

          <div className="form-container">
            <form action="#" className="form">
              <label htmlFor="name">Your Name (Required)</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Your Email (Required)</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />

              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit" className="submit-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      <AppFooter />
    </>
  )
}
export default ContactPage
