import React from 'react';


class Layout extends React.Component {
    render() {
      return    (
                    <>
                        {this.props.children}
                    </>
                );
    }
}

export default Layout;