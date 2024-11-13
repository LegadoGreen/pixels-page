import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toast styles
import CanvasContainer from "./components/CanvasContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center flex-col">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeButton
        className="sm:w-full sm:px-4 md:px-8"
      />
      <CanvasContainer />
    </main>
  );
}
