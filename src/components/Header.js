import React from "react";

import AppBar from 'material-ui/AppBar';

class Header extends React.Component {

    render() {

        return (
            <AppBar
                title="Chat Nuvem"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        );

    }


}


export default Header;