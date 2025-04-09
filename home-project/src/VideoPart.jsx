import VideoView from "./VideoView"
import Play from "./assets/icons/Play"
function VideoPart(){
    return(
        <>
        <div>
            <div className="font-bold text-center mb-16">
                <h6 className="text uppercase text-[#ee626b] text-[15px]">| video view</h6>
                <h2 className="text capitalize mt-5 leading-14 text-5xl">Get Closer View & Different Feeling</h2>
            </div>
            <img className="h-[550px] w-full" src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/video-bg.jpg" alt="villa"/>
            <div className="relative rounded-lg"><img className="rounded-lg w-[926px] h-[415px] absolute left-[50%] transform -translate-x-1/2 top-[50%] -translate-y-1/2 " src="https://templatemo.com/templates/templatemo_591_villa_agency/assets/images/video-frame.jpg"/><a href="https://www.youtube.com/" target="_blank" className="text-[rgba(254,85,37,0.5)] outline-solid  bg-white rounded-full absolute left-[50%] transform -translate-x-1/2 top-[50%] -translate-y-1/2"><Play/></a></div>
        <div>
            <VideoView/>
        </div>
        </div>
        </>
    )
}
export default VideoPart