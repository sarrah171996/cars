import  styles from './NavBar.module.css'
import logo from "../../assets/assignment-images/imges/nav/logo.png"

export default function NavBar() {
  return (
    <>
          <div className="">

<nav className="navbar navbar-expand-lg  bg-transparent  ">
<div className="container">
<a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav m-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href='#'>Become a renter</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" href="#">Rental deals</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" href="#">How it work</a>
    </li>

    <li className="nav-item">
      <a className="nav-link" href="#">Why choose us</a>
    </li>
  </ul>
  <form className="d-flex" role="search">
  <button className="btn " type="submit">Sign in</button>
  <button className= {`btn sign-up-btn ${styles.sign}`}    type="submit">Sign up</button>
  </form>
</div>
</div>
</nav>





</div>

    </>
  )
}
