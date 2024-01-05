console.log("I am on" + isMobile() == true ? "Mobile" : "PC");

	function setupUI(){
		var style = document.createElement('style');
    style.type = 'text/css';

    var css = `
        #modmenu {
            background-color: #282b30;
            border: none;
            border-radius: 10px;
            margin-top: 100px;
            margin-right: -40px;
            padding-left: 10px;
        }

#modmenubtn {
      z-index: 21;
      top: 20vh;
      width: 10vh;
      height: 10vh;
      border-style: none;
      background: url('https://imgur.com/h32qVjT.png');
      background-size: 10vh 10vh;
      background-repeat: no-repeat;
      position: fixed;
      right: 3vh;
      opacity: 1
      }

        #modmenuclosebtn {
            scale: 1;
            margin-top: 84px;
            margin-right: 117px;
            background: url("https://imgur.com/IrrCXht.png");
			      background-size: contain;
			      position: absolute;
			      left: -3%;
			      top: -14%;


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
    height: 24vmin
    `;

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.head.appendChild(style);
		var modmenu = document.getElementById('modmenu');

    var modmenutitle = document.createElement('div');
    modmenutitle.id = 'modmenutitle';
    modmenutitle.textContent = '😋 Extra 😋';


    var buttonsContainer = document.createElement('div');

    buttonsContainer.classList.add('buttons');
modmenu.appendChild(modmenutitle);
modmenu.appendChild(document.createElement("br"));
modmenu.appendChild(document.createElement("br"));
modmenu.appendChild(document.createElement("br"));
    modmenu.appendChild(buttonsContainer);

		const logo = document.createElement("img");
		const node = document.createElement("p");
		const menuTitle = document.querySelector("#title");
		menuTitle.src = "https://imgur.com/hwTdZHP.png";
		menuTitle.style.position = "absolute";
		menuTitle.style.top = "-5%";
		menuTitle.style.zIndex = "7";
		/*
		setInterval(()=>{
			var labels = document.querySelector("#gallery-body").querySelectorAll("label");
				for (let i = 0; i<labels.length; i++){
					if (labels[i].nextElementSibling.checkVisibility()){
						labels[i].style.backgroundColor = "lightblue";
						labels[i].style.border = "3px solid blue";
					}else {
						labels[i].style.backgroundColor = "gray";
						labels[i].style.border = "";
					}
				}
			});
*/
			document.querySelector("#seasons-body").style.backgroundColor = "black";
			document.querySelector("#seasons-header").style.backgroundColor = "black";
			document.querySelector("#store-body").style.backgroundColor = "black";
			document.querySelector("#store-header").style.backgroundColor = "black";
			document.querySelector("#gallery-content").style.background = "black";
			document.querySelector("#gallery-header").style.backgroundColor = "black";
			/*
			var setLabels = setInterval(()=>{
				if (document.querySelector("#gallery-content").checkVisibility()){
				document.querySelector("#gallery-content").querySelectorAll("label").forEach((elem)=>{
				  elem.style.backgroundColor = "gray";
				  elem.style.borderRadius = "20%";
				})
					clearInterval(setLabels);
				}
			});
*/
			document.querySelector("#gallery-body").style.backgroundImage = "linear-gradient(to bottom, black, white, black)";
			document.querySelector(".windowclosebtn").style.filter = "hue-rotate(200deg)";
			document.querySelector("#settings-body").style.backgroundImage = "linear-gradient(to bottom, black, white, black)";
			document.querySelector("#Settings-common").style.backgroundColor = "#818589";
			document.querySelector("#Settings-common").style.borderRadius = "25px";
			document.querySelector("#settings-header").style.backgroundColor = "black";
			document.querySelectorAll(".windowclosebtn").forEach((elem)=>{elem.style.filter = "hue-rotate(200deg)";})
			document.querySelector("#Settings-quality").style.backgroundColor = "#818589";
			document.querySelector("#Settings-quality").style.borderRadius = "25px";
			document.querySelector("#Settings-input").style.backgroundColor = "#818589";
			document.querySelector("#Settings-input").style.borderRadius = "25px";
			document.querySelector("#keys").style.backgroundColor = "lightgray";
			document.querySelector("#keys").style.borderRadius = "25px";
	}



	function setupCustomSkins(){
		var customSkinList = ["https://yt3.googleusercontent.com/u-utCWZrPSNmWBChuaUop9XAtmKNcAh2y_b03FREgZlYYu1huVegP0_UqE3aV1Jt3k1hqnjY=s176-c-k-c0x00ffffff-no-rj", "https://imgur.com/vCag6CX.png" ]


		function checkCustomSkin(customLink){
			var customExists = false

				var customSkins = document.querySelector(".customSkinContainer").children;
			for (let i = 0; i<customSkins.length; i++){
				if (customLink != customSkins[i].src){
					customExists = false;

				} else {
					customExists = true;
					break;

				}
			}

			return customExists;
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

	function setupModMenu(){

		function createModBtn(id, def, ls, btnName){
			var newBtn = document.createElement("button");
			newBtn.setAttribute("id", id);
			document.querySelector(".buttons").append(newBtn);
			var newBtnOutput = document.createElement("output");
			newBtnOutput.style.color = "white";
			newBtnOutput.setAttribute("id", id + "OutputValue");
			newBtn.append(newBtnOutput);
			var newBtnValueOn = document.createTextNode(btnName +": On");
			var newBtnValueOff = document.createTextNode(btnName +": Off");

			if (def == "off"){
				if (localStorage.getItem(ls)){
					newBtn.setAttribute("class", "on");
					newBtnOutput.append(newBtnValueOn);
					newBtn.style.filter = "brightness(100%)";
				} else {
					newBtnOutput.append(newBtnValueOff);
							newBtn.style.filter = "brightness(70%)";
				}
			} else {
				if (def == "on"){
					if (localStorage.getItem(ls)){
						newBtnOutput.append(newBtnValueOff);
								newBtn.style.filter = "brightness(70%)";
					} else {
						newBtn.setAttribute("class", "on");
						newBtnOutput.append(newBtnValueOn);
								newBtn.style.filter = "brightness(100%)";
					}

				}
			}

			newBtn.onclick = ()=>{
				if (id == "soundEffectsBtn"){
					soundEffects();
				}
				if (def == "off"){
					if (document.querySelector("button#" + id + ".on")){
                         localStorage.removeItem(ls);
						newBtn.style.filter = "";
						newBtn.removeAttribute("class");
								newBtn.style.filter = "brightness(70%)";
						newBtnOutput.firstChild.remove();
						newBtnOutput.append(newBtnValueOff);
					} else {
						if (!document.querySelector("button#" + id + ".on")){
                                 localStorage.setItem(ls, "true");
								newBtn.removeAttribute("class");
								newBtn.setAttribute("class", "on");
								newBtnOutput.firstChild.remove();
								newBtn.style.filter = "brightness(100%)";
								newBtnOutput.append(newBtnValueOn);
							}
					}

				} else {
					if (def == "on"){
						if (document.querySelector("button#" + id + ".on")){
                             localStorage.setItem(ls, "true");
							newBtnOutput.firstChild.remove();
							newBtnOutput.append(newBtnValueOff);
								newBtn.style.filter = "";
								newBtn.style.filter = "brightness(70%)";
							newBtn.removeAttribute("class");
						} else {
							if (!document.querySelector("button#" + id + ".on")){
								localStorage.removeItem(ls);
								newBtnOutput.firstChild.remove();
								newBtnOutput.append(newBtnValueOn);
								newBtn.style.filter = "brightness(100%)";
								newBtn.setAttribute("class", "on");

							}
						}

					}
				}
			}

			newBtn.style.borderRadius = "5px";
			newBtn.style.padding = "10px";
			newBtn.style.transition = "all 1s ease";
			newBtnOutput.style.transition = "all 2s ease";

			return newBtn;
		}

		if (!window.onMobile){
			var press4Btn = createModBtn("press4Btn", "off", "press4On", "4 key respawn");
			var emojiBindingsButton = createModBtn("emojiBindings", "on", "emojiBindsOff", "Emoji Keybinds");
			var mouseControls = createModBtn("mouseControls", "off", "mouseControlsOn", "Mouse Controls");
		}
		var soundEffectsBtn = createModBtn("soundEffectsBtn", "on", "SoundEffectsOn", "Goofy ah Sounds");
		var spamLastEmoteBtn = createModBtn("spamLastEmoteBtn", "off", "spamLastEmoteOn", "Spam Recent Emoji");
		var spamEmojiBtn = createModBtn("spamEmojiBtn", "off", "spamEmojisOn", "Spam All Emojis");
		var respawnButton = createModBtn("respawnButton", "on", "respawnBtnOff", "Automatic Respawn");

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
				 swal("Please consider checking out my Patreon!");
				 localStorage.setItem("seenShill", "1");
			}
/*
			setTimeout(()=>{
				var meny = document.querySelector("#overlays.fade-in");
				var bleb = document.createElement("img");
			bleb.style.height = "100%";
		  bleb.style.width = "100%";
			bleb.src = "https://github.com/GravityGYT/Script/blob/main/download.jpg?raw=true";

			bleb.zIndex = "3";

			//meny.appendChild(bleb);
			
			var checkBackground = setInterval(()=>{
				if(!bleb.checkVisibility()){
					clearInterval(checkBackground);
					meny.appendChild(bleb);
				}
			});
			
			bleb.style.position = "absolute";
			}, 3000);
*/
			document.querySelector("#title").style.zIndex = "2";
			document.querySelector("button#play-btn").style.backgroundImage = "url('https://imgur.com/7YMajXs.png')";
			document.querySelector("button#play-btn").style.backgroundColor = "black";
			document.querySelector("button#spectate-btn").style.backgroundImage = "url('https://imgur.com/IzLinbS.png')";
			document.querySelector("button#spectate-btn").style.backgroundColor = "black";
			document.querySelector("button#settings-btn").style.backgroundImage = "url('https://imgur.com/Vs3qLFY.png')";
		  	document.querySelector("button#settings-btn").style.backgroundImage = "url('https://imgur.com/Vs3qLFY.png')";
			document.querySelector("#settings-btn").style.backgroundColor = "black";
		  	document.querySelector("#modmenu").style.height = "fit-content";
			document.querySelector("label[for='custom-skin']").nextElementSibling.querySelector("li").style.height = "";


	});


	function setupEmojiSettings(){
		var emojis = document.querySelector(".react-horizontal-scrolling-menu--scroll-container").querySelectorAll("img");
		var emojiLinks = [];

		var emojiBindTitle = document.createElement("span");
		emojiBindTitle.innerText = "Custom Emoji Keybinds";
		emojiBindTitle.setAttribute("class", "emojiBindTitle");
		var restoreEmojiBindsBtn = document.createElement("div");
		restoreEmojiBindsBtn.style = "background: red; border-radius: 15px; color: white; height: fit-content: width: fit-content; cursor: pointer;";
		restoreEmojiBindsBtn.innerText = "Restore default emoji Keybinds";
		restoreEmojiBindsBtn.setAttribute("class", "restoreEmojiBinds");
			document.querySelector("#keys").append(emojiBindTitle);
			document.querySelector("#keys").append(restoreEmojiBindsBtn);
			restoreEmojiBindsBtn.onclick = ()=>{


				var emojiBindBtns = document.querySelector("#keys").querySelectorAll("button");
				for (let i = 0; i<emojiBindBtns.length; i++){
					if (localStorage.getItem(emojiBindBtns[i].className)){
						localStorage.removeItem(emojiBindBtns[i].className);
					}
					emojiBindBtns[i].innerText = "";
				}

				var defaultEmojiBinds = ["1", "2", "c", "v", "a", "s", "d", "x", "!", "z", "@", "A", "S", "D", "Z", "X", "C", "V"];
				for (let i = 0; i<defaultEmojiBinds.length; i++){
					emojiBindBtns[i].innerText = defaultEmojiBinds[i];
				}

			}




		for (let i = 0; i<emojis.length; i++){
			emojiLinks.push(emojis[i].src);
		}
		for (let i = 0; i<emojiLinks.length; i++){

			var newEmoji = document.createElement("img");
			var newButton = document.createElement("button");
			newButton.style = "width: 50px; height: 50px;";
			newButton.setAttribute("class", "emojiBind" + i)
			newEmoji.src = emojiLinks[i];
			newEmoji.style = "height: 50px; width: 50px; border-radius: 50%; border: 1px solid blue; transform: translate(100px, 0px);";
			newEmoji.setAttribute("class", "emoji" + i);
			document.querySelector("#keys").append(newEmoji);
			document.querySelector("#keys").append(newButton);
		}

		var emojiBindBtns = document.querySelector("#keys").querySelectorAll("button");

		for (let i = 0; i<emojiBindBtns.length; i++){
		const updateButtonText = (event) => {
			if (event.key == "Backspace"){
				emojiBindBtns[i].innerText = "";
				localStorage.setItem(emojiBindBtns[i].className, " ");
				emojiBindBtns[i].removeEventListener('keyup', updateButtonText);
			} else {
			emojiBindBtns[i].innerText = event.key;
			localStorage.setItem(emojiBindBtns[i].className, emojiBindBtns[i].innerText);
			emojiBindBtns[i].removeEventListener('keyup', updateButtonText);
			}

		  };

		emojiBindBtns[i].onclick = ()=>{
			emojiBindBtns[i].addEventListener("keyup", updateButtonText);

		};
		}
				var defaultEmojiBinds = ["1", "2", "c", "v", "a", "s", "d", "x", "!", "z", "@", "A", "S", "D", "Z", "X", "C", "V"];
				for (let i = 0; i<defaultEmojiBinds.length; i++){
					emojiBindBtns[i].innerText = defaultEmojiBinds[i];
				}
				for (let i =0; i<emojiBindBtns.length; i++){
					if (localStorage.getItem(emojiBindBtns[i].className)){
						if (localStorage.getItem(emojiBindBtns[i].className) == " "){
							emojiBindBtns[i].innerText = "";
						} else {
						emojiBindBtns[i].innerText = localStorage.getItem(emojiBindBtns[i].className);
						}
					}
				}
			}


			function clearEmojisBinds(){
				document.querySelector(".emojiBindTitle").remove();
				document.querySelector(".restoreEmojiBinds").remove();
				document.querySelector("#keys").querySelectorAll("button").forEach((button)=>{button.remove()});
				document.querySelector("#keys").querySelectorAll("img").forEach((button)=>{button.remove()});
			}

			function refreshEmojiSettings(){
				clearEmojisBinds();
				setupEmojiSettings();
			}

			// Function to create a custom event
		function createLoginEvent() {
		  // Create a new MutationObserver
		  const observer = new MutationObserver(function () {
			const isLoggedIn = document.querySelector("#profile-btn.fade-in") !== null;
			if (isLoggedIn) {
				window.loggedIn = true;
				console.log("Logged in, adding emojis settings");
				if (!window.onMobile){
					setTimeout(()=>{if (!document.querySelector(".emojiBindTitle")){
						setupEmojiSettings();
					}
					}, 5000);
				}
			} else {
				window.loggedIn = false;
				console.log("Logged out, removing emojis settings");
				clearEmojisBinds();
				document.querySelector("#account-lvl").innerText = "0";
				document.querySelector("#account-xp").innerText = "0";
			    document.querySelector("#account-coins").innerText = "0";
			}
		  });

		  const targetElement = document.querySelector("#profile-btn");
		  if (targetElement) {
			observer.observe(targetElement, { attributes: true, attributeFilter: ['class'] });
		  } else {
			console.error("Target element not found.");
		  }
		}


	function randomIntFromInterval(min, max) {
		  return Math.floor(Math.random() * (max - min + 1) + min);
		}

	 function loading(){
				document.addEventListener("keypress",function(event){
					if (document.querySelector("button#press4Btn.on")) {
						 if (event.key == "4") {
							 if (document.querySelector("#chat_textbox").value == ""){
							 var overlayStyle = document.querySelector("#overlays").style;
							document.querySelector("#overlays").style.display = "none";
							   document.getElementById("leaveBtn").click();
							   document.querySelector(".swal-button--confirm").click();
							  document.querySelector("#play-btn").click();
							 setTimeout(()=>{document.querySelector(".swal-button--cancel").click();}, 50);
							 setTimeout(()=>{document.querySelector("#overlays").style = overlayStyle;}, 1000);
							 }
						 }
					}

					if (document.querySelector("button#emojiBindings.on")){
						if (document.querySelector("#keys").querySelector("button")){
							var emojis = document.querySelector(".react-horizontal-scrolling-menu--scroll-container").querySelectorAll("img");

							var emojiBindBtns = document.querySelector("#keys").querySelectorAll("button");
							var setEmojiBinds = [];
							for (let i = 0; i<emojiBindBtns.length; i++){
								if (emojiBindBtns[i].innerText){
									setEmojiBinds.push(emojiBindBtns[i]);
								}
							}
							var emojiLinks = [];
							for (let i = 0; i<emojis.length; i++){
								emojiLinks.push(emojis[i].src);
							}

							for (let i = 0; i<setEmojiBinds.length; i++){
							if (emojiBindBtns) {
								if (setEmojiBinds[i].innerText){
								var daLink = emojiLinks[setEmojiBinds[i].className.split("Bind")[1]].replace("https://www.snay.io", ".");

								if (event.key == setEmojiBinds[i].innerText){
									if (document.querySelector("#chat_textbox").value == ""){
										document.querySelector("img[src='"+ daLink + "']").click()
									}
								}
							}
						}
					}
				}
			}
		});
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



				if (window.stats.virusesEaten > oldVirusEaten){

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
			}

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

	/*
	function destroy(thing){
    if (thing){
        thing.remove();
        return true;
    } else {
       return false;
    }

}

setInterval(()=>{
destroy(document.querySelector(".ad-box"));
document.querySelectorAll("script").forEach((script)=>{
    if (script.src.includes("adinplay") || script.innerText.includes("Advertisement")){
        destroy(script);
    }
})
document.querySelectorAll(".ads").forEach((thing)=>{
    destroy(thing)
})
destroy(document.querySelector("iframe[aria-label='Advertisement']"))
document.querySelectorAll("iframe").forEach((iframe)=>{
    destroy(iframe)
});
if (document.querySelector(".divFullscreenLoading")){
destroy(document.querySelector(".divFullscreenLoading"));
  console.log("removed video ad");
}
})
*/


	setSkinsEvent();
	setupUI();
	setupCustomSkins();
	setupModMenu();
	createLoginEvent();
	loading();

