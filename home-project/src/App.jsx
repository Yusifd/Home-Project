import './App.css'
import Reach from './Reach'
import Header from './Header'
import Carousel from './Carousel'
import ListingDetails from './ListingDetails'
import FeaturedApartment from './FeaturedApartment'
import VideoView from './VideoView'
import Footer from './Footer'
import HouseChoice from './HouseChoice'
import ContactForm from './ContactForm'

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
       <ListingDetails/>
       <FeaturedApartment/>
       {/* <VideoView/> */}
       <HouseChoice/>
       <ContactForm/>       

       <Footer/>      
    </>
  )
}

export default App
