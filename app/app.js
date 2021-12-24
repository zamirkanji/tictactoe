let log = console.log;

const player = () => {
    // const counter = () => {
    //     let count = 0;
    //     return () => {
    //         console.log(count);
    //         count++;
    //     }
    // }
    const xMarker = () => {
        return "x";
    };
    const oMarker = () => {
        return "o"
    };
    const createXBtn = (BTN) => {
        const divEl = document.createElement('div');
        divEl.textContent = "X";
        divEl.classList.add('x-btn');
        // divEl.textContent = "O"; 
        BTN.appendChild(divEl);
    }
    const createOBtn = (BTN) => {
        const divEl = document.createElement('div');
        divEl.textContent = "O";
        divEl.classList.add('o-btn');
        BTN.appendChild(divEl);
    }
    return {
        counter,
        xMarker,
        oMarker,
        createXBtn,
        createOBtn
    };
};
// const playerTwo = () => {
//     const counter = () => {
//         let count = 0;
//         return () => {
//             console.log(count);
//             count++;
//         }
//     }
//     const oMarker = () => {
//         return "o"
//     };
//     const createOBtn = (BTN) => {
//         const divEl = document.createElement('div');
//         divEl.textContent = "O";
//         divEl.classList.add('o-btn');
//         BTN.appendChild(divEl);
//     }
//     return {
//         counter,
//         oMarker,
//         createOBtn
//     };
// };

// console.log(player());

// player.prototype = Object.create(createXBtn.prototype);

const gameBoard = (() => {
    const game = [];
	return { game };
})();

const displayController = (() => {

    const gameArr = Object.assign({}, gameBoard);
    console.log(gameArr);
    
    const user1 = player();
    const user2 = player(); 

    // const playerCounter = user1.counter();
    // const playerTwoCounter = user2.counter();

    const createX = (BTN) => {
            user1.createXBtn(BTN);
            // playerCounter();
            gameArr.game.push(user1.xMarker());
    }
    const createO = (BTN) => {
            user2.createOBtn(BTN);
            // playerTwoCounter();
            gameArr.game.push(user2.oMarker());
    }
    
    // const {xMarker, oMarker, createXBtn} = player(); //inheritance from player class

    const btnListener = () => {
        const gameBtns = document.querySelectorAll('.game-btn');
        gameBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const BTN = e.target;
                if (BTN.classList.contains('x-btn')) {
                    return;
                }
                if (BTN.classList.contains('o-btn')) {
                    return;
                }
                if (gameArr.game.length === 0 || (gameArr.game[gameArr.game.length - 1] === 'o')) {
                    log('test');
                    createX(BTN);
                    // user1.createXBtn(BTN);
                    // playerCounter();
                    // gameArr.game.push(user1.xMarker());
                }
                if ((gameArr.game[gameArr.game.length - 1] === 'x') || (gameArr.game.length >= 1)) {
                    createO(BTN);
                    // user2.createOBtn(BTN);
                    // playerTwoCounter();
                }
            })
        })
    }

    return { 
        gameArr, 
        createX,
        btnListener 
    }

 })();

 displayController.btnListener();