import React from "react";
import { connect } from 'react-redux';

import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class ContactList extends React.Component {

    render() {

        var {username, image, id} = this.props.model;
        var {selectBuddy} = this.props;

        return (
            <ListItem
                onTouchTap={() => selectBuddy(id)}
                key={id}
                leftAvatar={<Avatar src={image} />}
                primaryText={username}
            />
        );

    }


}


const mapStateToProps = (state, props) => ({

});

const mapDispatchToProps = (dispatch, props) => ({

    selectBuddy(buddyId) {
        console.log(buddyId);
        dispatch({
            type: "SELECT_BUDDY",
            buddyId
        });
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList);
