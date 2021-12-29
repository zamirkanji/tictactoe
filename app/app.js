let log = console.log;

const player = () => {

    const xMarker = () => "x";
    const oMarker = () => "o";

    return {
        xMarker,
        oMarker
    };
};

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

const gameBoard = ((btnID) => {
    const gb = {};
    const returnMarker = [];
    const game = [];


    const user1 = player();
    const user2 = player();

    const checkForWinner = () => {
        log(gb);

        const gameKeys = Object.keys(gb);
        const gameValues = Object.values(gb);
        const entries = Object.entries(gb);

        log(entries);

        // if (game)

    }

    const createX = (BTN, btnID) => {
        displayController.createXBtn(BTN);
        returnMarker.push(user1.xMarker());
        game.push(btnID);
        gb[btnID] = "x";
        checkForWinner();
    }

    const createO = (BTN, btnID) => {
        displayController.createOBtn(BTN);
        returnMarker.push(user2.oMarker());
        game.push(btnID);
        gb[btnID] = "o";
        checkForWinner();
    }

    const switchPlayers = (BTN, btnID) => {
        if(game.includes(btnID)) {
            return;
        }
        if (BTN.classList.contains('x-btn')) {
            return;
        }
        if (BTN.classList.contains('o-btn')) {
            return;
        }
        if ((returnMarker[returnMarker.length - 1] === 'x')) {
            createO(BTN, btnID);
            return; //this was it******************
        }
        if (returnMarker.length === 0 || (returnMarker[returnMarker.length - 1] === 'o')) {
            createX(BTN,btnID);
            return;
        }
    }

    const allBtns = ()=> {
        const gameBtns = document.querySelectorAll('.game-btn');
        gameBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const BTN = e.target;
                const btnID = String(BTN.getAttribute('id'));
                switchPlayers(BTN, btnID);
            })
        })
    }
    
	return {checkForWinner, switchPlayers, createX, createO, allBtns, game, gb, returnMarker};
})();

gameBoard.allBtns();


