const Header = () => {
  return (
    <div className="relative bg-pink-800 mx-auto p-4 px-24">
      <div className="flex justify-between items-center">
        <div className="text-xl" >Redux Auth</div>
        <div className="flex items-center space-x-8">
          <div>Products</div>
          <div>Sales</div>
          <button className="bg-yellow-500 p-2 rounded-md">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
