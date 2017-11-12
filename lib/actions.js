/*
 * action types
 */

const ADD_PLAYER = 'ADD_PLAYER';

/*
 * action creators
 */

function addPlayer(player) {
    return { type: ADD_PLAYER, player };
}


module.exports = {
    ADD_PLAYER: ADD_PLAYER,
    addPlayer: addPlayer
};
