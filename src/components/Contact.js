import React from "react";

import { ListItem} from 'material-ui/List'; 
import Avatar from 'material-ui/Avatar';

class ContactList extends React.Component {

    render() {

        var {nome, avatar} = this.props.model;

        return ( 
                    <ListItem
                        leftAvatar={<Avatar src={avatar} />}
                        primaryText={nome}
                    /> 
        );

    }


}


export default ContactList;