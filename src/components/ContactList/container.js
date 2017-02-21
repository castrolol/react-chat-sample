import component from "./component";
import { connect } from 'react-redux';
import { addUser } from '../../action';

const mapStateToProps = (state, props) => ({
    items: state.buddyList || []
});

const mapDispatchToProps = (dispatch, props) => ({


    selectBuddy(buddyId) {
        dispatch({
            type: "SELECT_BUDDY",
            buddyId
        })
    }
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component);
