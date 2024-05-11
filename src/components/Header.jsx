import Logo from "./Logo";
import Nav from "./Nav";
import QuickAccessBar from "./QuickAccessBar";

function Header() {
  return (
    <header className="mt-10 pb-4 border-b-2 border-solid border-gray-300">
      <div className="container flex items-center gap-[148px] mx-auto">
        <Logo />
        <Nav />
        <QuickAccessBar />
      </div>
    </header>
  );
}

export default Header;
