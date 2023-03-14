import { useEffect, useRef, useState } from "react";

const useIntersection = ({ once = true } = {}) => {
  const [isNearVisible, setIsNearVisible] = useState(null);
  const target = useRef();

  useEffect(() => {
    const options = {
      rootMargin: "100px",
    };
    function nearVisible(entries, observer) {
      const el = entries[0];
      if (el.isIntersecting) {
        setIsNearVisible(true);
        once && observer.disconnect();
      } else {
        !once && setIsNearVisible(false);
      }
    }
    let observer = new IntersectionObserver(nearVisible, options);
    observer.observe(target.current);
  }, [target, once]);
  return {
    target,
    isNearVisible,
  };
};

export default useIntersection;
