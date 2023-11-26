

const Banner = () => {
    return (
        <div>
            <div className=" relative">
                <div className="">
                <img className="w-full bg-cover" src="https://i.ibb.co/PTc9FKK/Hostel-Management-01.webp" alt="" />
                </div>
                
                <div className="absolute -mt-32 w-2/3 lg:-mt-60 ml-48 flex ">
                    <input  className=" p-5 w-full" type="text" />
                     <div className="flex justify-center items-center">
                     <button className="btn btn-primary text-center p-8 ml-4 rounded-xl">Search</button>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;