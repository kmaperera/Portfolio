import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showButton) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Scroll to the top of the page"
      className="
        fixed
        bottom-6
        right-6
        w-12
        h-12
        rounded-full
        bg-cyan-500
        text-slate-950
        flex
        items-center
        justify-center
        shadow-lg
        hover:bg-cyan-400
        transition-all
        duration-300
        z-50
        cursor-pointer
      "
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;