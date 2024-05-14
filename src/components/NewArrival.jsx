function NewArrival() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-[30px] mx-auto">
      <div className="w-fit overflow-hidden">
        <a href="#" className="group max-w-full">
          <div className="relative w-fit bg-black pt-10 px-5">
            <img
              src="../images/ps5-slim.png"
              alt="ps5-image"
              className="max-w-full group-hover:scale-110 duration-300"
            ></img>
            <div className="absolute bottom-5 left-[13px] flex flex-col gap-4 w-[242px]">
              <h3 className="font-inter font-bold text-2xl text-white">
                PlayStation 5
              </h3>
              <p className="text-poppins font-normal text-sm text-white">
                Black and White version of the PS5 coming out on sale.
              </p>
              <a
                href="#"
                className="font-poppins font-medium text-base underline text-white"
              >
                Shop Now
              </a>
            </div>
          </div>
        </a>
      </div>

      <div className="">
        <a href="#">
          <div className="relative bg-black w-full h-1/2">
            <div className="absolute bottom-4 md:bottom-2 lg:bottom-5 left-[13px] flex flex-col gap-2 md:gap-4 w-[242px]">
              <h3 className="font-inter font-bold text-xl md:text-xl text-white">
                Women's Collections
              </h3>
              <p className="text-poppins font-normal text-sm text-white">
                Featured woman collections that give you another vibe.
              </p>
              <a
                href="#"
                className="font-poppins font-medium text-base underline text-white"
              >
                Shop Now
              </a>
            </div>
          </div>
        </a>

        <div className="flex justify-between mt-8">
          <a href="#" className="group w-[48%]">
            <div className="relative flex justify-center items-center pt-5 bg-black lg:h-[244px] overflow-hidden">
              <img
                src="../images/amazon-echo.png"
                alt="speakers-image"
                className="max-w-full group-hover:scale-110 duration-300"
              />
              <div className="absolute w-fit bottom-5 left-[13px] flex flex-col gap-4">
                <h3 className="font-inter font-semibold text-2xl text-white">
                  Speakers
                </h3>
                <p className="text-poppins font-normal text-sm text-white">
                  Amazon wireless speakers
                </p>
                <a
                  href="#"
                  className="font-poppins font-medium text-base underline text-white"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </a>

          <a href="#" className="group w-[48%]">
            <div className="relative flex justify-center items-center bg-black pt-5 px-5 md:g-[150px] lg:h-[244px] overflow-hidden">
              <img
                src="../images/perfume.png"
                alt="perfume-image"
                className="max-w-full group-hover:scale-110 duration-300"
              />
              <div className="absolute w-fit bottom-5 left-[13px] flex flex-col gap-4">
                <h3 className="font-inter font-semibold text-2xl text-white">
                  Perfume
                </h3>
                <p className="text-poppins font-normal text-sm text-white">
                  GUCCI INTENSE OUD EDP
                </p>
                <a
                  href="#"
                  className="font-poppins font-medium text-base underline text-white"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
