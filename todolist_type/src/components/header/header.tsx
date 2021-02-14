import React, { FunctionComponent } from 'react'; 
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import './header.css';

const Header:FunctionComponent = () => {

    const [value, setValue] = React.useState(0);
    const history = useHistory();
    const routeMap = {
        0:"todolist",
        1:"stat"
    }
    const handleChange = (event: React.ChangeEvent<{}>, newValue: 0|1) => {
        setValue(newValue);
        history.push(routeMap[newValue]);
    };

    return (
        <>
            <AppBar position="fixed" className="header">
                <h1>Todolist</h1>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="tabs">
                    <Tab label="Todolist"/>
                    <Tab label="Stat"/>
                </Tabs>
            </AppBar>
        </>
    );
}

export default Header;