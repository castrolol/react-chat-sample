import React from "react";

import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Contact from './Contact';

class ContactList extends React.Component {

    render() {

        var luan = { nome: "Luan Bixaum", avatar: "https://avatars2.githubusercontent.com/u/2396226?v=3&s=460" };
        var jossan = { nome: "Jossan Bixaum", avatar: "https://avatars3.githubusercontent.com/u/13590406?v=3&s=460" };
        var ronan = { nome: "Ronan Tranzarinao", avatar: "https://avatars2.githubusercontent.com/u/17743452?v=3&s=460" };
        var haoni = { nome: "Haoni Atento Pakas", avatar: "https://avatars1.githubusercontent.com/u/9153862?v=3&s=460" };
        var otavio = { nome: "Otavio Otaku", avatar: "https://avatars1.githubusercontent.com/u/25406758?v=3&s=460" };

        var contatos = [

            luan,
            jossan,
            ronan,
            haoni,
            otavio
        ].reverse();


        return (
            <div className="Sidebar">
                <List>
                    <Subheader>Contatos</Subheader>

                    {
                        contatos.map( contato => <Contact model={contato} />)
                    }

                </List>
            </div>
        );

    }


}


export default ContactList;