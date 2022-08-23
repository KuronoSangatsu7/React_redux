const Auth = () => {
  return (
    <div className="container bg-gray-400 w-1/5 mx-auto p-4 text-center text-black flex flex-col space-y-4 text-xl rounded-md m-6">
      <label htmlFor="email">Email</label>
      <input id="email" className="rounded-md p-2"/>
      <label htmlFor="password">Password</label>
      <input id="password" type="password"  className="rounded-md p-2"/>
      <button type="submit" className="self-end bg-pink-800 p-2 rounded-md">
        Login
      </button>
    </div>
  );
};

export default Auth;
