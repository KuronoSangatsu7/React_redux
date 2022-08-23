import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-slate-800 h-full">
      <Header />
      <div className="p-8">
        <Auth />
        <Counter />
      </div>
    </div>
  );
};

export default App;
