import React from "react";

import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Contact from '../Contact';

class ContactList extends React.Component {

    render() {

        const {items} = this.props;


        return (
            <div className="Sidebar">
                <List>
                    <Subheader>Contatos</Subheader>

                    {
                        items.map( item => <Contact model={item} />)
                    }

                </List>
            </div>
        );

    }


}


export default ContactList;