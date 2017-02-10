import React from "react";

import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';

class ContactList extends React.Component {

    render() {

        const {isInfoOpen, onInfoClick} = this.props;

        var rootClass = "ChatPanel";

        if (isInfoOpen) {
            rootClass += " InfoOpen";
        }

        return (
            <div className={rootClass}>
                <div className="ChatHeader" onClick={onInfoClick} >
                    <Avatar src="https://avatars2.githubusercontent.com/u/2396226?v=3&s=460" />
                    <h1> Luan Bixão </h1>
                </div>
                <div className="ChatBody">
                    <div className="ChatMessageList">
                        <p className="ChatMessage">
                            <Paper >
                                Hallo boy!
              </Paper >
                        </p>
                        <p className="ChatMessage">
                            <Paper >
                                Hallo boy!
              </Paper >
                        </p>
                        <p className="ChatMessage Mine">
                            <Paper >
                                Hallo boy!
              </Paper >
                        </p>
                        <p className="ChatMessage">
                            <Paper >
                                Hallo boy!
              </Paper >
                        </p>
                    </div>

                </div>
                <div className="ChatComposer">
                    <TextField className="ComposerInput" hintText="Hint Text" />
                    <FlatButton icon={<FontIcon className="mdi mdi-send" />} iconClassName="" />
                </div>
            </div>
        );

    }


}


export default ContactList;
