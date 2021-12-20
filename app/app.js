const gameBoard = (() => {
    const game = [];
	return { game };
})();

const displayController = (() => {
    const gameBtns = document.querySelectorAll('.game-btn');
    gameBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const BTN = e.target;
            console.log(BTN);
        })
    })
    
    // const gameArr = Object.assign({}, gameBoard);
    // return { gameArr }
 })();

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
    // const {testProto} = gameLogic();
    return { 
        xMarker, 
        test,
    };
};

const user = player();
const comp = computer();

//player will have x
//comp will have o
//each pick will be pushed to gameboard array
//loop through array to make sure logic is right (and look for 3 in a row -winner)
//dom elements will be created from an object that is called when palyer has made a selection
//game board is run once (iife)