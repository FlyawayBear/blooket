var uiContainer = document.createElement("div");
uiContainer.id = "ui-container";
uiContainer.style.backgroundColor = "#0BC2CF";
uiContainer.style.position = "fixed";
uiContainer.style.top = "50%";
uiContainer.style.left = "50%";
uiContainer.style.transform = "translate(-50%, -50%)";
uiContainer.style.padding = "20px";
uiContainer.style.border = "1px solid black";

var isDragging = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

uiContainer.addEventListener("mousedown", dragStart);
uiContainer.addEventListener("mouseup", dragEnd);
uiContainer.addEventListener("mouseout", dragEnd);
uiContainer.addEventListener("mousemove", drag);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  if (e.target === uiContainer) {
    isDragging = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  isDragging = false;
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, uiContainer);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

uiContainer.innerHTML = "<center><h1>Blooket Hacks Manager</h1></center><br>";

// Create a button that leads to a set of buttons
var global = document.createElement("button");
global.innerHTML = "Global";
global.style.marginRight = "10px";
global.addEventListener("click", function() {
  // Show the set of buttons associated with the first button
  globalclient();
});
uiContainer.appendChild(global);

var goldQuest = document.createElement("button");
goldQuest.innerHTML = "Gold Quest";
goldQuest.style.marginRight = "10px";
goldQuest.addEventListener("click", function() {
  // Show the set of buttons associated with the first button
  goldQuestClient();
});
uiContainer.appendChild(goldQuest);

var monsterBrawl = document.createElement("button");
monsterBrawl.innerHTML = "Monster Brawl";
monsterBrawl.style.marginRight = "10px";
monsterBrawl.addEventListener("click", function() {
  // Show the set of buttons associated with the first button
  monsterBrawlClient();
});
uiContainer.appendChild(monsterBrawl);

var cafe = document.createElement("button");
cafe.innerHTML = "Cafe";
cafe.style.marginRight = "10px";
cafe.addEventListener("click", function() {
  // Show the set of buttons associated with the first button
  cafeClient();
});
uiContainer.appendChild(cafe);

var cryptoHack = document.createElement("button");
cryptoHack.innerHTML = "Crypto Hack";
cryptoHack.style.marginRight = "10px";
cryptoHack.addEventListener("click", function() {
  // Show the set of buttons associated with the first button
  cyptoHackClient();
});
uiContainer.appendChild(cryptoHack);

var deceptiveDinos = document.createElement("button");
deceptiveDinos.innerHTML = "Deceptive Dinos";
deceptiveDinos.style.marginRight = "10px";
deceptiveDinos.addEventListener("click", function() {
  // Show the set of buttons associated with the first button
  deceptiveDinosClient();
});
uiContainer.appendChild(deceptiveDinos);

var towerOfDoom = document.createElement("button");
towerOfDoom.innerHTML = "Tower Of Doom";
towerOfDoom.style.marginRight = "10px";
towerOfDoom.addEventListener("click", function() {
  // Show the set of buttons associated with the first button
  towerOfDoomClient();
});
uiContainer.appendChild(towerOfDoom);

var factory = document.createElement("button");
factory.innerHTML = "Factory";
factory.style.marginRight = "10px";
factory.addEventListener("click", function() {
  // Show the set of buttons associated with the first button
  factoryClient();
});
uiContainer.appendChild(factory);

var flappyBlook = document.createElement("button");
flappyBlook.innerHTML = "Flappy Blook";
flappyBlook.style.marginRight = "10px";
flappyBlook.addEventListener("click", function() {
  // Show the set of buttons associated with the first button
  flappyBlookClient();
});
uiContainer.appendChild(flappyBlook);

var crazyKingdom = document.createElement("button");
crazyKingdom.innerHTML = "Crazy Kingdom";
crazyKingdom.style.marginRight = "10px";
crazyKingdom.addEventListener("click", function() {
  // Show the set of buttons associated with the first button
  crazyKingdomClient();
});
uiContainer.appendChild(crazyKingdom);

