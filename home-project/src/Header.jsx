import CalendarIcon from "./assets/icons/CalendarIcon"
function Header(){
    return(
        <>
        <header className="w-full p-4 mx-auto flex justify-around sticky top-0 bg-white z-1">
            <div><h1 className="font-bold text-3xl text-[#1e1e1e] tracking-[2px]">VILLA</h1></div>
            <div>
                <ul className="grid grid-cols-5 gap-[1px] items-center text-4">
                    <li><div className="hover:text-primary transition duration-200"><a href="">Home</a></div></li>
                    <li><div className="hover:text-primary transition duration-200"><a href="">Properties</a></div></li>
                    <li><div className="hover:text-primary transition duration-200"><a href="">Property Details</a></div></li>
                    <li><div className="hover:text-primary transition duration-200"><a href="">Contact Us</a></div></li>
                    <li><div className="flex bg-[#1e1e1e] rounded-3xl h-[40px] w-44"><div className="bg-primary rounded-full h-10 w-10 place-items-center place-content-center"><CalendarIcon/></div>
                    <div className="text-white text-[14px] place-content-center hover:text-primary transition duration-200"><a href="">Scedule a visit</a></div></div>
                    </li>                    
                </ul>
            </div>
        </header>
        </>
    )
}
export default Header