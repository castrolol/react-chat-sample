import React from "react";

import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {

    render() {

        const {isInfoOpen, onCloseClick} = this.props;

        return (
            <Drawer className="InfoPanel" width={250} openSecondary={true} open={isInfoOpen} >
                <AppBar
                 onLeftIconButtonTouchTap={onCloseClick} title="Informações" iconClassNameLeft="mdi mdi-close" />

                <div style={{ textAlign: "center", padding: "16px" }} >

                    <Avatar src="https://avatars2.githubusercontent.com/u/2396226?v=3&s=460" size={160} />

                    <h1>Luan Bixão</h1>
                    <h2>Full Pulto +20</h2>
                </div>


            </Drawer>
        );

    }


}


export default Header;