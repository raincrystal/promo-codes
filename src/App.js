import MainSection from "./components/MainSection";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex">
      <Sidebar />
      <MainSection />
    </div>
  );
}

export default App;
