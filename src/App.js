import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Profile from "./components/Profile";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.loggedIn);
  return (
    <div className="bg-slate-800 h-full">
      <Header />
      <div className="p-8">
        {isAuthenticated ? (
          <>
            <Profile />
            <Counter />
          </>
        ) : (
          <Auth />
        )}
      </div>
    </div>
  );
};

export default App;
