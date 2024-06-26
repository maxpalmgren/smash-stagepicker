import ScreenSelector from "./components/ScreenSelector";

function App() {
  return (
    <div className="bg-slate-800 text-white py-4 w-screen min-h-screen">
      <div className="flex justify-center items-center">
        <ScreenSelector />
      </div>
    </div>
  );
}

export default App;
