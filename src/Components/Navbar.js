import React from "react";
import {Link} from 'react-router-dom';
function Navbar(){
    return (
        <div>
        
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
             <div className="navbar-nav">
                            < Link className="nav-item nav-link"  to="./">Home</ Link>
                              < Link className="nav-item nav-link" to="/AddNew">AddNewProduct</ Link>
                        </div>
                 </div>
</nav>
</div>
    )
}
export default Navbar