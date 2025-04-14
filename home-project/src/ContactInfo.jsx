import phoneIcon from "./assets/icons/img/phone-icon.png"
import emailIcon from "./assets/icons/img/email-icon.png"
function ContactInfo(){
    return(
        <>
        <div className="grid grid-cols-2 gap-12 rounded-xl">
            <div className="shadow-xl pt-9 pb-9 pl-7 pr-7 rounded-[10px] w-full flex">
                <img src={phoneIcon}/>
                <h6 className="font-bold text-[20px]">
                    010-020-0340
                    <br/>
                    <span className="font-thin text-[15px] text-[#aaaaaa]">Phone Number</span>
                </h6>
            </div>
            <div className="shadow-xl pt-9 pb-9 pl-7 pr-7 rounded-[10px] w-full flex">
                <img src={emailIcon}/>
                <h6 className="font-bold text-[20px]">
                    info@villa.com
                    <br/>
                    <span className="font-thin text-[15px] text-[#aaaaaa]">Bussines Email</span>
                </h6>
            </div>
        </div>
        </>
    )
}
export default ContactInfo