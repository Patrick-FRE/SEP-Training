import React, { FunctionComponent } from 'react'; 
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useTodolist } from "../../providers/todoProvider"
import Button from '@material-ui/core/Button';
import "./todolist.css"

const Todolist:FunctionComponent = () => {
    const {state, dispatch} = useTodolist();

    const handlerAddTodo = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            const newTitle = (e.target as HTMLInputElement).value;
            dispatch({
                type:'add',
                payload:{
                    title:newTitle,
                    userId : ""+1,
                    id : ""+Date.now(),
                    completed:false
                }
            });
            (e.target as HTMLInputElement).value = "";
        }
    }

    const handleRemoveTodo = (id:string)=>{
        dispatch({
            type:'remove',
            payload:{id}
        });
    }

    return (
        <>
            <Paper elevation={3} className="todoList">
                <h2 className="title">Total:{state.counter} todos</h2>
                <Divider />
                <div className="newTodo"><input type="text" onKeyDown={(e)=>handlerAddTodo(e)}></input></div>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">UID</TableCell>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Complete</TableCell>
                            <TableCell align="center">Remove</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {state.todolist.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.title}</TableCell>
                                <TableCell align="right">{row.userId}</TableCell>
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.completed?.toString()}</TableCell>
                                <TableCell align="center"><Button variant="contained" color="secondary" onClick={(e)=>handleRemoveTodo(row.id)}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>                    
                </TableContainer>
            </Paper>
        </>
    );
}

export default Todolist;