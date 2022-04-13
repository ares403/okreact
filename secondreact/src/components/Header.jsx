import { Link } from "react-router-dom";

function Header2() {
  return (
    <header className="header">
      <h2>Header2</h2>
      <nav>
        <Link href ="/">Home</Link> |
        <Link href ="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header2;