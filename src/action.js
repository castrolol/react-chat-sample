import createSocket from './io-client';
import store from './store';
debugger;
var socket = createSocket();


socket.on("user-registered", function (user) {
    store.dispatch({
        type: "USER_ADD",
        user
    });

});

socket.on("buddy-enter", function (buddy) {

    store.dispatch({
        type: "ADD_BUDDY_LIST",
        buddy
    });

});

socket.on("buddy-leave", function (buddyId) {

    store.dispatch({
        type: "REMOVE_BUDDY_LIST",
        buddyId
    });

});

socket.on("buddy-list", function (buddyList) {

    store.dispatch({
        type: "SET_BUDDY_LIST",
        buddyList
    });

});

export function addUser() {

    return function (dispatch, getState) {

        var state = getState();
        var username = state.username;
        var image = state.avatarUrl;

        socket.emit("register", username, image);
    };

}