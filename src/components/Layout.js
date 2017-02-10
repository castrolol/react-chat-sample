import React from "react";

import Header from './Header';
import ContactList from './ContactList';
import Chat from './Chat';
import InfoPanel from './InfoPanel';

class Layout extends React.Component {

    render() {

        const {isInfoOpen, onInfoClick} = this.props;

        return (
            <div style={{ height: "100%" }}>
                <Header />
                <ContactList />
                {this.props.children}
                <InfoPanel isInfoOpen={isInfoOpen}  onCloseClick={onInfoClick} />
            </div>
        );

    }


}


export default Layout;