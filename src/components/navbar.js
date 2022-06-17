import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({token, logout}) {


  return (
    <div>
      <Navbar expand="sm">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto mr-5" navbar>
          <NavItem className="mr-5">
           
            
            

            {
              token ? 
              <>
            <NavLink className="p-2" to="/companies">companies</NavLink>
            <NavLink className="p-2" to="/jobs">jobs</NavLink>
            <NavLink onClick={logout} className="p-2" to="/">logout</NavLink>
            <NavLink className="p-2" to="/profile">profile</NavLink>
            </>
              :
              <>
            <NavLink className="p-2" to="/login">login</NavLink>
            <NavLink className="p-2" to="/signup">signup</NavLink>
            </>
            }

          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;