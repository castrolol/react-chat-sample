import component from "./component";
import { connect } from 'react-redux';
import {addUser} from '../../action';

const mapStateToProps = (state, props) => ({
    name: state.username,
    url: state.avatarUrl,
    isOpen: !state.user
});

const mapDispatchToProps = (dispatch, props) => ({

    setName(name) { 
        dispatch({
            type: "SET_NAME",
            name
        }) 
    },
    setUrl(url) { 
        dispatch({
            type: "SET_URL",
            url
        }) 
    },
    addUser(){
        dispatch(addUser());
    }

});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component);
