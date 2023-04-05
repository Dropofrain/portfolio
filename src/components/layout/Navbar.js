import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      //Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleScroll = () => {
    const element = document.getElementById('section-2');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollClick = () => {
    const element = document.getElementById('section-3');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // <div>Navbar</div>

    <div className="navbar" >
      <h3  style={{ textDecoration: "none", marginLeft: "30px" , color:"rgb(83, 111, 36)" }}>Barsha</h3>
      
      <div className="row">
      <div className='navbar-contain'>
        <Link
          style={{ textDecoration: "none", marginRight: "15px" , color:"white" }}
          to="/"
           >
          HOME
        </Link>

        <Link
          style={{ textDecoration: "none", marginRight: "15px", color:"white" }}
          to=""
          onClick={handleClickScroll}
          >
          ABOUT
        </Link>

        <Link
          style={{ textDecoration: "none", marginRight: "15px", color:"white"  }}
          onClick={handleScroll}
          to=""
          >
          SERVICES
        </Link>

        {/* <Link style={{textDecoration:"none" , marginRight:"15px"}} to="/carousels" className="">
            BLOG
          </Link> */}

        <Link
          style={{ textDecoration: "none", marginRight: "15px", color:"white" }}onClick={handleScrollClick}
          to=""
           >
          CONTACT
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar