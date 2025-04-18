import { useState } from "react";
import ContactInfo from "./ContactInfo";

 function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
    <div className="flex justify-center"> 
    <div className="w-[50%]">
      <div className="w-full">
      <iframe
        title="Google Map"
        width="650"
        height="450"
        className="border-0 rounded-lg"
        src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Sunny%20Isles%20Beach,%20FL%2033160,%20United%20States+(My%20Business%20Name)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen
      ></iframe>
      </div>
      <div className="w-full">
      <ContactInfo/>
      </div>
      </div>
    <div className="flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label for="name" className="text-[15px] text-[#3a3a3a] mb-4">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Your Name..."
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <label for="email" className="text-[15px] text-[#3a3a3a] mb-4">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Your E-mail..."
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <label for="subject" className="text-[15px] text-[#3a3a3a] mb-4">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject..."
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <label for="message" className="text-[15px] text-[#3a3a3a] mb-4">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 h-32"
          />
          <button
            type="submit"
            className="w-[43%] bg-black text-white p-4 font-medium rounded-full hover:bg-primary transition duration-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}
export default ContactForm