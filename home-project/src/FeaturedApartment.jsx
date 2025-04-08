import ListingDetails from "./ListingDetails"
function FeaturedApartment() {
    return (
      <div className="flex justify-around">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-1/2">
        <div className="md:w-1/5">
          <img
            src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/featured.jpg"
            alt="Apartment"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <span className="text-red-500 text-sm font-bold uppercase">| Featured</span>
          <h2 className="text-2xl font-bold text-gray-900">
            Best Appartment & Sea View
          </h2>
          <div className="bg-gray-100 p-4 rounded-md mt-4">
            <h3 className="text-red-500 font-semibold">Best useful links?</h3>
            <p className="text-gray-700 mt-2">
              Get the <span className="font-bold text-black">best villa</span> website template in HTML, CSS, and Bootstrap for your business. TemplateMo provides you the
              <a href="#" className="text-blue-500"> best free CSS templates</a> in the world. Please tell your friends about it.
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#" className="text-black font-semibold hover:underline">
                  How does this work?
                </a>
              </li>
              <li>
                <a href="#" className="text-black font-semibold hover:underline">
                  Why is Villa Agency the best?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/2">
       <ListingDetails/>
       </div>
      </div>      
    );
  }
  export default FeaturedApartment