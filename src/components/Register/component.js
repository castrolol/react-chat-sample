import React from 'react';

import Dialog from 'material-ui/Dialog';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Register extends React.Component {


    render() {

        // const {name, url} = this.props;
        const name = this.props.name;
        const url = this.props.url;
        const setName = this.props.setName;
        const setUrl = this.props.setUrl;
        const addUser = this.props.addUser;
        const isOpen = this.props.isOpen;

        const textFieldStyle = {
            width: "100%"
        }

        const buttonsStyle = {
            width: "100%",
            textAlign: "right",
            paddingTop: "10px"
        }


        return (
            <Dialog
                open={isOpen}
                modal
                title="Entre com seus dados"
            >

                <TextField
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={textFieldStyle}
                    floatingLabelText="Nome"
                    hintText="Nome" />

                <TextField
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    style={textFieldStyle}
                    floatingLabelText="Url da Imagem"
                    hintText="Imagem" />

                <div style={buttonsStyle}>

                    <RaisedButton
                        primary
                        onClick={addUser}
                        label="Ok!" />
                </div>

            </Dialog>
        );

    }

}

export default Register;