import { authActions } from "../store";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  return (
    <div className="relative bg-pink-800 mx-auto p-4 px-24">
      <div className="flex justify-between items-center">
        <div className="text-xl">Redux Auth</div>
        <div className="flex items-center space-x-8">
          {isAuthenticated && (
            <>
              <button>Products</button>
              <button>Sales</button>
              <button
                className="bg-yellow-500 p-2 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
