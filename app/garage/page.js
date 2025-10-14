import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 h-full w-full md:w-[1400px] dark:bg-black">
      <div className="h-10 bg-gray-900  md:w-[1400]  text-amber-300 font-bold items-center  flex flex-colmd:flex-row justify-around gap-300 ">
        Mechtech
       
      </div>
      <div className="bg-black rounded-[60px] h-full w-full md:h-[1400]  md:w-[1380px] md:flex  md:flex-col m-5 dark:bg-indigo-950 ">
        <div className="bg-gray-950 rounded-b-lg h-full w-1300px md:w-[2400]  md:h-[1400] md:mt-1 md:ml-15 md:mr-15 justify-items-center flex flex-row justify-around text-amber-50 font-medium">
          <div className="h-16 w-24 m-3.5 ">
            <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png "></img>
          </div>
          <div className="mt-9 md:block hidden">Home</div>  
          <div className="mt-9 md:block hidden">About us</div>
          <div className="mt-9 md:block hidden">Pages</div>
          <div className="mt-9 md:block hidden">Servies</div>
          <div className="mt-9 md:block hidden">Shop</div>
          <div className="mt-9 md:block hidden"> md:block hiddenog</div>
          <div className="mt-9 md:block hidden">Contact</div>
          <div className="mt-9 md:block hidden h-10 w-10   ">
          </div>
          <div className="mt-9 md:block hidden h-10 w-10 rounded-full  "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSggcmrIWxmaAntSRZGy20cbpz4UyZzKODGVg&s " className="rounded-full"></img></div>
          <div className="mt-9  md:block hidden h-10 w-10 "><img src="data:image/png;base64,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" className="rounded-full"></img></div>
          <div className="mt-9  md:block hidden bg-gray-500 h-10 w-10 rounded-full"><img src="https://cdn.vectorstock.com/i/500p/70/86/instagram-logo-white-outline-icon-ig-app-vector-56237086.jpg"className="rounded-full"></img></div>
        </div>
        <div className="flex flex-col md:flex-row justify-around mt-15">
          <div className="text-amber-100 flex flex-col  gap-3">
            <div className="font-bold text-6xl">Where Quality Is A </div>
            <div className="font-bold text-6xl">Services Meets The</div>
            <div className="text-red-600 font-bold text-6xl">Open Road</div>
            <div className="text-amber-50 pt-8">
              Car service is essential for maintaining the performance and
              <div>
                {" "}
                longevity of your vehicle. From oil changes Car service
              </div>
              <div className="h-10 w-30  hover:bg-white hover:text-black font-semibold border border-red-700 rounded-full text-center mt-10 pt-1.5">
                Get started
              </div>
            </div>
            <div></div>
          </div>

          <img
            src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-3.jpg"
            className="w-120 mt-8 mb-20 -ml-16 h-auto rounded-4xl md:block hidden"
          ></img>
        </div>
      </div>
      <div className="bg-amber-50 md:h-[114px] md:w-[1200px] h-full w-full  md:flex md:flex-col justify-self-center rounded-2xl -mt-14 shadow-md">
        <div className="flex flex-col md:flex-row justify-around pt-8 h=  w- md:w-[1200px] ">
          <div className="font-bold text-5xl flex flex-col">
            600+
            <div className="text-sm pt-3.5 text-gray-600 ">Team members</div>
          </div>
          <div className="font-bold text-5xl flex flex-col">
            2k+
            <div className="text-sm pt-3.5 text-gray-600">
              Services Complete
            </div>{" "}
          </div>
          <div className="font-bold text-5xl flex flex-col">
            53+
            <div className="text-sm pt-3.5 text-gray-600">
              Winning award
            </div>{" "}
          </div>
          <div className="font-bold text-5xl flex flex-col">
            3k+
            <div className="text-sm pt-3 text-gray-600">Client Review</div>
          </div>
        </div>
      </div>
      <div className="h-150 w-{500px} bg-white mt-24 mx-26  rounded-[50px] shadow-md dark:bg-black dark:text-white border dark:border-white ">
        <div className="flex flex-col">
          <div className="text-red-500 text-xs font-bold text-center pt-18">
            LASTEST SERVICES
          </div>
          <div className="font-semibold text-3xl text-center pt-2.5">
            Your Trust Car Provider
          </div>
          <div className="font-semibold text-3xl text-center pt-2.5">
            Keeping Your Vechicle
          </div>
          <div className="flex flex-row justify-center mt-8 ">
            <div className="border hover:bg-black hover:text-white h-60 w-80 rounded-2xl m-2.5 flex flex-col items-center dark:bg-white dark:text-black">
              <div className="h-20 w-20 rounded-full bg-amber-100 hover:bg-blue-300 mt-6 "></div>
              <div className="text-xl font-semibold mt-2.5 ">
                Transformation Advising
              </div>
              <div className="text-center text-xm mt-1.5">
                Car service is essential for maintaining the performance and
                longevity of your vehicle. From oil changes Car service
              </div>
            </div>
            
            <div className="border h-60 w-80 rounded-2xl m-2.5  hover:bg-black hover:text-white flex flex-col items-center dark:bg-white dark:text-black">
              <div className="h-20 w-20 rounded-full bg-amber-100 hover:bg-blue-300 mt-6 "></div>
              <div className="text-xl font-semibold mt-2.5">
                Easy Drive Maintaince
              </div>
              <div className="text-center text-xm mt-1.5">
                Car service is essential for maintaining the performance and
                longevity of your vehicle. From oil changes Car service
              </div>
            </div>
            <div className="border h-60 w-80 rounded-2xl m-2.5  hover:bg-black hover:text-white flex flex-col items-center dark:bg-white dark:text-black">
              <div className="h-20 w-20 rounded-full bg-amber-100  hover:bg-blue-300 mt-6 "></div>
              <div className="text-xl font-semibold mt-2.5">
                Elite Auto Services
              </div>
              <div className="text-center text-xm mt-1.5">
                Car service is essential for maintaining the performance and
                longevity of your vehicle. From oil changes Car service
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-red-500 mt-30 ml-80 ">About us</div>
      <div className="flex flex-row gap-46">
        <div className="font-semibold text-4xl mt-3.5 ml-60 flex flex-col h-[400]  ">
          Fast And Reilable Car Care
          <div>Your Car Our Priority</div>
          <div className="text-sm mt-8">
            Car service is essential for maintaining the performance and
          </div>
          <div className="text-sm">
            {" "}
            longevity of your vehicle. From oil changes
          </div>
          <div className="text-lg mt-8">
            Fast and Reliable Car Care Your Car Our Priority
          </div>
          <div className="text-lg mt-3">
            Free with Our Services Care for Your Car
          </div>
          <div className="text-lg mt-3">
            Top-notch Care for Your Vehicle Your Vehicle
          </div>
          <div className="text-lg mt-3">
            Expert Service for Your Vehicle Drive Stress
          </div>
          <div className="text-lg mt-3">
            Your Trusted Car Service Provider Keeping{" "}
          </div>
        </div>
        <div>
          <img
            src="https://themehealer.com/php-template/crank-php/assets/images/resources/about-one-img-1.jpg"
            className="w-auto h-95 hidden md:block rounded-2xl mr-120"
          ></img>
        </div>
      </div>
      <div className="bg-black rounded-2xl  md:h-32 md:w-280 mt-28 ml-40 justify-items-center flex flex-row justify-around ">
        <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-3.png" className="h-10 w-aut0 mt-10"></img>
        <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-4.png" className="h-10 w-aut0 mt-10"></img>
        <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-1.png" className="h-10 w-aut0 mt-10"></img>
        <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-5.png" className="h-10 w-aut0 mt-10"></img>
        <img src="https://themehealer.com/php-template/crank-php/assets/images/brand/brand-1-2.png" className="h-10 w-aut0 mt-10"></img>
      </div>
      <div className="bg-white h-4 mt-40"></div>
    </div>
  );
}