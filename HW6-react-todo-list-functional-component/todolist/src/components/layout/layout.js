import Header from '../header/header';
import Content from '../content/content';
import Todolist from '../todolist/todolist';

function Layout(){
      return    (
                    <>
                        <Header>implement a todo list</Header>
                        <Content>
                            <Todolist></Todolist>
                        </Content>
                    </>
                );
}

export default Layout;