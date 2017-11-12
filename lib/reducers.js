const combineReducers = require('redux').combineReducers;

const ADD_PLAYER = require('./actions').ADD_PLAYER;

function players(state = [], action) {
    switch (action.type) {
        case ADD_PLAYER:
            return [
                ...state,
                action.player
            ];
        default:
            return state;
    }
}

const gameApp = combineReducers({
    players
});

export default gameApp;