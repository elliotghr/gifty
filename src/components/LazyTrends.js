import React from "react";
import useIntersection from "../hook/useIntersection";

const SearchTrendsSuspense = React.lazy(() => import("./SearchTrendsSuspense"));

const LazyTrends = () => {
  const { target, isNearVisible } = useIntersection();

  return (
    <div ref={target}>
      {isNearVisible ? <SearchTrendsSuspense></SearchTrendsSuspense> : null}
    </div>
  );
};

export default LazyTrends;
