import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";

const Auth = () => {
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(authActions.login())
    }

  return (
    <form className="container bg-gray-400 w-1/5 mx-auto p-4 text-center text-black flex flex-col space-y-4 text-xl rounded-md m-6" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" className="rounded-md p-2" required/>
      <label htmlFor="password">Password</label>
      <input id="password" type="password"  className="rounded-md p-2" required/>
      <button type="submit" className="self-end bg-pink-800 p-2 rounded-md">
        Login
      </button>
    </form>
  );
};

export default Auth;
