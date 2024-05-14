import Logo from "./Logo";

function Footer() {
  return (
    <>
      <footer className="flex flex-col md:flex-row gap-8 py-10 px-4 md:px-10 font-poppins text-[--text-light] bg-[--color-black]">
        <div className="flex flex-col gap-6 w-full md:w-1/4">
          <Logo />
          <h3 className="font-bold text-xl text-[--text-light]">Subscribe</h3>
          <p className="text-base text-[--text-light] font-extralight">
            Get 10% off your first order
          </p>
          <div className="relative flex items-center">
            <svg
              className="absolute w-6 h-6 rotate-90 right-4 text-[--text-light]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"
              />
            </svg>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent py-3 pl-4 border-2 border-solid border-[--text-light] rounded w-full outline-none"
            />
          </div>
        </div>

        <nav className="flex flex-wrap md:justify-around w-full md:w-1/2 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="font-[500] text-xl">Support</h3>
            <address className="flex flex-col text-[--text-light] font-extralight">
              111 Bijoy sarani, Dhaka,
              <br />
              DH 1515, Bangladesh.
            </address>
            <a href="mailto:exclusive@gmail.com" className="font-extralight">
              exclusive@gmail.com
            </a>
            <a href="tel:+88015-88888-9999" className="font-extralight">
              +88015-88888-9999
            </a>
          </div>

          <ul className="flex flex-col gap-4">
            <h3 className="font-[500] text-xl">Account</h3>
            <li className="font-extralight">
              <a href="#">My Account</a>
            </li>
            <li className="font-extralight">
              <a href="#">Login / Rigester</a>
            </li>
            <li className="font-extralight">
              <a href="#">Cart</a>
            </li>
            <li className="font-extralight">
              <a href="#">Wishlist</a>
            </li>
            <li className="font-extralight">
              <a href="#">Shop</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-4">
            <h3 className="font-[500] text-xl">Quick Links</h3>
            <li className="font-extralight">
              <a href="">Privacy Policy</a>
            </li>
            <li className="font-extralight">
              <a href="">Terms Of Use</a>
            </li>
            <li className="font-extralight">
              <a href="">FAQ</a>
            </li>
            <li className="font-extralight">
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-4 w-full md:w-1/4">
          <h3>Download App</h3>
          <p className="font-extralight">Save $3 with App New User Only</p>
          <div className="flex gap-[10px]">
            <img src="../images/Qr_Code.png" alt="QR_Code" />
            <div className="flex flex-col gap-[10px]">
              <img src="../images/GooglePlay.png" alt="Google_play" />
              <img src="../images/AppStore.png" alt="App_store" />
            </div>
          </div>
          <div className="flex gap-4">
            <img src="../icons/icon-facebook.svg" alt="facebook_page" />
            <img src="../icons/icon-twitter.svg" alt="twitter_account" />
            <img src="../icons/icon-instagram.svg" alt="instagram_account" />
            <img src="../icons/icon-linkedin.svg" alt="linkedin_profile" />
          </div>
        </div>
      </footer>
      <p className="bg-[--color-black] text-base py-4 border-t-[2px] border-[--text-medium] font-normal text-[--text-medium] text-center">
        &copy; Copyright Rimel 2022. All right reserved
      </p>
    </>
  );
}

export default Footer;
