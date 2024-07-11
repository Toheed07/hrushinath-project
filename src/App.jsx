import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="w-full">
          <Navbar />
          <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
      </div>
    </>
  );
}

export default App;
