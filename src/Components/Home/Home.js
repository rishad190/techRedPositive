import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

import TableData from "../TableData/TableData";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>

      <TableData></TableData>
    </div>
  );
};

export default Home;
