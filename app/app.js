let log = console.log;

const gameBoard = (() => {
    const game = [];
    const checkForWinner = () => {
        game.forEach(playerMove => {

        })
    }
	return { game, checkForWinner };
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
    log('test');
    const user1 = player();
    const user2 = player(); 

    const gameArr = Object.assign({}, gameBoard);

    const createX = (BTN) => {
        displayController.createXBtn(BTN);
        gameArr.game.push(user1.xMarker());
        log(gameArr);
    }

    const createO = (BTN) => {
        displayController.createOBtn(BTN);
        gameArr.game.push(user2.oMarker());
        log(gameArr);
    }

    const switchPlayers = (BTN) => {
        if (BTN.classList.contains('x-btn')) {
            return;
        }
        if (BTN.classList.contains('o-btn')) {
            return;
        }
        if ((gameArr.game[gameArr.game.length - 1] === 'x')) {
            createO(BTN);
            return; //this was it******************
        }
        if (gameArr.game.length === 0 || (gameArr.game[gameArr.game.length - 1] === 'o')) {
            // log('test');
            createX(BTN);
            return;
        }
    }

    return {
        gameArr, 
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
        createOBtn,
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
                game.switchPlayers(BTN);
            })
        })
    }
    return {allBtns}
})();

btnListener.allBtns();
