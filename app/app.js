let log = console.log;

const player = () => {
    const xMarker = () => "x";
    const oMarker = () => "o";
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
        xMarker,
        oMarker,
        createXBtn,
        createOBtn
    };
};

const gameBoard = (() => {
    const game = [];
	return { game };
})();

const displayController = (() => {

    const gameArr = Object.assign({}, gameBoard);
    console.log(gameArr);
    
    const user1 = player();
    const user2 = player(); 

    const createX = (BTN) => {
            user1.createXBtn(BTN);
            gameArr.game.push(user1.xMarker());
    }
    const createO = (BTN) => {
            user2.createOBtn(BTN);
            gameArr.game.push(user2.oMarker());
    }
    const gameLogic = (BTN) => {
        if (BTN.classList.contains('x-btn')) {
            return;
        }
        if (BTN.classList.contains('o-btn')) {
            return;
        }
        if ((gameArr.game[gameArr.game.length - 1] === 'x')) {
            createO(BTN);
        }
        if (gameArr.game.length === 0 || (gameArr.game[gameArr.game.length - 1] === 'o')) {
            log('test');
            createX(BTN);
        }
    }

    const btnListener = () => {
        const gameBtns = document.querySelectorAll('.game-btn');
        gameBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const BTN = e.target;
                gameLogic(BTN);
            })
        })
    }

    return { 
        gameArr, 
        createX,
        createO,
        gameLogic,
        btnListener 
    }

 })();

 displayController.btnListener();