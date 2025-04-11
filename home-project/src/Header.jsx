import CalendarIcon from "./assets/icons/CalendarIcon"
function Header(){
    return(
        <>
        <header className="w-full p-4 mx-auto flex justify-around sticky top-0 bg-white z-1">
            <div><h1 className="font-bold text-3xl text-[#1e1e1e] tracking-[2px]">VILLA</h1></div>
            <div>
                <ul className="flex gap-4 items-center">
                    <li><a href="">Home</a></li>
                    <li><a href="">Properties</a></li>
                    <li><a href="">Property Details</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><div className="flex bg-[#1e1e1e] rounded-3xl h-[40px] w-44"><div className="bg-primary rounded-full h-10 w-10 place-items-center place-content-center"><CalendarIcon/></div>
                    <div className="text-white text-[14px] place-content-center"><a href="">Scedule a visit</a></div></div>
                    </li>                    
                </ul>
            </div>
        </header>
        </>
    )
}
export default Header