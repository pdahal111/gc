import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss';
import {ReactComponent as GurkhaLogo} from '../../../assets/crown.svg'; 

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        
          <Link className="logo-container" to="/">
            <GurkhaLogo className="logo"/>
          </Link>{" "}
          <div className="nav-link-container">
          <Link className="nav-link-container" to="/shop">
            SHOP
          </Link>{" "}
          <Link className="nav-link-container" to="/SignIn">
            SIGNIN
          </Link>{" "}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
