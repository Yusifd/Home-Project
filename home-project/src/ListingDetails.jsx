import totalFlat from "./assets/icons/img/info-icon-01.png"
import contract from "./assets/icons/img/info-icon-02.png"
import payment from "./assets/icons/img/info-icon-03.png"
import safety from "./assets/icons/img/info-icon-04.png"
function ListingDetails(){
    return(
        <>
        <div>
            <div>
                <div>
                    <ul>
                        <li><div><div><img src={totalFlat}/></div><div><h4>250m2</h4></div></div></li>
                        <li><div><div><img src={contract}/></div><div><h4>Contract</h4></div></div></li>
                        <li><div><div><img src={payment}/></div><div><h4>Payment</h4></div></div></li>
                        <li><div><div><img src={safety}/></div><div><h4>Safety</h4></div></div></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )

}
export default ListingDetails