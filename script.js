window.loggedIn = false;
const isMobile = () => (window.innerWidth < 800) && ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
window.onMobile = isMobile();

console.log(`I am on ${isMobile() ? 'Mobile' : 'PC'}`);

	function setupUI(){
		var style = document.createElement('style');
    style.type = 'text/css';

    var css = `
    #modmenubtn {
  z-index: 21;
  top: 30vh;
  width: 10vh;
  height: 10vh;
  border-style: none;
  background: url('https://imgur.com/QygCc3e.png');
  background-size: 10vh 10vh;
  background-repeat: no-repeat;
  position: fixed;
  right: 5vh;
  opacity: 1;
}

#modmenuclosebtn {
  z-index: 21;
  top: 1vh;
  width: 6vmin;
  height: 6vmin;
  border-style: none;
  background: url('https://imgur.com/x9VGklK.png');
  background-size: 6vmin;
  background-repeat: no-repeat;
  position: fixed;
  right: 6vh;
}

#modmenu {
  z-index: 20;
  top: 33vh;
  width: 30vmin;
  height: 40vmin;
  border-style: solid;
  border-radius: 20px;
  border-color: #353634;
  background-color: rgb(0 0 0 / 60%);
  position: absolute;
  right: 6vh;
}

#modmenu input {
  width: 85%;
}

#modmenutitle {
  font-size: 2.5vmin;
  margin: 0;
  position: relative;
  display: block;
  height: 3vmin;
  text-align: center;
  color: #8c8282;
  z-index: -1;
}

.modmenusubtitle {
  font-size: 2vmin;
  position: relative;
  display: block;
  width: 100%;
  height: 1vmin;
  text-align: center;
  color: #b2acac;
}
		#title {
		 z-index: 7;
		}

        #modmenutitle {
            color: #7289da;
            margin-bottom: 10px;
        }

        #modmenusubtitle {
            color: #ffffff;
        }

        #modmenu .buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: -5px;
            margin-right: 3%;
            width: 100%;
        }

        #modmenu .buttons button {
            margin: 5px;
            padding: 5px 10px;
            background-color: #7289da;
            color: white;
            border: none;
            border-radius: 5px;
            margin: 3px;
            width: 90%;
            cursor: pointer;
        }

        .game-over-block {
    background-image: url('https://imgur.com/ZLrahOh.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 33vmin;
    height: 24vmin;

    #gallery-btn {
  border-radius: 100%;
  width: 130px;
  height: 130px;
  margin: 0;
  border-style: none;
  z-index: 25;
  background-color: rgba(255, 255, 255, 0.6);
  background-image: url("");
}

#play-btn {
  background-image: url('https://imgur.com/5CVgh9Z.png');
  justify-content: center;
  background-size: 90px;
  background-repeat: no-repeat;
  background-color: black;
}

#spectate-btn {
  background-image: url('https://imgur.com/9uVyMAA.png');
  justify-content: center;
  background-size: 90px;
  background-repeat: no-repeat;
  background-color: black;
}

#settings-btn {
  background-image: url('https://imgur.com/khD251j.png');
  justify-content: center;
  background-size: 90px;
  background-repeat: no-repeat;
  background-color: black;
}

#lead-btn {
  background: url('https://imgur.com/35RVcRC.png');
  right: 1vmin;
}

#leaveBtn {
  opacity: 1;
  left: 1vmin;
  background: url('https://imgur.com/uPAWVDq.png');
}

#fullScreenBtn {
  position: absolute;
  width: 6vw;
  height: 6vw;
  top: 12vh;
  left: 12vh;
  opacity: 1;
  z-index: 99;
  background: url('https://imgur.com/j54O1rq.png');
  background-size: 100% 100%;
  border-style: none;
}

.nipple .back {
  background-image: url('https://imgur.com/hUcx4VA.png');
}

.nipple .front {
  background-image: url('https://imgur.com/XrgEyY5.png');
}

#leaderboard {
  padding-left: 3vmin;
  padding-right: 3vmin;
  padding-bottom: 3vmin;
  width: 25vmin;
  height: 30vmin;
  margin: 0;
  overflow: hidden;
  font-family: sans-serif;
  font-weight: bold;
  position: absolute;
  top: 1vh;
  right: 5vmin;
  z-index: 1;
  color: #eee;
  background-image: url('https://imgur.com/6X7gjhu.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#login {
    width: 280px
}

#login form span {
    background-color: #363b41;
    border-radius: 3px 0 0 3px;
    color: #606468;
    display: block;
    float: left;
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 50px
}

#login form input {
    height: 50px
}

#login form input[type=email],input[type=password],input[type=text] {
    background-color: #3b4148;
    border-radius: 0 3px 3px 0;
    color: #606468;
    margin-bottom: 1em;
    padding: 0 16px;
    width: 230px
}

#login form input[type=submit] {
    background-color: #302e2f;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 80px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase;
    width: 280px
}

#login form input[type=submit]:hover {
    background-color: #514b4d
}

#login>p {
    text-align: center
}

#login>p span {
    padding-left: 5px
}

#chat_textbox {
  margin: 0;
  padding: 1vmin 3vmax 1vmin 3vmax;
  border-radius: 3vmax;
  transition: all .5s ease-in-out;
  background: rgb(158 158 167 / 50%);
  border: 0;
  color: white;
  text-indent: 2vmin;
  font-family: "Ubuntu";
  width: 25vmin;
}

#chat_textbox:focus {
  background: rgb(55 52 52 / 50%);
}

#chatBtn {
  opacity: 1;
  background: url(./assets/img/Chat.png);
  width: 3vmax;
  height: 3vmax;
  background-size: 100% 100%;
  border-style: none;
}

#emojiBtn {
  opacity: 1;
  color: white;
  background: url(./assets/img/Emoji.png);
  width: 3vmax;
  height: 3vmax;
  background-size: 100% 100%;
  border-style: none;
}


    `;

	var buttonsContainer = document.createElement('div');

    buttonsContainer.classList.add('buttons');
modmenu.appendChild(modmenutitle);
modmenu.appendChild(document.createElement("br"));
modmenu.appendChild(document.createElement("br"));
modmenu.appendChild(document.createElement("br"));
    modmenu.appendChild(buttonsContainer);

		const menuTitle = document.querySelector("#title");
			menuTitle.src = "https://imgur.com/z9xsEpx.png";
			menuTitle.style = "position: absolute; top: -8%; z-index: 7; width: 45vh; height: 45vh;";
		
			const elements = ["#seasons-body", "#seasons-header", "#store-body", "#store-header", "#gallery-content", "#gallery-header"];
				elements.forEach(element => {
    				document.querySelector(element).style.backgroundColor = "black";
				});

			const setStyle = (selector, style) => {
    				document.querySelector(selector).style.cssText = style;
				};

				setStyle("#gallery-body", "background-image: linear-gradient(to bottom, black, white, black)");
				setStyle(".windowclosebtn", "filter: hue-rotate(200deg)");
				setStyle("#settings-body", "background-image: linear-gradient(to bottom, black, white, black)");
				setStyle("#Settings-common", "background-color: #818589; border-radius: 25px");
				setStyle("#settings-header", "background-color: black");
				document.querySelectorAll(".windowclosebtn").forEach(elem => setStyle(elem, "filter: hue-rotate(200deg)"));
				setStyle("#Settings-quality", "background-color: #818589; border-radius: 25px");
				setStyle("#Settings-input", "background-color: #818589; border-radius: 25px");
				setStyle("#keys", "background-color: lightgray; border-radius: 25px");




	function setupCustomSkins(){
		var customSkinList = ['https://imgur.com/3cgoHaO.gif', 'https://imgur.com/zxiVZG8.png']


		function checkCustomSkin(customLink) {
    			const customSkins = document.querySelector(".customSkinContainer").children;
    			for (let i = 0; i < customSkins.length; i++) {
        		if (customLink === customSkins[i].src) {
            	return true;
        	}
    	}
    return false;
}


			var mainContainer = document.querySelector("label[for='custom-skin']").nextElementSibling.querySelector("ul");
		var customSkinContainer = document.createElement("ul");
		customSkinContainer.setAttribute("class", "window-body");
		customSkinContainer.classList.add("customSkinContainer");

		var saveSkinBtn = document.createElement("button");
		var saveSkinText = document.createTextNode("Save");
		saveSkinBtn.append(saveSkinText);
		saveSkinBtn.style = "height: 50px; width: 100px; background: lightgreen; border-radius: 25px;";

		saveSkinBtn.onclick = ()=> {
			if (document.querySelector("#customSkin").value && !checkCustomSkin(document.querySelector("#customSkin").value)){
					addNewCustomSkin("Skin" + document.querySelector(".customSkinContainer").children.length, document.querySelector("#customSkin").value, 1);
					if (localStorage.getItem("customSkins")){
						localStorage.setItem("customSkins", localStorage.getItem("customSkins") + ", " + document.querySelector("#customSkin").value);

					} else {
						localStorage.setItem("customSkins", document.querySelector("#customSkin").value);
					}
				}

		};


		var removeSkinBtn = document.createElement("button");
		var removeSkinText = document.createTextNode("Remove Skin");
		removeSkinBtn.append(removeSkinText);
		removeSkinBtn.style = "height: 50px; width:fit-content; background: red; border-radius: 25px; color: white;";

		removeSkinBtn.onclick = ()=> {
			if (localStorage.getItem("customSkins")){
				var customLinks = localStorage.getItem("customSkins").split(",");
				customLinks.pop();
				localStorage.setItem("customSkins", customLinks);
				document.querySelectorAll(".custom")[document.querySelectorAll(".custom").length-1].remove();
			}
		}


		var buttonContainer = document.createElement("li");
		buttonContainer.style = "display: flex; height: fit-content; width: 100%; flex-direction: row";
		mainContainer.append(document.createElement("br"));
		buttonContainer.style.justifyContent = "center";
		customSkinContainer.append(buttonContainer);
		buttonContainer.append(saveSkinBtn);
		buttonContainer.append(removeSkinBtn);
		mainContainer.append(document.createElement("br"));
		mainContainer.append(customSkinContainer);

		function addNewCustomSkin(name, link, custom) {

			var newSkin = document.createElement("img");

			if (custom == 0) {
				newSkin.setAttribute("class", name);
			} else {
				if (custom == 1) {
					newSkin.classList.add(name);
					newSkin.classList.add("custom");

				}
			}
			mainContainer.style = "";
			 newSkin.classList.add("circular");



			customSkinContainer.append(newSkin);

			customSkinContainer.style.overflow = "visible"
			document.querySelector("." + name).src = link;
			document.querySelector("." + name).style = "height: 150px; width: 150px; border-radius: 50%; cursor: pointer; border: 1.5px solid blue; border-style: dotted; margin: 5px;";
		document.querySelector("." + name).onclick = ()=>{settings.customSkin = link; connect(settings.server); document.querySelector(".windowclosebtn").click();};
		}
    
			if (customSkinList){
				for (let i = 0; i<customSkinList.length; i++){
					addNewCustomSkin("Skin" + i, customSkinList[i], 0);
				}
			}



			if (localStorage.getItem("customSkins")){
				var localCustomSkins = localStorage.getItem("customSkins").split(",");
				for (let i = 0; i<localCustomSkins.length; i++){
					addNewCustomSkin("Skin" + document.querySelector(".customSkinContainer").children.length, localCustomSkins[i], 1);

				}
			}

		}

		if (!window.onMobile){
			var press4Btn = createModBtn("press4Btn", "off", "press4On", "4 key respawn");
			var emojiBindingsButton = createModBtn("emojiBindings", "on", "emojiBindsOff", "Emoji Keybinds");
		}
		var spamLastEmoteBtn = createModBtn("spamLastEmoteBtn", "off", "spamLastEmoteOn", "Recent Emoji");
		var spamEmojiBtn = createModBtn("spamEmojiBtn", "off", "spamEmojisOn", "All Emojis");
		var respawnButton = createModBtn("respawnButton", "on", "respawnBtnOff", "Auto Respawn");

		document.querySelector(".buttons").append(document.querySelector("#modmenu").querySelector(".button-81"));
		document.querySelector("#modmenu").querySelector(".button-81").style.padding = "10px";
		document.querySelector("#modmenu").querySelector(".button-81").style.background = "gray";


	}

	/*
 const handleMutation = (mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'hidden') {
                    if (mutation.target.id === 'overlays') {
                        if (!mutation.target.hidden) {
                            document.querySelector("#overlays").style.backgroundImage = "url('" + backgroundImage + "')";
                        }
                    }
                }
            }

            // Check if window.stats.mycells becomes 0
            if (typeof window.stats !== 'undefined' && window.stats.mycells === 0) {
                document.querySelector("#overlays").style.backgroundImage = "url('" + backgroundImage + "')";
            }
        };

        // Options for the observer
        const observerOptions = {
            attributes: true, // Watch for changes to attributes
            attributeFilter: ['hidden'], // Only watch for changes to the "hidden" attribute
        };

        // Create the observer
        const overlaysElement = document.getElementById('overlays');
        const observer = new MutationObserver(handleMutation);

        // Start observing the "overlays" element
        observer.observe(overlaysElement, observerOptions);
		*/

	window.addEventListener("load", ()=>{
             if (localStorage.getItem("seenShill")){
			} else {
				 swal("Thank You For Installing My Script Have a Great Time!");
				 localStorage.setItem("seenShill", "1");
			}

			const setStyle = (selector, styles) => Object.assign(document.querySelector(selector).style, styles);
				setStyle("#title", { zIndex: "2" });
				setStyle("button#play-btn", { backgroundImage: "url('https://imgur.com/7YMajXs.png')", backgroundColor: "black" });
				setStyle("button#spectate-btn", { backgroundImage: "url('https://imgur.com/IzLinbS.png')", backgroundColor: "black" });
				setStyle("button#settings-btn", { backgroundImage: "url('https://imgur.com/Vs3qLFY.png')", backgroundColor: "black" });
				setStyle("#modmenu", { height: "fit-content" });
				setStyle("label[for='custom-skin'] + ul li", { height: "" });


	function setupEmojiSettings() {
    const emojiContainer = document.querySelector(".react-horizontal-scrolling-menu--scroll-container");
    const emojis = emojiContainer ? emojiContainer.querySelectorAll("img") : [];
    const emojiLinks = emojis.map(emoji => emoji.src);

    const emojiBindTitle = createEmojiElement("span", "Custom Emoji Keybinds", "emojiBindTitle");
    const restoreEmojiBindsBtn = createEmojiElement("div", "Restore default emoji Keybinds", "restoreEmojiBinds");
    restoreEmojiBindsBtn.style = "background: red; border-radius: 15px; color: white; height: fit-content: width: fit-content; cursor: pointer;";
    restoreEmojiBindsBtn.addEventListener("click", restoreDefaultEmojiBinds);

    document.querySelector("#keys").append(emojiBindTitle, restoreEmojiBindsBtn);

    const emojiBindBtns = Array.from({ length: emojis.length }, (_, i) => createEmojiElement("button", "", `emojiBind${i}`, "width: 50px; height: 50px;"));

    for (let i = 0; i < emojis.length; i++) {
        const newEmoji = createEmojiElement("img", "", `emoji${i}`, "height: 50px; width: 50px; border-radius: 50%; border: 1px solid blue; transform: translate(100px, 0px);");
        newEmoji.src = emojiLinks[i];
        document.querySelector("#keys").append(newEmoji, emojiBindBtns[i]);
    }

    emojiBindBtns.forEach((btn, i) => btn.addEventListener("click", () => addKeyupEventListener(btn, i)));

    initializeEmojiBinds(emojiBindBtns);
}

function createEmojiElement(elementType, innerText, className, style = "") {
    const element = document.createElement(elementType);
    element.innerText = innerText;
    element.setAttribute("class", className);
    element.style = style;
    return element;
}

function restoreDefaultEmojiBinds() {
    const emojiBindBtns = document.querySelector("#keys").querySelectorAll("button");

    for (const btn of emojiBindBtns) {
        localStorage.removeItem(btn.className);
        btn.innerText = "";
    }

    const defaultEmojiBinds = ["1", "2", "c", "v", "a", "s", "d", "x", "!", "z", "@", "A", "S", "D", "Z", "X", "C", "V"];
    emojiBindBtns.forEach((btn, i) => (btn.innerText = defaultEmojiBinds[i]));
}

function addKeyupEventListener(btn, i) {
    const updateButtonText = (event) => {
        if (event.key === "Backspace") {
            btn.innerText = "";
            localStorage.setItem(btn.className, " ");
            btn.removeEventListener("keyup", updateButtonText);
        } else {
            btn.innerText = event.key;
            localStorage.setItem(btn.className, btn.innerText);
            btn.removeEventListener("keyup", updateButtonText);
        }
    };

    btn.addEventListener("keyup", updateButtonText);
}

function initializeEmojiBinds(emojiBindBtns) {
    const defaultEmojiBinds = ["1", "2", "c", "v", "a", "s", "d", "x", "!", "z", "@", "A", "S", "D", "Z", "X", "C", "V"];

    for (let i = 0; i < defaultEmojiBinds.length; i++) {
        emojiBindBtns[i].innerText = defaultEmojiBinds[i];
    }

    for (const btn of emojiBindBtns) {
        if (localStorage.getItem(btn.className)) {
            btn.innerText = localStorage.getItem(btn.className) === " " ? "" : localStorage.getItem(btn.className);
        }
    }
}

function clearEmojisBinds() {
    document.querySelector(".emojiBindTitle").remove();
    document.querySelector(".restoreEmojiBinds").remove();
    document.querySelector("#keys").querySelectorAll("button, img").forEach((element) => element.remove());
}

function refreshEmojiSettings() {
    clearEmojisBinds();
    setupEmojiSettings();
}

function createLoginEvent() {
    // ... (unchanged)
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function loading() {
    // ... (unchanged)
}


				function soundEffects() {
							var eatAudio = new Audio("https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/munch-sound-effect.mp3?raw=true");
			var deathAudio = new Audio("https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/tmp_7901-951678082.mp3?raw=true");
			var splitAudio = new Audio("https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/perfect-fart.mp3?raw=true");
			var uSuckAudio = new Audio("https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/succ.mp3?raw=true");
			var bigSplitAudio = new Audio("https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/bigSplit.mov?raw=true");
			var popAudio = new Audio("https://github.com/ShazamHax/SoundEffects/blob/main/ScriptSounds/jixaw-metal-pipe-falling-sound.mp3?raw=true");
			var oldVirusEaten;
			var oldCellsEaten;
			var oldSplits;
			setInterval(()=>{
				if (document.querySelector("#soundEffectsBtn.on")){



				/*if (window.stats.virusesEaten > oldVirusEaten){

						popAudio.pause();
					popAudio.currentTime = 0;
					popAudio.play();



				} else {
					 if (window.stats.cellsEaten > oldCellsEaten) {
					eatAudio.pause();
					eatAudio.currentTime = 0;
					eatAudio.play();
				} else {
						   if (window.stats.mycells > oldSplits && window.stats.mycells != 0 && oldSplits != 0){
					if (window.stats.score > 15000){
						splitAudio.pause();
						splitAudio.currentTime = 0;
						 bigSplitAudio.pause();
						bigSplitAudio.currentTime = 0;
						bigSplitAudio.play();
					} else {
						bigSplitAudio.pause();
						bigSplitAudio.currentTime = 0;
						splitAudio.pause();
						splitAudio.currentTime = 0;
					splitAudio.play();
					}
				}
				}
				}
				oldCellsEaten = window.stats.cellsEaten;
				oldVirusEaten = window.stats.virusesEaten;

				oldSplits = window.stats.mycells;
				if (window.stats.mycells == 0) {
					if (window.stats.score > 15000){
						uSuckAudio.play();
					} else {
						deathAudio.play();

					}
				}

				}

			});
			}*/

		var emojiInterval = setInterval(()=>{

			var emoteCards = document.querySelectorAll(".react-horizontal-scrolling-menu--item");
			for (let i = 0; i<emoteCards.length; i++){
				emoteCards[i].addEventListener("click", (click)=>{
					if (click){
						localStorage.setItem("lastEmote", emoteCards[i].outerHTML.split("\"")[3]);
					}
				})
			}
					if (document.querySelector("button#spamLastEmoteBtn.on")){
						 document.querySelector("div[data-key='" + localStorage.getItem("lastEmote") + "']").firstChild.firstChild.click();
					}


					var emojiIndex;
					var emojis = document.querySelectorAll(".card");
					if (document.querySelector("button#spamEmojiBtn.on")){
						emojiIndex = randomIntFromInterval(0, emojis.length-1);
						emojis[emojiIndex].firstChild.click();
					}

			}, 800);



		var gameover = document.querySelector("#game-over");
           	setInterval(()=> {
         if (document.querySelector("#chat")){
			document.querySelector("#chat").querySelectorAll("p").forEach((elem)=>{
				  var textElement = elem;
				  var computedStyle = getComputedStyle(textElement);
				  var textColor = computedStyle.color;
				  var rgbValues = textColor.match(/\d+/g);
				  var red = parseInt(rgbValues[0]);
				  var green = parseInt(rgbValues[1]);
				  var blue = parseInt(rgbValues[2]);
				  var brightness = (red * 299 + green * 587 + blue * 114) / 600;

				  if (brightness < 128 && window.settings.darkTheme == true) {
					  var num1 = 0.5;
					textElement.style.textShadow = `-${num1}px -${num1}px 0 white, ${num1}px -${num1}px 0 white, -${num1}px ${num1}px 0 white, ${num1}px ${num1}px 0 white`;
				  } else {
					textElement.style.textShadow = `-${num1}px -${num1}px 0 black, ${num1}px -${num1}px 0 black, -${num1}px ${num1}px 0 black, ${num1}px ${num1}px 0 black`;

				  }

});

		 }


				if (window.isbot == true) {
					signOut();
				} else {
					if (window.isbot == false){
						window.focus();
					}
				}

			  if (document.querySelector("button#respawnButton.on")){

				  if (document.querySelector("#game-over")){
					  document.querySelector("#game-over").remove()
				  }

					if (stats.mycells == 0) {
						play();
					}
				} else {
					if (!document.querySelector("#game-over")){
						if (gameover){
							document.querySelector("#root").append(gameover);
						}
					}
				}
		  }, 400);


	      var modBtns = document.querySelector("#modmenu").querySelectorAll("button");
			for (let i = 0; i<modBtns.length; i++){

			modBtns[i].addEventListener("mouseenter", ()=>{
				modBtns[i].style.transform = "scale(1.1)";
			})
			modBtns[i].addEventListener("mouseleave", ()=>{
				modBtns[i].style.transform = "scale(1)";
			})
			}
			var Stats = document.querySelector("#stats1");
			var newStats = document.createElement("div");
			var currentSplits = document.createElement("div");
			var currentSplitsText = document.createElement("div");
			var cellsContainer = document.createElement("div");
			cellsContainer.style.display = "flex";
			cellsContainer.style.columnGap = "10px";
			cellsContainer.style.border = "1px solid blue";
			currentSplitsText.innerText = "Cells: ";
			newStats.style.display = "flex";
			newStats.style.columnGap = "20px";
			newStats.style.fontSize = "20px";
			Stats.append(newStats);
			newStats.append(cellsContainer);
			cellsContainer.append(currentSplitsText);
			cellsContainer.append(currentSplits);
			setInterval(()=>{
				if (document.querySelector("label[for='Level']")){
					var lvlSkins = document.querySelector("label[for='Level']").nextElementSibling.firstChild.children;
				function getSkinLvl(skin){
					return skin.firstChild.nextElementSibling.innerText
				}
				for (let i = 0; i<lvlSkins.length; i++){
					if (parseInt(getSkinLvl(lvlSkins[i]))>parseInt(document.querySelector("#account-lvl").innerText)){
						lvlSkins[i].style.filter = "grayscale(100%) brightness(40%)"
					} else {
					 lvlSkins[i].style.filter = "";
					}
				}
				}

			}, 1000);


			setInterval(()=>{
				if (document.querySelector("#modmenubtn").hidden == true && document.querySelector("#modmenu").hidden == true){
					document.querySelector("#modmenubtn").hidden = "";
				}
			}, 1000);

	function handleCanvasClickDown(event){
			if (event.button === 0) {
				SplitStart();

			}
			if (event.button == 1) {
				EjectStart();
			}
			if (event.button === 2) {
				MacroStart();
			}

	}
	function handleCanvasClickUp(event){
		if (event.button === 0) {

		}
		if (event.button === 1){
			EjectEnd();
		}
		if (event.button === 2) {
			MacroEnd();
		}

	}


			setInterval(()=>{
				if (window.settings.gamemode == "Selfeed"){
						currentSplits.innerText = window.stats.mycells + "/64";
				} else {
						 currentSplits.innerText = window.stats.mycells + "/16";
				}

              if (document.querySelector("#mouseControls.on")){
				  document.querySelector("#glcanvas").addEventListener('mousedown', handleCanvasClickDown);

					document.querySelector("#glcanvas").addEventListener('mouseup', handleCanvasClickUp);



			  } else {
				  document.querySelector("#glcanvas").removeEventListener('mousedown', handleCanvasClickDown);

					document.querySelector("#glcanvas").removeEventListener('mouseup', handleCanvasClickUp);

			  }



			});


	var cribl = [
		"https://www.snay.io/assets/skins/Mei.png",
		"https://www.snay.io/assets/skins/vani.png",
		"https://www.snay.io/assets/skins/pellet1_image.png",
		"https://www.snay.io/assets/skins/pellet2_image.png",
		"https://www.snay.io/assets/skins/pellet3_image.png",
		"https://www.snay.io/assets/skins/pellet_image.png",
		"https://www.snay.io/assets/skins/heart.png"
	]

	function setSkinsEvent() {
		  const observer = new MutationObserver(function () {
			const isLoggedIn = document.querySelector("#profile-btn.fade-in") !== null;
			if (isLoggedIn) {
				setTimeout(()=>{
				var oka = document.querySelector("#account-content").querySelectorAll("span")[2].innerText;

					for (let i = 0; i<cribl.length; i++){
						var lin = document.createElement("li");
						lin.classList.add("skin");
						var spanf = document.createElement("span");
						spanf.setAttribute("class", "skin-wrapper lazy-load-image-background blur lazy-load-image-loaded");
						spanf.style = "color: transparent; display: inline-block; height: 150px; width: 150px;";
						lin.appendChild(spanf);
						lin.classList.add("L4");

						var sklib = document.createElement("img");
						sklib.src = cribl[i];
						sklib.style.height = "150px";
						sklib.style.width = "150px";
						sklib.style.margin = "5px";
						sklib.classList.add("circular");
						spanf.append(sklib);
						sklib.setAttribute("alt", cribl[i].split(".")[cribl[i].split(".").length-2].split("/")[cribl[i].split(".")[cribl[i].split(".").length-2].split("/").length-1]);
						if (cribl[i].split(".")[cribl[i].split(".").length-2].split("/")[cribl[i].split(".")[cribl[i].split(".").length-2].split("/").length-1] == "matter"){
							sklib.style.backgroundColor = "gray";
						}
						sklib.onclick = ()=>{
							var name = cribl[i].split(".")[cribl[i].split(".").length-2].split("/")[cribl[i].split(".")[cribl[i].split(".").length-2].split("/").length-1]
							changeSkin(name);
						}
						document.querySelector("label[for='own']").nextElementSibling.firstChild.append(lin);
					}

				}, 5000);
			} else {
				if (document.querySelectorAll(".L4")){
					document.querySelectorAll(".L4").forEach((elem)=>{
						window.settings.skin = "";
						localStorage.setItem("settings", localStorage.getItem("settings").replace(window.settings.skin, ""));
						elem.remove();
					});
				}
			}
		  });

		  const targetElement = document.querySelector("#profile-btn");
		  if (targetElement) {
			observer.observe(targetElement, { attributes: true, attributeFilter: ['class'] });
		  } else {
			console.error("Target element not found.");
		  }
		}

	var autoGetQuest = setInterval(()=>{
if (document.querySelector("#quests-body")){
    if (document.querySelector("#quests-body").querySelector("button")){
	if (window.loggedIn){
        document.querySelector("#quests-body").querySelector("button").click();
	}
    }
}
})

	function removeElement(element) {
    if (element) {
        element.remove();
        return true;
    } else {
        return false;
    }
}

/*
setInterval(() => {
    removeElement(document.querySelector(".ad-box"));
    document.querySelectorAll("script").forEach((script) => {
        if (script.src.includes("adinplay") || script.innerText.includes("Advertisement")) {
            removeElement(script);
        }
    });
    document.querySelectorAll(".ads").forEach((element) => {
        removeElement(element);
    });
    removeElement(document.querySelector("iframe[aria-label='Advertisement']"));
    document.querySelectorAll("iframe").forEach((iframe) => {
        removeElement(iframe);
    });
    if (document.querySelector(".divFullscreenLoading")) {
        removeElement(document.querySelector(".divFullscreenLoading"));
        console.log("Removed video ad");
    }
}, 1000);
*/


	setSkinsEvent();
	setupUI();
	setupCustomSkins();
	setupModMenu();
	createLoginEvent();
	loading();

