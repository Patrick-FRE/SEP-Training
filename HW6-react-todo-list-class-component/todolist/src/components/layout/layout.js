import React from 'react';
import Header from '../header/header';
import Content from '../content/content';
import Todolist from '../todolist/todolist';

class Layout extends React.Component {
    render() {
      return    (
                    <>
                        <Header>implement a todo list</Header>
                        <Content>
                            <Todolist></Todolist>
                        </Content>
                    </>
                );
    }
}

export default Layout;