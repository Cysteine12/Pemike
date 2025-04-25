import '../assets/css/ServicesPage.css'
import Icon1 from '@/assets/imgs/icon7-1.png'
import Icon2 from '@/assets/imgs/icon11.png'
import Icon3 from '@/assets/imgs/icon10.png'
import Icon4 from '@/assets/imgs/icon9.png'
import Icon5 from '@/assets/imgs/icon10.png'

const ServicesPage = () => {
  return (
    <>
      <section className="reliable bg-white rounded-3xl mb-5">
        <div className="reliable-header">
          <h1>RELIABLE LOGISTICS AND TRANSPORT COMPANY</h1>
          <p>
            At <strong>Pemike Transport Limited,</strong> we are committed to
            providing top-quality{' '}
            <strong>logistics and passenger transit</strong> services that cater
            to individuals and businesses across Nigeria. Whether you’re
            transporting goods or traveling for business or leisure, we ensure a
            seamless, safe, and efficient experience.
          </p>
        </div>

        <div className="reliable-stats">
          <div className="reliable_statements">
            <img src={Icon1} alt="Icon" />
            <p>
              <strong>Comfort & Safety First</strong>
              Our vehicles are designed with passenger comfort in mind, offering
              plush seating, ample legroom, and a smooth ride. With routine
              maintenance and strict safety protocols, we ensure that every
              journey is secure and worry-free. Seat belts, speed limit
              monitoring, and trained drivers all contribute to a safe and
              relaxing experience.
            </p>
          </div>

          <div className="reliable_statements2">
            <p>
              <strong>Punctual & Reliable Service</strong>
              We understand that time is valuable. That’s why our transport
              schedule is carefully planned to minimize delays and ensure prompt
              departures and arrivals. With our efficient route planning and
              professional coordination, you can confidently plan your trips
              without the fear of unexpected setbacks.
            </p>
            <img src={Icon2} alt="" />
          </div>

          <div className="reliable_statements">
            <img src={Icon3} alt="" />
            <p>
              <strong>Flexible Routes</strong>
              Whether you’re traveling between major cities or to remote
              destinations, <b>Pemike Transport Limited</b>
              has you covered. Our well-planned routes connect key locations
              across Nigeria, offering passengers{' '}
              <b>
                greater accessibility, more travel options, and convenient stops
              </b>{' '}
              along the way
            </p>
          </div>

          <div className="reliable_statements2">
            <p>
              <strong>Affordable & Transparent Pricing</strong>
              Travel doesn’t have to be expensive. Our fare structure is
              designed to be budget-friendly while maintaining the highest
              service standards. We offer <b>clear, upfront pricing</b> with no
              hidden fees, ensuring you get the best value for your money.
            </p>
            <img src={Icon4} alt="" />
          </div>

          <div className="reliable_statements">
            <img src={Icon5} alt="" />
            <p>
              <strong>Free Wi-Fi & Brunch Onboard</strong>
              Stay connected while on the move! Our vehicles are equipped with{' '}
              <b>high-speed internet,</b>
              allowing you to browse, stream, work, or chat without
              interruptions. Long trips don’t have to mean traveling on an empty
              stomach. We provide a<b>complimentary light brunch</b> on select
              routes, ensuring you stay refreshed and energized throughout your
              journey.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
export default ServicesPage
