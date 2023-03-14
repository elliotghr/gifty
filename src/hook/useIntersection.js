import React, { useEffect, useRef, useState } from "react";

const useIntersection = () => {
  const [isNearVisible, setIsNearVisible] = useState(null);
  const target = useRef();

  useEffect(() => {
    const options = {
      rootMargin: "100px",
    };
    function nearVisible(entries, observer) {
      const el = entries[0];
      if (el.isIntersecting) {
        console.log("object");
        setIsNearVisible(true);
        observer.disconnect();
      }
    }
    let observer = new IntersectionObserver(nearVisible, options);
    observer.observe(target.current);
  }, [target]);
  return {
    target,
    isNearVisible,
  };
};

export default useIntersection;
