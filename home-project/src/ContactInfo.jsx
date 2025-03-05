import phoneIcon from "./assets/icons/img/phone-icon.png"
import emailIcon from "./assets/icons/img/email-icon.png"
function ContactInfo(){
    return(
        <>
        <div>
            <div>
                <img src={phoneIcon}/>
                <h6>
                    010-020-0340
                    <br/>
                    <span>Phone Number</span>
                </h6>
            </div>
            <div>
                <img src={emailIcon}/>
                <h6>
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