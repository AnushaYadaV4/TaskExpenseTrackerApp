import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./Header.css";
import { Button, NavLink } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  const navigateToActivePremium = () => {
    history.push("/premium");
  };

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      {user ? (
        <div>
          <Button onClick={logoutOfApp}>Logout</Button>

          <Button
            onClick={navigateToActivePremium}
            variant="warning"
            style={{ margin: "50px" }}
          >
            Active Premium
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
