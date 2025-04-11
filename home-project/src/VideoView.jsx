
function VideoView(){
    return(
        <>
        <div className="mt-60 ">
                <div>
                    <ul className="h-24 grid grid-cols-3 gap-6 ">
                        <li className="bg-[#ffeee9] relative rounded-[10px]">                            
                            <div className="countInfo">
                            <div>
                            <div className="text-[#1e1e1e] text-[16px] font-semibold flex" ><div><h2 className="text-primary text-4xl font-bold mr-6">34</h2></div><div><p>Buildings<br/>Finished now</p></div></div>
                            </div>
                            <div className="rounded-full bg-primary w-12 h-12 absolute -top-6 -right-6"></div>
                            </div>
                        </li>
                        <li className="bg-[#ffeee9] relative rounded-[10px]"><div className="countInfo"><div>
                            <div className="text-[#1e1e1e] text-[16px] font-semibold flex" ><div><h2 className="text-primary text-4xl font-bold mr-6">12</h2></div><div><p>Years<br/>Experience</p></div></div>
                            </div><div className="rounded-full bg-primary w-12 h-12 absolute -top-6 -right-6"></div></div></li>
                        <li className="bg-[#ffeee9] relative rounded-[10px]"><div className="countInfo"><div>
                            <div className="text-[#1e1e1e] text-[16px] font-semibold flex" ><div><h2 className="text-primary text-4xl font-bold mr-6">24</h2></div><div><p>Awards<br/>Won 2023</p></div></div>
                            </div><div className="rounded-full bg-primary w-12 h-12 absolute -top-6 -right-6"></div></div></li>
                    </ul>
                </div>
           
        </div>
        </>
    )

}
export default VideoView