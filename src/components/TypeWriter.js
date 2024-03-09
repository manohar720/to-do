import { useTypewriter, Cursor } from "react-simple-typewriter";
import React from "react";

export const TypeWriter = () => {
  const [text] = useTypewriter({
    words: [
      "start day with your plan!",
      "unlock your productive potential!",
      "set your goals crush them,repeat!",
      "productivity is key to success!",
      "stay organized,stay ahead!",
    ],
    loop: {},
  });

  return (
    <div className="typeWriter mt-3">
      <p className="text-primary">
        <strong>{text}</strong>
        <Cursor />
      </p>
    </div>
  );
};
