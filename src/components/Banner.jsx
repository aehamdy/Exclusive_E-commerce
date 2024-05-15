function Banner() {
  return (
    <div className="container flex flex-col-reverse lg:flex-row lg:justify-around gap-3 mx-auto py-10 px-8 bg-black">
      <div className="flex flex-col justify-center gap-9">
        <h4 className="font-poppins font-semibold text-base text-[--button-1]">
          Categories
        </h4>
        <p className="font-inter font-semibold text-3xl md:text-5xl text-white w-[434px]">
          Enhance your music experience
        </p>
        <div className="flex justify-between w-[320px]">
          <span className="flex flex-col justify-center items-center gap-[2px] bg-white text-black rounded-full w-16 h-16">
            <p className="font-poppins font-semibold text-base text[--color-black]">
              05
            </p>
            <p className="font-poppins font-normal text-xs">Days</p>
          </span>
          <span className="flex flex-col justify-center items-center gap-[2px] bg-white text-black rounded-full w-16 h-16">
            <p className="font-poppins font-semibold text-base text[--color-black]">
              23
            </p>
            <p className="font-poppins font-normal text-xs">Hours</p>
          </span>
          <span className="flex flex-col justify-center items-center gap-[2px] bg-white text-black rounded-full w-16 h-16">
            <p className="font-poppins font-semibold text-base text[--color-black]">
              59
            </p>
            <p className="font-poppins font-normal text-xs">Minutes</p>
          </span>
          <span className="flex flex-col justify-center items-center gap-[2px] bg-white text-black rounded-full w-16 h-16">
            <p className="font-poppins font-semibold text-base text[--color-black]">
              35
            </p>
            <p className="font-poppins font-normal text-xs">Seconds</p>
          </span>
        </div>
        <button className="w-[171px] h-[56px] rounded text-white bg-[--button-1]">
          Buy Now
        </button>
      </div>
      <div className="mx-auto">
        <img src="../images/JBL_BOOMBOX.png" alt="JBL_Speaker" />
      </div>
    </div>
  );
}

export default Banner;
