// carousel logic

export function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu')
  const body = document.body
  const isOpen = mobileMenu.style.display === 'flex'
  mobileMenu.style.display = isOpen ? 'none' : 'flex'
  mobileMenu.style.overflow = 'hidden'
  mobileMenu.style.zIndex = '1'
  body.classList.toggle('no-scroll', !isOpen)
}
// Carousel Functionality
const slides = document.querySelectorAll('.carousel-item')
const dots = document.querySelectorAll('.carousel-dot')
let index = 0

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === i)
    dots[idx].classList.toggle('active', idx === i)
  })
}

function nextSlide() {
  index = (index + 1) % slides.length
  showSlide(index)
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i
    showSlide(index)
  })
})

setInterval(nextSlide, 5000)

// explore section logic
const data = [
  {
    text: 'EXPLORE THE FREIGHT SERVICE',
    image: '../src/assets/imgs/primike-transport-768x661.png',
    description:
      'Pemike Transport is your trusted partner for 24/7 transportation and logistics services. We specialize in the seamless movement of people and goods, ensuring reliability, safety, and efficiency at all times. Whether you need timely passenger transportation or secure logistics solutions, Pemike Transport is committed to meeting your needs around the clock. With a focus on customer satisfaction and operational excellence, we make every journey and delivery smooth and stress-free.',
    benefit1: '✔ Round-the-Clock Availability',
    benefit2: '✔ Enhanced Reliability',
    benefit3: '✔ Increased Flexibility',
    benefit4: '✔ Improved Emergency Support',
    benefit5: '✔ Customer Satisfaction',
    icon: '<i class="ri-phone-fill"></i><p>24/7 SERVICE</p>',
  },
  {
    text: 'EXPLORE OUR VEHICLES',
    image: '../src/assets/imgs/primike-transport-r-768x320.png',
    description:
      'Discover our fleet of reliable, well-maintained vehicles designed to meet all your transportation and logistics needs. From spacious vans and trucks for heavy-duty deliveries to comfortable cars for passenger rides, our vehicles are equipped to provide safety, efficiency, and convenience. No matter the journey or the load, we have the right solution for you!',
    benefit1: '✔ Comfort and Safety',
    benefit2: '✔ Efficiency and Reliability',
    benefit3: '✔ Cost-Effective Solutions',
    benefit4: '✔ Customizable Features',
    benefit5: '✔ Professional Maintenance',
    icon: '<i class="ri-bus-fill"></i><p>DELIVERY</p>',
  },
  {
    text: 'DELIVERY ON TIME',
    image: '../src/assets/imgs/container_goods-2.jpg',
    description:
      'At Pemike Transport, we prioritize punctuality to ensure your logistics needs are met without delay. Our well-organized processes and reliable fleet guarantee that your goods are delivered on time, every time. Whether it’s a single package or bulk freight, we understand the importance of meeting deadlines and work tirelessly to exceed your expectations. With us, your trust is never misplaced!',
    benefit1: '✔ Reliability You Can Trust',
    benefit2: '✔ Enhanced Business Efficiency',
    benefit3: '✔ Customer Satisfaction',
    benefit4: '✔ Reduced Downtime',
    benefit5: '✔ Peace of Mind',
    icon: '<i class="ri-time-line"></i><p>TIME</p>',
  },
  {
    text: 'FULLY DEDICATED TEAM',
    image: '../src/assets/imgs/delivery-man-2.jpg',
    description:
      'Our team is deeply committed to delivering exceptional customer satisfaction. With unwavering dedication, we go above and beyond to understand your needs, provide personalized solutions, and ensure every interaction leaves you feeling valued. From timely deliveries to seamless support, our passion for excellence drives us to make your experience with us outstanding.',
    benefit1: '✔ Personalized Service',
    benefit2: '✔ Reliable Support',
    benefit3: '✔ Timely Response',
    benefit4: '✔ Quality Assurance',
    benefit5: '✔ Problem-Solving Expertise',
    icon: '<i class="ri-team-fill"></i><p>TEAM</p>',
  },
]

let currentIndex = 0

export function updateContent(index) {
  document.getElementById('text').textContent = data[index].text
  document.getElementById('image').src = data[index].image
  document.getElementById('description').textContent = data[index].description
  document.getElementById('benefit1').textContent = data[index].benefit1
  document.getElementById('benefit2').textContent = data[index].benefit2
  document.getElementById('benefit3').textContent = data[index].benefit3
  document.getElementById('benefit4').textContent = data[index].benefit4
  document.getElementById('benefit5').textContent = data[index].benefit5

  // Update desktop active card
  document.querySelectorAll('.card').forEach((card, i) => {
    card.classList.toggle('active', i === index)
  })

  // Update mobile content
  document.getElementById('mobile-icon').innerHTML = data[index].icon

  currentIndex = index
}

export function prevExploreSlide() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : data.length - 1
  updateContent(currentIndex)
}

export function nextExploreSlide() {
  currentIndex = currentIndex < data.length - 1 ? currentIndex + 1 : 0
  updateContent(currentIndex)
}

// testimonial slider logic

let Tindex = 0
let totalSlides

function showSlides() {
  const slider = document.getElementById('slider')
  const Slides = document.querySelectorAll('.slide')
  totalSlides = Slides.length
  let slideWidth = document.querySelector('.slide').offsetWidth + 20 // Adjust for spacing
  slider.style.transform = `translateX(-${Tindex * slideWidth}px)`
}

export function changeNextSlide() {
  if (Tindex < totalSlides - 1) {
    Tindex++
  } else {
    Tindex = 0
  }
  showSlides()
}

export function changePrevSlide() {
  if (Tindex > 0) {
    Tindex--
  } else {
    Tindex = totalSlides - 1
  }
  showSlides()
}

window.addEventListener('resize', showSlides)

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
}
