const INITIAL_STATE = {
    user: null,
    buddyList: [],
    currentBuddy: null
};


export default function reducer(state = INITIAL_STATE, action) {

    const {type, name, url, user, buddyList, buddy, buddyId} = action;

    switch (type) {

        case "SET_NAME":
            return { ...state, username: name };
        case "SET_URL":
            return { ...state, avatarUrl: url };

        case "USER_ADD":
            return { ...state, user };
        case "SET_BUDDY_LIST":
            return { ...state, buddyList };

        case "SELECT_BUDDY":
            return { ...state, currentBuddy: buddyId };

        case "ADD_BUDDY_LIST":
            var buddies = state.buddyList;
            buddies = buddies.concat(buddy);
            return { ...state, buddyList: buddies };
        case "REMOVE_BUDDY_LIST":
            var buddies = state.buddyList;
            buddies = buddies.filter(b => b.id != buddyId);
            return { ...state, buddyList: buddies };

        default:
            return state;
    }


}