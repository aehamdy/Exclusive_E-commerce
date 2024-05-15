function HeroSection() {
  return (
    <div className="container flex justify-around">
      <ul className="flex flex-col items-between gap-1 pt-10 pr-5 border-r-2 border-solid border-[--button-hover-2]">
        <li className="flex justify-between gap-5 py-2 px-2">
          <a href="#" className="flex items-center justify-between gap-5">
            <p>Woman's Fashion</p>
            <span>
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
                  fill="black"
                />
              </svg>
            </span>
          </a>
        </li>
        <li className="flex justify-between gap-5 py-2 px-2">
          <a href="#" className="flex items-center justify-between gap-5">
            <p>Woman's Fashion</p>
            <span>
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
                  fill="black"
                />
              </svg>
            </span>
          </a>
        </li>
        <li className="flex justify-between gap-5 py-2 px-2">
          <a href="#" className="">
            Electronics
          </a>
        </li>
        <li className="flex justify-between gap-5 py-2 px-2">
          <a href="#" className="">
            Home & Lifestyle
          </a>
        </li>
        <li className="flex justify-between gap-5 py-2 px-2">
          <a href="#" className="">
            Medicine
          </a>
        </li>
        <li className="flex justify-between gap-5 py-2 px-2">
          <a href="#" className="">
            Sports & Outdoor
          </a>
        </li>
        <li className="flex justify-between gap-5 py-2 px-2">
          <a href="#" className="">
            Baby's & Toys
          </a>
        </li>
        <li className="flex justify-between gap-5 py-2 px-2">
          <a href="#" className="">
            Groceries & Pets
          </a>
        </li>
        <li className="flex justify-between gap-5 py-2 px-2">
          <a href="#" className="">
            Health & Beauty
          </a>
        </li>
      </ul>

      <div className="pt-10">
        <div className="flex flex-col justify-between py-6 pl-16 bg-[--color-black] font-poppins text-[--color-white]">
          <div className="top-section flex justify-between">
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
          <div className="bottom-section mx-auto flex justify-between w-28">
            <span className="cursor-pointer w-3 h-3 bg-[--button-hover-2] rounded-full"></span>
            <span className="cursor-pointer w-3 h-3 bg-[--button-hover-2] rounded-full"></span>
            <span className="cursor-pointer w-3 h-3 bg-[--button-2] border-2 border-solid border-white rounded-full"></span>
            <span className="cursor-pointer w-3 h-3 bg-[--button-hover-2] rounded-full"></span>
            <span className="cursor-pointer w-3 h-3 bg-[--button-hover-2] rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
