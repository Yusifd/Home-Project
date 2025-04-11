import phoneIcon from "./assets/icons/img/phone-icon.png"
import emailIcon from "./assets/icons/img/email-icon.png"
function ContactInfo(){
    return(
        <>
        <div className="flex justify-center rounded-xl">
            <div className="shadow-xl pt-9 pb-9 pl-7 pr-7 rounded-[10px] w-[50%]">
                <img src={phoneIcon}/>
                <h6 className="font-bold">
                    010-020-0340
                    <br/>
                    <span>Phone Number</span>
                </h6>
            </div>
            <div className="shadow-xl pt-9 pb-9 pl-7 pr-7 rounded-[10px] w-[50%]">
                <img src={emailIcon}/>
                <h6 className="font-bold">
                    info@villa.com
                    <br/>
                    <span>Bussines Email</span>
                </h6>
            </div>
        </div>
        </>
    )
}
export default ContactInfo