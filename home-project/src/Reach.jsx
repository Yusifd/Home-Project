import EmailIcon from "./assets/icons/EmailIcon"
import MapIcon from "./assets/icons/MapIcons"
import FacebookIcon from "./assets/icons/FacebookIcon"
import TwitterIcon from "./assets/icons/TwitterIcon"
import LinkedinIcon from "./assets/icons/LinkedinIcon"
import InstagramIcon from "./assets/icons/InstagramIcon"
function Reach(){
    return(
        <>
        <div className="h-[51px] border border-b-[rgba(0,0,0,0.2)]">
            <div className="flex justify-between">
            <div className="text-[#7a7a7a] grid grid-cols-2 divide-x divide-[rgba(0,0,0,0.2)] flex justify-center">
                <div className="flex flex-wrap justify-center w-[615px] h-[15px]">
                   <div><EmailIcon/></div><div><p>Sunny Isles Beach, FL 33160</p></div>
                </div>
                <div className="flex flex-wrap justify-center">
                   <div><MapIcon/></div><div><p>info@company.com</p></div>
                </div>
            </div>

            <div>
                <ul className="flex flex-wrap">
                  <li><div><FacebookIcon/></div></li>
                  <li><div><TwitterIcon/></div></li>
                  <li><div><LinkedinIcon/></div></li>
                  <li><div><InstagramIcon/></div></li>
               </ul>
            </div>

            </div>
        </div>
        </>
    )
}
export default Reach