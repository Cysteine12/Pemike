import '@/assets/css/AboutPage.css'

const AboutPage = () => {
  return (
    <>
      {/* <!-- your gateway  --> */}

      <div className="gateway bg-white rounded-3xl mb-5">
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
      <br />
    </>
  )
}
export default AboutPage
