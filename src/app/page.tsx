import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toast styles
import CanvasContainer from "./components/CanvasContainer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center flex-col w-full">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeButton
        className="sm:w-full sm:px-4 md:px-8"
      />
      <div className="flex flex-col justify-between min-h-screen w-full">
        <CanvasContainer />
        <Footer />
      </div>
    </main>
  );
}
