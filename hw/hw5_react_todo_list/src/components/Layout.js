import React, { Component } from "react";
import Section from './Section';

class Layout extends Component {
  render() {
    return (
      <>
        <header className="header">implement a todo list</header>
        <main className="content">
          <Section></Section>
        </main>
      </>
    );
  }
}

export default Layout;
