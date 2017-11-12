import { combineReducers } from 'redux';

import {
    ADD_PLAYER
} from './actions';

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