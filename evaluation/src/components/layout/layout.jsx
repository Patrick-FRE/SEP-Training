import React from "react";
import Header from "../header/header";
import "./layout.css";

export default function Layout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
}