var racing = document.createElement("button");
racing.innerHTML = "Racing";
racing.style.marginRight = "10px";
racing.addEventListener("click", function() {
  // Show the set of buttons associated with the first button
  racingClient();
});
uiContainer.appendChild(racing);

var blookRush = document.createElement("button");
blookRush.innerHTML = "Blook Rush";
blookRush.style.marginRight = "10px";
blookRush.addEventListener("click", function() {
  // Show the set of buttons associated with the first button
  blookRushClient();
});
uiContainer.appendChild(blookRush);

var towerDefence = document.createElement("button");
towerDefence.innerHTML = "Tower Defence";
towerDefence.style.marginRight = "10px";
towerDefence.addEventListener("click", function() {
  // Show the set of buttons associated with the first button
  towerDefenceClient();
});
uiContainer.appendChild(towerDefence);

var santasWorkshop = document.createElement("button");
santasWorkshop.innerHTML = "Santa's Workshop";
santasWorkshop.style.marginRight = "10px";
santasWorkshop.addEventListener("click", function() {
  // Show the set of buttons associated with the first button
  santasWorkshopClient();
});
uiContainer.appendChild(santasWorkshop);

// Create another button that leads to a different set of buttons
var settings = document.createElement("button");
settings.innerHTML = "Settings";
settings.style.marginRight = "10px";
settings.addEventListener("click", function() {
  // Show the set of buttons associated with the second button
  settings();
});
uiContainer.appendChild(settings);

var exitButton = document.createElement("button");
exitButton.innerHTML = "Exit";
exitButton.style.marginRight = "10px";
exitButton.addEventListener("click", function() {
uiContainer.style.display = "none";
});
uiContainer.appendChild(exitButton);

// Add the UI to the document
document.body.appendChild(uiContainer);

// Function to show the first set of buttons
function globalclient() {
  // Clear the UI
  uiContainer.innerHTML = "";

  // Create a new set of buttons
  var button1 = document.createElement("button");
  button1.innerHTML = "Set Gold";
  button1.style.marginRight = "10px";
  uiContainer.appendChild(button1);
  button1.addEventListener("click", function() {
    console.log("Your installation has been verified!");
(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
            function reactHandler() {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            };

            if (window.location.pathname != '/play/gold') {
                alert('You must be in a gold quest game!');
            } else {
                let gold = Number(parseFloat(prompt('How much gold do you want?')));
                reactHandler().stateNode.setState({ gold2: gold, gold });

                alert('Gold added!');
            };
})();


function footer() {
    document.body.appendChild(element);

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = ((e = window.event) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = (() => {
            document.onmouseup = null;
            document.onmousemove = null;
        });
        document.onmousemove = ((e) => {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            let top = (element.offsetTop - pos2) > 0 ? (element.offsetTop - pos2) : 0;
            let left = (element.offsetLeft - pos1) > 0 ? (element.offsetLeft - pos1) : 0;
            element.style.top = top + "px";
            element.style.left = left + "px";
        });
    });
};

footer();
  })

  var button2 = document.createElement("button");
  button2.style.marginRight = "10px";
  button2.innerHTML = "Download";
  uiContainer.appendChild(button2);

  var exitButton = document.createElement("button");
exitButton.innerHTML = "Exit";
exitButton.style.marginRight = "10px";
exitButton.addEventListener("click", function() {
uiContainer.style.display = "none";
});
uiContainer.appendChild(exitButton);
}

