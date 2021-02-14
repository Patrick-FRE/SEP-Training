import React, { FunctionComponent } from 'react'; 
import Container from '@material-ui/core/Container';
import "./layout.css";

const Layout:FunctionComponent = ({children}) => {
    return (
        <Container disableGutters={true} className="layout">
            {children as any}
        </Container>
    );
}

export default Layout;