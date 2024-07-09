let start = document.getElementById("start");
let strt = document.getElementById("strt");
let choose = document.getElementById("choose");
let game = document.getElementById("game");
let playx = document.getElementById("play-x");
let playo = document.getElementById("play-o");
let show = document.getElementById("show");
let winner = document.getElementById("winner");
let display= document.getElementById("display");
let plyagain = document.getElementById("playagain");
let quit = document.getElementById("quit");
let btn = document.querySelectorAll(".btn");

let change = null;
let player = null;

strt.onclick = function(){
	start.style.display="none";
	choose.style.display="block";
}

playx.onclick = function(){
	player = true;
	show_x();
}
playo.onclick = function(){
	player = false;
	show_o();
}

function show_x(){
	winner.style.display="none";
	choose.style.display="none";
	game.style.display="block";
	show.style.left="22.4px";
	change=false;
}

function show_o(){
	winner.style.display="none";
	choose.style.display="none";
	game.style.display="block";
	show.style.left="198px";
	change=true;
}

quit.onclick=function() {
	window.location.reload();
}

plyagain.onclick = function(){
	empty();
	if(player == true)
		show_x();
	else
		show_o();
}

btn.forEach(items =>{
	items.onclick=function(){
		if (change==false) {
			items.style.backgroundColor="#88fbc5";
			items.style.border="2px solid transparent";
			items.innerHTML='<i class="fas fa-times" id="plyx"></i>';
			items.id="plyx";
			show.style.left="198px";
			items.style.pointerEvents="none";
			change=true;
		}
		else{
			items.style.backgroundColor="#29eff9";
			items.style.border="2px solid transparent";
			items.innerHTML='<i class="far fa-circle" id="plyo"></i>';
			items.id="plyo";
			show.style.left="22.4px";
			items.style.pointerEvents="none";
			change=false;
		}
		winningfunc();
		drawfunc();
	}
})

let winningcomb = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] 

function empty(){
	btn.forEach(items =>{
		items.style.backgroundColor = "";
        items.style.border = "";
        items.innerHTML = "";
        items.id = "";
        items.style.pointerEvents = "auto";
	})
}

function winningfunc() {
	for (let a=0; a<=7; a++) {
		let b=winningcomb[a];
		if (btn[b[0]].id=="" || btn[b[1]].id=="" || btn[b[2]].id=="") {
			continue;
		}
		else if(btn[b[0]].id == "plyx" && btn[b[1]].id == "plyx" && btn[b[2]].id == "plyx"){
			game.style.display="none";
			winner.style.display="block";
		}
		else if(btn[b[0]].id=="plyo" && btn[b[1]].id=="plyo" && btn[b[2]].id=="plyo"){
			game.style.display="none";
			winner.style.display="block";
			display.innerHTML="Player O is the winner!";
		}
		else{
			continue;
		}
	}
}
function drawfunc() {
	if (btn[0].id!="" && btn[1].id!="" && btn[2].id!="" &&
		btn[3].id!="" && btn[4].id!="" && btn[5].id!="" &&
		btn[6].id!="" && btn[7].id!="" && btn[8].id!="") {
		game.style.display="none";
	    winner.style.display="block";
	    display.innerHTML="Match Draw!";
	}
}


