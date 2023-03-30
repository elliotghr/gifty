import { useState } from "react";

const useActiveSuccess = () => {
  const [active, setActive] = useState(null);

  const activeAnimation = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 2000);
  };

  const activeSuccess = () => {
    activeAnimation();
  };
  return { active, activeSuccess };
};

export default useActiveSuccess;
