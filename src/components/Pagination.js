import axios from "axios";
// import React from "react";
// import { useState, useEffect } from "react";

const Pagination = (props) => {
  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/comics")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Il y a eu une erreur lors de la récupération des données");
      });
  }, []);

  return <div>pagination</div>;
};

export default Pagination;
