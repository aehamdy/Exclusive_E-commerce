function HeroBanner() {
  return (
    <div className="flex flex-col items-center justify-between py-6 pl-16 bg-[--color-black] font-poppins text-[--color-white]">
      <div className="top-section flex justify-around">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <img src="../images/apple_logo.png" alt="apple_logo" />
            <p className="font-normal text-base">iPhone 14 Series</p>
          </div>
          <div className="font-inter font-semibold text-5xl w-[294px] leading-[60px]">
            Up to 10% off Voucher
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="font-medium text-base border-b-2">
              Shop Now
            </a>
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8H18M18 8L11 1M18 8L11 15"
                stroke="#FAFAFA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div>
          <img src="../images/iphone_banner.png" alt="iphone_image" />
        </div>
      </div>
      <div className="bottom-section flex justify-between w-28">
        <span className="w-3 h-3 bg-[--button-hover-2] rounded-full"></span>
        <span className="w-3 h-3 bg-[--button-hover-2] rounded-full"></span>
        <span className="w-3 h-3 bg-[--button-2] border-2 border-solid border-white rounded-full"></span>
        <span className="w-3 h-3 bg-[--button-hover-2] rounded-full"></span>
        <span className="w-3 h-3 bg-[--button-hover-2] rounded-full"></span>
      </div>
    </div>
  );
}

export default HeroBanner;
