const player = () => {
    const xMarker = () => {
        console.log('test onclick');
        return "x";
    };
    const oMarker = () => {
        return "o"
    };
    const test = () => "hello";
    return { xMarker, oMarker ,test };
};

const gameBoard = (() => {
    const game = [];
	return { game };
})();

const user1 = player();
const user2 = player(); 

const displayController = (() => {
    const {xMarker, oMarker} = player();
    const gameBtns = document.querySelectorAll('.game-btn');
    gameBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const BTN = e.target;
            // console.log(BTN);
            user1.xMarker();
        })
    })
    
    const gameArr = Object.assign({}, gameBoard);
    // const gameArr = Object.create(gameBoard);
    // console.log(gameArr);
    // return {gameArr};
    console.log(gameArr);
    return { gameArr }
 })();

                                                                                      

//player will have x
//comp will have o
//each pick will be pushed to gameboard array
//loop through array to make sure logic is right (and look for 3 in a row -winner)
//dom elements will be created from an object that is called when palyer has made a selection
//game board is run once (iife)