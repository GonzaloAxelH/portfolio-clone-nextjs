import { useState, useEffect } from "react";
const useClick = (ref, refEexeption) => {
    const body = document.getElementById("body");
  useEffect(() => {
    body.addEventListener("click", (e) => {
      if (
        ref.current?.contains(e.target) &&
        !refEexeption?.current?.contains(e.target)
      ) {
        setIsClickInElement(true);
      } else {
        setIsClickInElement(false);
      }
    });
  }, [ref]);
  return { isClickInElement, setIsClickInElement };
};

export default useClick;
