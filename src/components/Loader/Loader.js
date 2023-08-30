import { useEffect } from "react";

function Loader() {
  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      const loader = document.querySelector(".loader");
      if (loader) {
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
        }, 500);
      }
    }, 1000);
    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <div className="loader">
      <div class="loader-inner">
        <div class="loader-blocks">
          <span class="block-1"></span>
          <span class="block-2"></span>
          <span class="block-3"></span>
          <span class="block-4"></span>
          <span class="block-5"></span>
          <span class="block-6"></span>
          <span class="block-7"></span>
          <span class="block-8"></span>
          <span class="block-9"></span>
          <span class="block-10"></span>
          <span class="block-11"></span>
          <span class="block-12"></span>
          <span class="block-13"></span>
          <span class="block-14"></span>
          <span class="block-15"></span>
          <span class="block-16"></span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