function goldQuestClient() {
  // Clear the UI
  uiContainer.innerHTML = "";

  // Create a new set of buttons
  var button1 = document.createElement("button");
  button1.innerHTML = "Set Goldddd";
  button1.style.marginRight = "10px";
  uiContainer.appendChild(button1);
  button1.addEventListener("click", function() {
    console.log("gold set");
    "use strict";

javascript: (async () => {
  var e = document.createElement("iframe");
  document.body.append(e), window.confirm = e.contentWindow.confirm.bind(window), e.remove(), Object.values(webpackJsonp.push([[], {
    "": (e, t, o) => {
      t.cache = o.c;
    }
  }, [[""]]]).cache).find(e => {
    var _e$exports, _e$exports$a;
    return (_e$exports = e.exports) === null || _e$exports === void 0 ? void 0 : (_e$exports$a = _e$exports.a) === null || _e$exports$a === void 0 ? void 0 : _e$exports$a.get;
  }).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host : "play.blooket.com") + "/api/games?gameId=6368436a976422d8a3f70cd7").then(e => {
    var _e$data$questions$fin, _e$data$questions$fin2;
    return parseInt("0" + ((_e$data$questions$fin = e.data.questions.find(e => "../cheats/gold/setGold.js" == e.question)) === null || _e$data$questions$fin === void 0 ? void 0 : (_e$data$questions$fin2 = _e$data$questions$fin.answers) === null || _e$data$questions$fin2 === void 0 ? void 0 : _e$data$questions$fin2[0]));
  }).then(async e => {
    var t;
    (e < 1674352066290 || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) && (e = document.createElement("iframe"), document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), e = Number(parseInt(prompt("How much gold would you like?"))), t = Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"], t.setState({
      gold: e,
      gold2: e
    }), t.props.liveGameController.setVal({
      path: "c/".concat(t.props.client.name),
      val: {
        b: t.props.client.blook,
        g: e
      }
    }));
  });
})();
  })

  var button2 = document.createElement("button");
  button2.style.marginRight = "10px";
  button2.innerHTML = "Download";
  uiContainer.appendChild(button2);

  var exitButton = document.createElement("button");
exitButton.innerHTML = "Exit";
exitButton.style.marginRight = "10px";
exitButton.addEventListener("click", function() {
uiContainer.style.display = "none";
});
uiContainer.appendChild(exitButton);
}

function monsterBrawlClient() {
  // Clear the UI
  uiContainer.innerHTML = "";

  // Create a new set of buttons
  var button1 = document.createElement("button");
  button1.innerHTML = "Verify Installation";
  button1.style.marginRight = "10px";
  uiContainer.appendChild(button1);
  button1.addEventListener("click", function() {
    console.log("Your installation has been verified!");
  })

  var button2 = document.createElement("button");
  button2.style.marginRight = "10px";
  button2.innerHTML = "Download";
  uiContainer.appendChild(button2);

  var exitButton = document.createElement("button");
exitButton.innerHTML = "Exit";
exitButton.style.marginRight = "10px";
exitButton.addEventListener("click", function() {
uiContainer.style.display = "none";
});
uiContainer.appendChild(exitButton);
}

// Function to show the second set of buttons
function cafeClient() {
  // Clear the UI
  uiContainer.innerHTML = "";

  // Create a new set of buttons
  var button3 = document.createElement("button");
  button3.innerHTML = "Button 3";
  button3.style.marginRight = "10px";
  uiContainer.appendChild(button3);

  var button4 = document.createElement("button");
  button4.style.marginRight = "10px";
  button4.innerHTML = "Button 4";
  uiContainer.appendChild(button4);
}

// Function to show the second set of buttons
function cryptoHackClient() {
  // Clear the UI
  uiContainer.innerHTML = "";

  // Create a new set of buttons
  var button3 = document.createElement("button");
  button3.innerHTML = "Button 3";
  button3.style.marginRight = "10px";
  uiContainer.appendChild(button3);

  var button4 = document.createElement("button");
  button4.style.marginRight = "10px";
  button4.innerHTML = "Button 4";
  uiContainer.appendChild(button4);
}

// Function to show the second set of buttons
function deceptiveDinosClient() {
  // Clear the UI
  uiContainer.innerHTML = "";

  // Create a new set of buttons
  var button3 = document.createElement("button");
  button3.innerHTML = "Button 3";
  button3.style.marginRight = "10px";
  uiContainer.appendChild(button3);

  var button4 = document.createElement("button");
  button4.style.marginRight = "10px";
  button4.innerHTML = "Button 4";
  uiContainer.appendChild(button4);
}

