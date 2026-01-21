import { useScrollTop } from "../hooks/useScrollTop.jsx";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTopBtn() {
  const { isVisible, scrollToTop } = useScrollTop();

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
    >
      <FaArrowUp />
    </button>
  );
}
