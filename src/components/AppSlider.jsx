import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function AppSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div className="mt-8 mx-auto px-16">
      <Slider {...settings}>
        <div className="max-w-96">
          <img
            src="../src/assets/imgs/Pemike_1.1.jpg"
            alt="Slide 1"
            className="rounded-2xl"
          />
        </div>
        <div className="max-w-96">
          <img
            src="../src/assets/imgs/Pemike_2.1.jpg"
            alt="Slide 2"
            className="rounded-2xl"
          />
        </div>
        <div className="max-w-96">
          <img
            src="../src/assets/imgs/Pemike_3.1.jpg"
            alt="Slide 3"
            className="rounded-2xl"
          />
        </div>
        <div className="max-w-96">
          <img
            src="../src/assets/imgs/Pemike_4.1.jpg"
            alt="Slide 4"
            className="rounded-2xl"
          />
        </div>
        <div className="max-w-96">
          <img
            src="../src/assets/imgs/Pemike_5.1.jpg"
            alt="Slide 4"
            className="rounded-2xl"
          />
        </div>
      </Slider>
    </div>
  )
}
