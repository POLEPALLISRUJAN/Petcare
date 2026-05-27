import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import logo from './assets/logo.png'
import pcP1IcText from './assets/PC p1 ic text.png'
import heroIllustration from './assets/hero-illustration.png'
import pcP2Ic1 from './assets/PC p2 ic1.png'
import pcP2Ic2 from './assets/PC  p2 ic2.png'
import pcP2Ic3 from './assets/PC p2 ic3.png'
import pcP2Ic4 from './assets/PC p2 ic4.png'
import pcP3Ic1 from './assets/PC p3 ic1.png'
import pcP3Ic2 from './assets/PC p3 ic2.png'
import pcP3Ic3 from './assets/PC p3 ic3.png'
import pcP3Ic4 from './assets/PC p3 ic4.png'
import pcP4Ic1 from './assets/PC p4 ic1.png'
import pcP4Ic1Text from './assets/PC p4 ic1 text.png'

export default function App() {
  const [navOpen, setNavOpen] = useState(false)
  const navRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const links = navRef.current?.querySelectorAll('a') || []
    const onClick = () => setNavOpen(false)
    links.forEach((l) => l.addEventListener('click', onClick))
    return () => links.forEach((l) => l.removeEventListener('click', onClick))
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.16 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    const navItems = document.querySelectorAll('.nav-links a')
    let lastScrollY = window.scrollY

    const onScroll = () => {
      let current = 'home'
      const currentScrollY = window.scrollY
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120
        if (currentScrollY >= sectionTop) current = section.getAttribute('id')
      })
      navItems.forEach((item) => {
        item.classList.toggle('active', item.getAttribute('href') === `#${current}`)
      })

      if (currentScrollY > lastScrollY && currentScrollY > 90) {
        headerRef.current?.classList.add('header-hidden')
        setNavOpen(false)
      } else {
        headerRef.current?.classList.remove('header-hidden')
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Appointment requested — integrate backend as needed.')
    e.target.reset()
  }

  return (
    <>
      <header ref={headerRef} className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
            <a href="#home" className="brand" aria-label="Petsplay home">
            <img src={logo} alt="Petsplay logo" />
          </a>

          <div ref={navRef} className={`nav-links ${navOpen ? 'open' : ''}`} id="navLinks">
            <a href="#home" className="active">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="nav-actions">
            <a className="nav-cta" href="#contact">Book Now</a>
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setNavOpen((s) => !s)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <a href="#contact" className="hero-copy-image-link" aria-label="Book appointment">
                <img src={pcP1IcText} alt="Expert pet care for your furry friends. Book appointment." />
              </a>
            </div>

            <div className="hero-art reveal" aria-label="Illustration of pet parents caring for pets">
              <div className="soft-glow glow-left"></div>
              <div className="soft-glow glow-right"></div>
              <img src={heroIllustration} alt="Pet parents playing with pets" />
            </div>
          </div>
        </section>

        <section className="section-pad" id="services">
          <div className="section-heading reveal">
            <span className="mini-pill">Premium Services</span>
            <h2>Our Pet Care Services</h2>
            <p>Comprehensive care solutions designed with love and expertise for your furry family members.</p>
          </div>

          <div className="container card-grid services-grid">
            <article className="service-card reveal">
              <span className="service-icon">
                <img src={pcP2Ic1} alt="Veterinary care icon" />
              </span>
              <h3>Veterinary Care</h3>
              <p>Expert health checkups and medical care with state-of-the-art equipment.</p>
            </article>
            <article className="service-card reveal">
              <span className="service-icon">
                <img src={pcP2Ic2} alt="Premium grooming icon" />
              </span>
              <h3>Premium Grooming</h3>
              <p>Luxury spa treatments and professional grooming for ultimate comfort.</p>
            </article>
            <article className="service-card reveal">
              <span className="service-icon">
                <img src={pcP2Ic3} alt="Smart training icon" />
              </span>
              <h3>Smart Training</h3>
              <p>Personalized behavior training using modern, positive reinforcement methods.</p>
            </article>
            <article className="service-card reveal">
              <span className="service-icon">
                <img src={pcP2Ic4} alt="Luxury boarding icon" />
              </span>
              <h3>Luxury Boarding</h3>
              <p>5-star accommodation with 24/7 monitoring and personalized care.</p>
            </article>
          </div>
        </section>

        <section className="section-pad about" id="about">
          <div className="section-heading reveal">
            <h2>Why Pet Parents Choose Us</h2>
            <p>We're not just a pet care service - we're your pet's second family.</p>
          </div>

          <div className="container card-grid about-grid">
            <article className="choice-card reveal">
              <span>
                <img src={pcP3Ic1} alt="Certified experts icon" />
              </span>
              <h3>Certified Experts</h3>
              <p>Licensed veterinarians and certified groomers with 10+ years experience.</p>
            </article>
            <article className="choice-card reveal">
              <span>
                <img src={pcP3Ic2} alt="Stress-free care icon" />
              </span>
              <h3>Stress-Free Care</h3>
              <p>Gentle, loving approach that keeps your pets calm and comfortable.</p>
            </article>
            <article className="choice-card reveal">
              <span>
                <img src={pcP3Ic3} alt="Smart booking icon" />
              </span>
              <h3>Smart Booking</h3>
              <p>AI-powered scheduling with real-time updates and reminders.</p>
            </article>
            <article className="choice-card reveal">
              <span>
                <img src={pcP3Ic4} alt="Award winning icon" />
              </span>
              <h3>Award Winning</h3>
              <p>Recognized as the #1 pet care service with 5,000+ happy customers.</p>
            </article>
          </div>
        </section>

        <section className="section-pad" id="reviews">
          <div className="section-heading reveal">
            <h2>What Pet Parents Say</h2>
            <p>Real stories from our amazing community</p>
          </div>

          <div className="container testimonial-grid">
            <article className="testimonial-card reveal">
              <div className="review-head">
                <img src={pcP4Ic1} alt="Thomas Daniel" />
                <div>
                  <h3>Thomas daniel</h3>
                  <p>★★★★★</p>
                </div>
              </div>
              <img className="review-text-img" src={pcP4Ic1Text} alt="Customer review text" />
            </article>
            <article className="testimonial-card reveal">
              <div className="review-head">
                <img src={pcP4Ic1} alt="Thomas Daniel" />
                <div>
                  <h3>Thomas daniel</h3>
                  <p>★★★★★</p>
                </div>
              </div>
              <img className="review-text-img" src={pcP4Ic1Text} alt="Customer review text" />
            </article>
            <article className="testimonial-card reveal">
              <div className="review-head">
                <img src={pcP4Ic1} alt="Thomas Daniel" />
                <div>
                  <h3>Thomas daniel</h3>
                  <p>★★★★★</p>
                </div>
              </div>
              <img className="review-text-img" src={pcP4Ic1Text} alt="Customer review text" />
            </article>
          </div>
        </section>

        <section className="appointment" id="contact">
          <div className="appointment-image reveal"></div>
          <div className="appointment-form reveal">
            <h2>Book Your Pet's Appointment</h2>
            <p>Smart scheduling adapts to your busy lifestyle, helping you manage appointments and tasks effortlessly.</p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="3" required></textarea>

              <button type="submit">Book Appointment</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
            <a href="#home" className="brand footer-brand">
            <img src={logo} alt="Petsplay logo" />
          </a>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#about">About us</a></li>
          </ul>
          <ul>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Refer and Earn</a></li>
            <li><a href="#">House Rules</a></li>
          </ul>
          <ul>
            <li><a href="#">T&amp;C</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <ul>
            <li><a href="#">COVID-19</a></li>
            <li><a href="#">Refunds</a></li>
            <li><a href="#">Partner With Us</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>

        <div className="container footer-bottom">
          <p>Copyright © 2025 | All Rights Reserved by Tellmede</p>
          <div className="socials" aria-label="Social links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">◎</a>
          </div>
        </div>
      </footer>
    </>
  )
}
