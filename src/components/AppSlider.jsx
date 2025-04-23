import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

export default function AppSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 760,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  }
  return (
    <Slider {...settings}>
      <div>
        <img src="../src/assets/imgs/Pemike_1.1.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="../src/assets/imgs/Pemike_2.1.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="../src/assets/imgs/Pemike_3.1.jpg" alt="Slide 3" />
      </div>
      <div>
        <img src="../src/assets/imgs/Pemike_4.1.jpg" alt="Slide 4" />
      </div>
      <div>
        <img src="../src/assets/imgs/Pemike_5.1.jpg" alt="Slide 4" />
      </div>
    </Slider>
  )
}
