
import './App.css'
import AboutUs from './components/AbuotUs/AboutUs'
import Appointment from './components/Appointment/Appointment'
import Cards from './components/cards/Cards'
import Contact from './components/Contact/Contact'
import Departments from './components/Departments/Departments'
import Doctors from './components/Doctors/Doctors'
import Emergency from './components/Emergency/Emergency'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Pricing from './components/Pricing/Pricing'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'

function App() {


  return (
    <>
      <NavBar/>
      <Hero/>
      <Cards/>
      <Emergency/>
      <AboutUs/>
      <Services/>
      <Appointment/>
      <Departments/>
      <Testimonials/>
      <Doctors/>
      <Gallery/>
      <Pricing/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
