import { useState, useEffect } from "react";

export const useKeyPress = (targetKey = null, type = "letter") => {
  const [keyPressed, setKeyPressed] = useState("");

  function downHandler({ key }) {
    if (!targetKey && type === "letter" && key.match(/^[A-Za-z]$/)) {
      setKeyPressed(key);
    } else if (type === "letter" && key === "Escape") {
      setKeyPressed("");
    } else if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);

  return keyPressed;
};
