export default function Contact(){
    return (
        <div>
            <h1 className="text-4xl font-semibold text-center my-4 mt-8 text-yellow-100">GET IN TOUCH</h1>
            <div className="flex justify-center">
                <form action="" className="w-[40%] text-center">
                     <div className=" bg-white h-[50px] flex mt-6 items-center">
                         <label className="ml-3 font-semibold">Name</label>
                         <input type="text"  />
                     </div>
                     <div className=" bg-white h-[50px] items-center flex mt-6">
                         <label className="ml-3 font-semibold">EMAIL</label>
                         <input type="mail"  />
                     </div>
                     <div className=" bg-white h-[50px] items-center flex mt-6">
                         <label className="ml-3 font-semibold">Number</label>
                         <input type="number"  />
                     </div>
                     <div className=" bg-white h-[90px] items-center flex mt-6">
                         <label className="ml-3 font-semibold">Massege</label>
                         <input type="Massage"  />
                         
                     </div>
                     <button className="bg-gray-300 w-[150px] h-[40px] mt-10">SEND</button>

               </form>
            </div>
        </div>
    )
}