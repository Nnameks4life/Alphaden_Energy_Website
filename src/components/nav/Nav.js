import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../utilities/images/logo.png'

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:'rgba(250,250,250,0.4)'}}>
  <img src={logo} alt='alphaden logo'/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className='mx-auto'>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
      </li>

      <li className="nav-item dropdown">
        <Link to='/aboutus' className="nav-link " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About Us
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to='/aboutus' className="dropdown-item">What We Do</Link>
          <Link to className="dropdown-item">Company Statement</Link>
          <div className="dropdown-divider"></div>
          <Link to className="dropdown-item">Management</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <Link to='/ourservices' className="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Services
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to className="dropdown-item">EPCI</Link>
          <Link to className="dropdown-item">Upstream Support Services</Link>
          <div className="dropdown-divider"></div>
          <Link to className="dropdown-item">Manufacturing capabilities</Link>
          <Link to className="dropdown-item">Marine Support Services</Link>
          <div className="dropdown-divider"></div>
          <Link to className="dropdown-item">Midstream</Link>
          <Link to className="dropdown-item">System Integration,Process Control & Automation</Link>
        </div>
      </li>
       <li className="nav-item dropdown">
        <Link to='/hseqpolicy' className="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          HSEQ Policy
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to className="dropdown-item">Quality Policy Statement</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link to className="nav-link">Projects</Link>
      </li>
      <li className="nav-item">
        <Link to className="nav-link">OEM/Partners</Link>
      </li>
      <li className="nav-item">
        <Link to className="nav-link">Clientele</Link>
      </li>
      <li className="nav-item">
        <Link to className="nav-link">Contact Us</Link>
      </li>
    </ul>
    </div>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
        </div>
    )
}

export default Nav

