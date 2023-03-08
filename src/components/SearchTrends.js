import React, { useEffect, useState } from "react";
import getTrendingSearch from "../services/getTrendingSearch";
import Category from "./Category";

const SearchTrends = () => {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    getTrendingSearch().then((res) => setTrend(res));
  }, []);

  return <Category title={"Tendencias"} data={trend}></Category>;
};

export default SearchTrends;
