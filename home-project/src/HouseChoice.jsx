function HouseChoice(){
    return(
        <>
        <div>
            <div className="mb-16  ">
                <div className="font-bold  w-1/3">
                <h6 className=" text-[15px] text-[#ee626b] uppercase">| Best Deal</h6>
                <h2 className="text-4xl capitalize mt-5 leading-14">Find Your Best Deal Right Now!</h2>
                </div>
                <div className="flex justify-end">
                    <ul className="grid grid-cols-3 gap-6">
                        <li className="houseChoice"><button type="button" className="cursor-pointer">Appartment</button></li>
                        <li className="houseChoice"><button type="button" className="cursor-pointer">Villa House</button></li>
                        <li className="houseChoice"><button type="button" className="cursor-pointer">Penthouse</button></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )

}
export default HouseChoice