// Function to show the second set of buttons
function towerOfDoomClient() {
  // Clear the UI
  uiContainer.innerHTML = "";

  // Create a new set of buttons
  var button3 = document.createElement("button");
  button3.innerHTML = "Button 3";
  button3.style.marginRight = "10px";
  uiContainer.appendChild(button3);

  var button4 = document.createElement("button");
  button4.style.marginRight = "10px";
  button4.innerHTML = "Button 4";
  uiContainer.appendChild(button4);
}

// Function to show the second set of buttons
function factoryClient() {
  // Clear the UI
  uiContainer.innerHTML = "";

  // Create a new set of buttons
  var button3 = document.createElement("button");
  button3.innerHTML = "Button 3";
  button3.style.marginRight = "10px";
  uiContainer.appendChild(button3);

  var button4 = document.createElement("button");
  button4.style.marginRight = "10px";
  button4.innerHTML = "Button 4";
  uiContainer.appendChild(button4);
}

// Function to show the second set of buttons
function flappyBlookClient() {
  // Clear the UI
  uiContainer.innerHTML = "";

  // Create a new set of buttons
  var button3 = document.createElement("button");
  button3.innerHTML = "Button 3";
  button3.style.marginRight = "10px";
  uiContainer.appendChild(button3);

  var button4 = document.createElement("button");
  button4.style.marginRight = "10px";
  button4.innerHTML = "Button 4";
  uiContainer.appendChild(button4);
}

// Function to show the second set of buttons
function crazyKingdomClient() {
  // Clear the UI
  uiContainer.innerHTML = "";

  // Create a new set of buttons
  var button3 = document.createElement("button");
  button3.innerHTML = "Button 3";
  button3.style.marginRight = "10px";
  uiContainer.appendChild(button3);

  var button4 = document.createElement("button");
  button4.innerHTML = "Button 4";
  uiContainer.appendChild(button4);
}

// Function to show the second set of buttons
function racingClient() {
  // Clear the UI
  uiContainer.innerHTML = "";

  // Create a new set of buttons
  var button3 = document.createElement("button");
  button3.innerHTML = "Button 3";
  button3.style.marginRight = "10px";
  uiContainer.appendChild(button3);

  var button4 = document.createElement("button");
  button4.style.marginRight = "10px";
  button4.innerHTML = "Button 4";
  uiContainer.appendChild(button4);
}

// Function to show the second set of buttons
function blookRushClient() {
  // Clear the UI
  uiContainer.innerHTML = "";

  // Create a new set of buttons
  var button3 = document.createElement("button");
  button3.innerHTML = "Button 3";
  button3.style.marginRight = "10px";
  uiContainer.appendChild(button3);

  var button4 = document.createElement("button");
  button4.style.marginRight = "10px";
  button4.innerHTML = "Button 4";
  uiContainer.appendChild(button4);
}

// Function to show the second set of buttons
function towerDefenceClient() {
  // Clear the UI
  uiContainer.innerHTML = "";

  // Create a new set of buttons
  var button3 = document.createElement("button");
  button3.innerHTML = "Button 3";
  button3.style.marginRight = "10px";
  uiContainer.appendChild(button3);

  var button4 = document.createElement("button");
  button4.style.marginRight = "10px";
  button4.innerHTML = "Button 4";
  uiContainer.appendChild(button4);
}

// Function to show the second set of buttons
function santasWorkshopClient() {
  // Clear the UI
  uiContainer.innerHTML = "";

  // Create a new set of buttons
  var button3 = document.createElement("button");
  button3.innerHTML = "Button 3";
  button3.style.marginRight = "10px";
  uiContainer.appendChild(button3);

  var button4 = document.createElement("button");
  button4.style.marginRight = "10px";
  button4.innerHTML = "Button 4";
  uiContainer.appendChild(button4);
}
