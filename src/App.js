import React, { useState } from "react";
import 'react-virtualized/styles.css';
import "./global.css";
import Header from "./components/component-Header/component-Header";
import { TableComponent } from "./components/component-table/table";
import Modal from "./components/component-Modal/component-Modal";


export default function App() {

  return (
    <>
    <div className="container">
      <Header/>
      <TableComponent/>

    </div>
      </>

  );
}
