import { IoIosArrowDroprightCircle,IoIosArrowDropleftCircle } from "react-icons/io";
import { useState } from "react";
function Carousel({slides}){

    let[current,SetCurent]=useState(0);
    let previousSlide=()=>{
        if(current===0) SetCurent(slides.length-1);
        else SetCurent(current-1);
    }

    let nextSlide=()=>{
        if(current===slides.length-1) SetCurent(0);
        else SetCurent(current+1);
    }
    return(
    <>
    <div className="overflow-hidden relative">
        <div></div>
    <div className={`flex transition ease-in-out duration-400 `} 
    style={{
        transform:`translateX(-${current*100}%)`,
    }}
    >
    {slides.map((s)=>{
        return <img src={s}/>
    })}
    </div>
    <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl  ">
        <button  onClick={previousSlide}>
            <IoIosArrowDropleftCircle></IoIosArrowDropleftCircle>
        </button>
        <button onClick={nextSlide}>
            <IoIosArrowDroprightCircle></IoIosArrowDroprightCircle>
        </button>
    </div>
    <div className="absolute bottom-0 py-4 flex justify-center gap-5 w-full">
        {slides.map((s,i)=>{
            return(
                <div onClick={()=>{
                    SetCurent(i);
                }}
                key={"circle"+i}
                className={`rounded-full h-2 w-2 cursor-pointer ${i==current ? "bg-[#f35525]":"bg-white"}`}></div>
            )
        })}
    </div>
    </div>
    </>
    )
}
export default Carousel