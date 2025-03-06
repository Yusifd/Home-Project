import Play from "./assets/icons/Play"
function VideoView(){
    return(
        <>
        <div className="mt-32">
            <div></div>
            <div>
            <div className="relative rounded-lg"><img className="rounded-lg w-[926px] h-[415px] absolute left-[50%] transform -translate-x-1/2 top-[50%] -translate-y-1/2 " src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/video-frame.jpg"/><a href="https://www.youtube.com/" target="_blank" className="text-[rgba(254,85,37,0.5)] outline-solid  bg-white rounded-full absolute left-[50%] transform -translate-x-1/2 top-[50%] -translate-y-1/2"><Play/></a></div>
                <div  className="mt-14">
                    <ul className="w-72 h-24">
                        <li>                            
                            <div className="bg-[#ffeee9] relative ">
                                <div>
                            <div className="text-[#1e1e1e] text-[16px] font-semibold flex" ><div><h2 className="text-[#f35525] text-4xl font-bold mr-6">34</h2></div><div><p>Buildings<br/>Finished now</p></div></div>
                            </div>
                            <div className="rounded-full bg-[#f35525] w-12 h-12 absolute -top-6 -right-6"></div>
                            </div>
                            </li>
                        <li><div className="bg-[#ffeee9] relative"><div>
                            <div className="text-[#1e1e1e] text-[16px] font-semibold flex" ><div><h2 className="text-[#f35525] text-4xl font-bold mr-6">12</h2></div><div><p>Years<br/>Experience</p></div></div>
                            </div><div className="rounded-full bg-[#f35525] w-12 h-12 absolute -top-6 -right-6"></div></div></li>
                        <li><div className="bg-[#ffeee9] relative"><div>
                            <div className="text-[#1e1e1e] text-[16px] font-semibold flex" ><div><h2 className="text-[#f35525] text-4xl font-bold mr-6">24</h2></div><div><p>Awards<br/>Won 2023</p></div></div>
                            </div><div className="rounded-full bg-[#f35525] w-12 h-12 absolute -top-6 -right-6"></div></div></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )

}
export default VideoView