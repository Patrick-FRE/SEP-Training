import React from "react";
import Header from "../header/Header";
// import "./layout.css";

export default function Landing(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
}