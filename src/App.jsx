import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Accordion from "./components/accordian";
import { HiOutlinePlus } from "react-icons/hi";
import { BsQuestionCircle } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { IoMdPricetag } from "react-icons/io";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="w-full">
          <Navbar />
          <hr className="h-px  bg-gray-200  dark:bg-gray-700"></hr>
          <div className="flex flex-row items-center justify-between my-3 mx-10">
            <div className="flex items-center justify-start  ">
              <text className="text-3xl">Media Planning</text>
              <IoIosInformationCircle className="ml-2 text-blue-600" />
              <span className="text-sm ml-1 text-blue-600">Need help?</span>
            </div>
            <div className="flex items-center justify-start ">
              <button className="flex flex-row px-3 py-2 bg-orange-500 text-md text-white">
                <IoMdPricetag className="mt-1 mr-1" />
                Create a deal
              </button>
              <div className="ml-3">
                <form>
                  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-md p-2.5 w-24">
                    <option selected> EUR (€)</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-rox mx-10">
            <div className="flex flex-col">
              <div className="my-5">
                <div className="flex mb-5 items-center justify-between w-full px-5 py-3.5 font-medium rtl:text-right text-black border  border-gray-200  focus:ring-4 focus:ring-gray-200  hover:bg-gray-100  gap-3bg-gray-100  ">
                  <div className="flex items-center justify-start  ">
                    Meal Deal
                    <BsQuestionCircle className="ml-2" />
                    <span className="text-xs ml-1 text-red-600">New</span>
                  </div>

                  <div className=" flex flex-row border border-gray-200 px-3 py-2">
                    <HiOutlinePlus className="mt-1" />
                    <span className="ml-4">Add deal</span>
                  </div>
                </div>
                <Accordion />
              </div>
              <div className="my-5">
                <Accordion />
              </div>
            </div>
            <div>
              <div className="m-5">
                <Accordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
