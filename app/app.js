let log = console.log;

const gameBoard = ((btnID) => {
    // { btnid: x, btnid: o}
    const gb = {}
    const returnMarker = [];
    const game = [];

    const checkForWinner = () => {
        returnMarker.forEach(mark => {
        })
    }
	return { returnMarker, checkForWinner, game, gb };
})();


const player = () => {

    const xMarker = () => "x";
    const oMarker = () => "o";

    return {
        xMarker,
        oMarker
    };
};

const gameLogic = () => {
    
    const user1 = player();
    const user2 = player(); 

    const gameBoardObject = Object.assign({}, gameBoard);

    const createX = (BTN, btnID) => {
        displayController.createXBtn(BTN);
        gameBoardObject.returnMarker.push(user1.xMarker());
        gameBoardObject.game.push(btnID);
        gameBoardObject.gb[btnID] = "x"
    }

    const createO = (BTN, btnID) => {
        displayController.createOBtn(BTN);
        gameBoardObject.returnMarker.push(user2.oMarker());
        gameBoardObject.game.push(btnID);
        gameBoardObject.gb[btnID] = "o"
    }

    const switchPlayers = (BTN, btnID) => {
        if(gameBoardObject.game.includes(btnID)) {
            return;
        }
        if (BTN.classList.contains('x-btn')) {
            return;
        }
        if (BTN.classList.contains('o-btn')) {
            return;
        }
        if ((gameBoardObject.returnMarker[gameBoardObject.returnMarker.length - 1] === 'x')) {
            createO(BTN, btnID);
            return; //this was it******************
        }
        if (gameBoardObject.returnMarker.length === 0 || (gameBoardObject.returnMarker[gameBoardObject.returnMarker.length - 1] === 'o')) {
            createX(BTN,btnID);
            return;
        }
    }

    return {
        gameBoardObject, 
        createX, 
        createO,
        switchPlayers
    }
}

const displayController = (() => {  

    const createXBtn = (BTN) => {
        const divEl = document.createElement('div');
        divEl.textContent = "X";
        divEl.classList.add('x-btn');
        BTN.appendChild(divEl);
    }
    const createOBtn = (BTN) => {
        const divEl = document.createElement('div');
        divEl.textContent = "O";
        divEl.classList.add('o-btn');
        BTN.appendChild(divEl);
    }

    return { 
        createXBtn,
        createOBtn
    }    
})();


const btnListener = (() => {
    const game = gameLogic(); //this is creating an object "game" by calling the function
    // log(game);
    const allBtns = ()=> {
        const gameBtns = document.querySelectorAll('.game-btn');
        gameBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const BTN = e.target;
                const btnID = String(BTN.getAttribute('id'));
                game.switchPlayers(BTN, btnID);
                log()
            })
        })
    }
    return {allBtns}
})();

btnListener.allBtns();

log(gameBoard);
