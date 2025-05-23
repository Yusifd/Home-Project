import './App.css'
import Reach from './Reach'
import Header from './Header'
import Carousel from './Carousel'
import ListingDetails from './ListingDetails'
import FeaturedApartment from './FeaturedApartment'
import VideoPart from './VideoPart'
import Footer from './Footer'
import HouseChoice from './HouseChoice'
import ContactForm from './ContactForm'
import Properties from './Properties'

function App() {

  let slides=[
    "https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/banner-01.jpg",
    "https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/banner-02.jpg",
    "https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/banner-03.jpg",
  ];

  return (
    <>
       <Reach/>
       <Header/>
       <div className='w-[60%] m-auto p-11'>
       <Carousel slides={slides}/>
       </div>
       <FeaturedApartment/>
       <VideoPart/>
       <HouseChoice/>
       <Properties/>
       <ContactForm/>       

       <Footer/>      
    </>
  )
}

export default App
