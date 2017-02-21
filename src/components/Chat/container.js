
import component from "./component";
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {

    var currentBuddy = state.currentBuddy;
    var buddy = null;
    if(currentBuddy){
        buddy = state.buddyList.filter( x => x.id ==  currentBuddy)[0];
    }
    console.log(buddy);
    return {
        buddy
    }; 

};

const mapDispatchToProps = (dispatch, props) => ({
 

});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(component);
