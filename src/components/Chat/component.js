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
        const {buddy} = this.props;

        if (!buddy) {

            return (<div className="ChatPanel">
                <div className="ChatHeader" />
                <div className="ChatBody" />
            </div>);

        }


        var rootClass = "ChatPanel";

        if (isInfoOpen) {
            rootClass += " InfoOpen";
        }

        return (
            <div className={rootClass}>
                <div className="ChatHeader" onClick={onInfoClick} >
                    <Avatar src={buddy.image} />
                    <h1> {buddy.username}</h1>
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
