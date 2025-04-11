import totalFlat from "./assets/icons/img/info-icon-01.png"
import contract from "./assets/icons/img/info-icon-02.png"
import payment from "./assets/icons/img/info-icon-03.png"
import safety from "./assets/icons/img/info-icon-04.png"
function ListingDetails(){
    return(
        <>
        <div>
            <div>
                <div className="bg-white ml-7 shadow-xl rounded-lg p-6 w-[45%] text-[15px] text-[#aaaaaa]">
                    <ul className="mr-32 mt-9 box-border">
                        <li><div className="flex border-b border-[#eee] gap-7"><div><img src={totalFlat}/></div><div><h4 className=" text-black text-xl font-semibold">250m2</h4><span>Total Flat Space</span></div></div></li>
                        <li><div className="flex border-b border-[#eee] gap-7"><div><img src={contract}/></div><div><h4 className="text-black text-xl font-semibold">Contract</h4><span>Contract Ready</span></div></div></li>
                        <li><div className="flex border-b border-[#eee] gap-7"><div><img src={payment}/><span>Process</span></div><div><h4 className="text-black text-xl font-semibold">Payment</h4><span>Payment</span></div></div></li>
                        <li><div className="flex gap-7"><div><img src={safety}/><span>Control</span></div><div><h4 className="text-black text-xl font-semibold">Safety</h4><span>24/7 under</span></div></div></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )

}
export default ListingDetails