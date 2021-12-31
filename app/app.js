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
		const divEl = document.createElement("div");
		divEl.textContent = "X";
		divEl.classList.add("x-btn");
		BTN.appendChild(divEl);
	};
	const createOBtn = (BTN) => {
		const divEl = document.createElement("div");
		divEl.textContent = "O";
		divEl.classList.add("o-btn");
		BTN.appendChild(divEl);
	};

	return {
		createXBtn,
		createOBtn
	};
})();

const gameBoard = ((btnID) => {
	const gb = {};
	const returnMarker = [];
	const game = [];
	const testArr = [];

    const loopThroughArr = () => {
        for (const el of testArr) {
            // log(el);
            if (el.hasChildNodes()) {
                log('true');
            }
        }
    }

	const pushMarker = (() => {
		const gameBtns = document.querySelectorAll(".game-btn");
		for (const btn of gameBtns) {
			// if (btn.textContent !== "") {
			// 	testArr.push(btn.textContent);
			// }
            testArr.push(btn);
        }
		

		log(testArr);
        return;
	})();

    

	const user1 = player();
	const user2 = player();

	const checkForWinner = (BTN, btnID) => {
		const displayWinner = document.querySelector("#display-txt");
		log(gb);
		log(game);
		log(btnID, BTN);
		game.forEach((el) => {
			if (btnID === "one" && btnID === "two" && btnID === "three") {
				if (BTN.innerText === "x") {
					return (displayWinner.textContent = "User 1 is the winner!");
				}
			}
		});
		const gameKeys = Object.keys(gb);
		const gameValues = Object.values(gb);
		const entries = Object.entries(gb);

		log(entries);
	};

	const createX = (BTN, btnID) => {
		displayController.createXBtn(BTN);
		returnMarker.push(user1.xMarker());
		game.push(btnID);
		gb[btnID] = "x";
		loopThroughArr();
		checkForWinner(BTN, btnID);
	};

	const createO = (BTN, btnID) => {
		displayController.createOBtn(BTN);
		returnMarker.push(user2.oMarker());
		game.push(btnID);
		gb[btnID] = "o";
		loopThroughArr();
		checkForWinner(BTN, btnID);
	};

	const switchPlayers = (BTN, btnID) => {
		if (game.includes(btnID)) {
			return;
		}
		if (BTN.classList.contains("x-btn")) {
			return;
		}
		if (BTN.classList.contains("o-btn")) {
			return;
		}
		if (returnMarker[returnMarker.length - 1] === "x") {
			createO(BTN, btnID);
			return; //this was it******************
		}
		if (
			returnMarker.length === 0 ||
			returnMarker[returnMarker.length - 1] === "o"
		) {
			createX(BTN, btnID);
			return;
		}
	};

	const allBtns = () => {
		const gameBtns = document.querySelectorAll(".game-btn");
		gameBtns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				const BTN = e.target;
				const btnID = String(BTN.getAttribute("id"));
				switchPlayers(BTN, btnID);
			});
		});
	};

	return {
		checkForWinner,
		switchPlayers,
		createX,
		createO,
		allBtns,
		game,
		gb,
		returnMarker
	};
})();

gameBoard.allBtns();


