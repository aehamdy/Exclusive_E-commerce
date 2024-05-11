function Nav() {
  return (
    <nav>
      <ul className="flex gap-12">
        <li className="flex gap-12 hover:underline">
          <a href="#" className="font-poppins">
            Home
          </a>
        </li>
        <li className="flex gap-12 hover:underline">
          <a href="#" className="font-poppins">
            Contact
          </a>
        </li>
        <li className="flex gap-12 hover:underline">
          <a href="#" className="font-poppins">
            About
          </a>
        </li>
        <li className="flex gap-12 hover:underline">
          <a href="#" className="font-poppins">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
