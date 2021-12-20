
const gameBoard = (() => {
    const game = [];
	return { game };
})();

const gameLogic = (() => {
    const gameArr = Object.assign({}, gameBoard);
    return { gameArr }
})();

const displayController = () => {
    
}

const computer = () => {
    const oMarker = () => "o";
    return { oMarker };
};

const player = () => {
    const xMarker = () => {
        console.log("test");
        return "x"
    };
    const test = () => "hello";
    const {testProto} = gameLogic;
    return { 
        xMarker, 
        test,
        testProto
    };
};

const player1 = player();
const comp = computer();
console.log(player1, comp);

//player will have x
//comp will have o
//each pick will be pushed to gameboard array
//loop through array to make sure logic is right (and look for 3 in a row -winner)
//dom elements will be created from an object that is called when palyer has made a selection
//game board is run once (iife)