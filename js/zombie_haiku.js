//Random 'Walking Dead' Zombie Haiku Generator

//allows us to create variables with object properties that can be put into arrays
function createObj(word, syllables){
    this.word = word;
    this.syllables = syllables;
}

var zombie = new createObj("zombie", 2);
var hoard = new createObj("hoard", 1);
var walker = new createObj("walker", 2);
var brains = new createObj("brains", 1);
var apocalypse = new createObj("apocalypse", 4);
var flesh = new createObj("flesh", 1);
var katana = new createObj("katana", 3);
var machete = new createObj("machete", 3);
var dead = new createObj("dead", 1);
var victim = new createObj("victim", 2);
var tourniquet = new createObj("tourniquet", 3);
var survivor = new createObj("survivor", 3);
var wound = new createObj("wound", 1);
var corpse = new createObj("corpse", 1);
var gun = new createObj("gun", 1);
var baseballBat = new createObj("baseball bat", 3);
var tireIron = new createObj("tire iron", 2);
//creates array of noun objects using condensed notation
var zombieNouns = new Array(zombie, hoard, walker, brains, apocalypse, flesh, katana, machete, dead, victim, tourniquet, survivor, wound, corpse, gun, baseballBat, tireIron);

var ripping = new createObj("ripping", 2);
var run = new createObj("run", 1);
var ran = new createObj("ran", 1);
var running = new createObj("running", 2);
var shamble = new createObj("shamble", 2);
var swarm = new createObj("swarm", 1);
var limp = new createObj("limp", 1);
var kill = new createObj("kill", 1);
var tear = new createObj("tear", 1);
var eat = new createObj("eat", 1);
var behead = new createObj("behead", 2);
var hack = new createObj("hack", 1);
var rend = new createObj("rend", 1);
var gnaw = new createObj("gnaw", 1);
var ravage = new createObj("ravage", 2);
var walk = new createObj("walk", 1);
var bludgeon = new createObj("bludgeon", 2);
var disembowel = new createObj("disembowel", 3);
var munching = new createObj("munching", 2);
var stagger = new createObj("stagger", 2);
var chopping = new createObj("chopping", 2);
var sliced = new createObj("sliced", 1);
var amputate = new createObj("amputate", 3);
var lacerate = new createObj("lacerate", 3);
var defend = new createObj("defend", 2);
//creates array of verb objects using condensed notation
var zombieVerbs = new Array(ripping, run, ran, running, shamble, swarm, limp, kill, tear, eat, behead, hack, rend, ravage, walk, bludgeon, disembowel, munching, stagger, chopping, sliced, amputate, lacerate, defend);

var decayed = new createObj("decayed", 2);
var hungry = new createObj("hungry", 2);
var bloody = new createObj("bloody", 2);
var rotting = new createObj("rotting", 3);
var disemboweled = new createObj("disemboweled", 3);
var scared = new createObj("scared", 1);
var anAngry = new createObj("an angry", 2);
var dark = new createObj("dark",1);
var cold = new createObj("cold",1);
var fast = new createObj("fast", 1);
var moaning = new createObj("moaning", 2);
var shuffling = new createObj("shuffling", 2); 
var festering = new createObj("festering", 3);
var fatal = new createObj("fatal", 2);
var painful = new createObj("painful", 2);
var horrified = new createObj("horrified", 3);
var horrifying = new createObj("horrifying", 4);
//creates array of adjective objects using condensed notation
var zombieAdj = new Array(decayed, hungry, bloody, rotting, disemboweled, scared, anAngry, dark, cold, fast, moaning, shuffling, festering, fatal, painful, horrified, horrifying);

var a = new createObj("a", 1);
var the = new createObj("the", 1);
var and = new createObj("and", 1);
//creates array of article objects using condensed notation
var articles = new Array(and, the, a);

var Andrea = new createObj("Andrea", 3);
var Carl = new createObj("Carl", 1);
var Carol = new createObj("Carol", 2);
var Dale = new createObj("Dale", 1);
var Daryl = new createObj("Daryl", 2);
var Hershel = new createObj("Hershel", 2);
var Glenn = new createObj("Glenn", 1);
var Lori = new createObj("Lori", 2);
var Maggie = new createObj("Maggie", 2);
var Merle = new createObj("Merle", 1);
var Michonne = new createObj("Michonne", 2);
var Rick = new createObj("Rick",1);
var Shane = new createObj("Shane", 1);
var TheGovernor = new createObj("The Governor", 4);
var Judith = new createObj("Judith", 2);
var Theodore = new createObj("Theodore", 3);
var Beth = new createObj("Beth", 1);
//creates array of character name objects using condensed notation
var charName = new Array(Andrea, Carl, Carol, Dale, Daryl, Hershel, Glenn, Lori, Maggie, Merle, Michonne, Rick, Shane, TheGovernor, Judith, Theodore, Beth);

//there are 3 different default formats that the haiku may take; 1 is chosen at random each time the generator is used; these are the variables used to help populate the 3 formulas with random words:
var name1 = charName[Math.floor(Math.random()*charName.length)];
var name2 = charName[Math.floor(Math.random()*charName.length)];
var art =  articles[Math.floor(Math.random()*articles.length)];
var noun1 = zombieNouns[Math.floor(Math.random()*zombieNouns.length)];
var noun2 = zombieNouns[Math.floor(Math.random()*zombieNouns.length)];
var noun3 = zombieNouns[Math.floor(Math.random()*zombieNouns.length)];
var verb1 = zombieVerbs[Math.floor(Math.random()*zombieVerbs.length)];
var verb2 = zombieVerbs[Math.floor(Math.random()*zombieVerbs.length)];
var verb3 = zombieVerbs[Math.floor(Math.random()*zombieVerbs.length)];
var adjective1 = zombieAdj[Math.floor(Math.random()*zombieAdj.length)];
var adjective2 = zombieAdj[Math.floor(Math.random()*zombieAdj.length)];
var adjective3 = zombieAdj[Math.floor(Math.random()*zombieAdj.length)];

//outlines the formula for haiku format1
var format1 = new Object();
    format1.haikuLine1 = art.word + " " + noun1.word + " " + verb1.word + ",";
    format1.haikuLine2 = name1.word + " and " + adjective1.word + " " + verb2.word + ",";
    format1.haikuLine3 = verb3.word + " " + adjective2.word + " " + noun2.word + ".";
    format1.line1Syll = art.syllables + noun1.syllables + verb1.syllables;
    format1.line2Syll = name1.syllables + 1 + adjective1.syllables + verb2.syllables;
    format1.line3Syll = verb3.syllables + adjective2.syllables + noun2.syllables;

//outlines the formula for haiku format2
var format2 = new Object();
    format2.haikuLine1 = name1.word + " " + verb1.word + " " + adjective1.word + ",";
    format2.haikuLine2 = verb2.word +  " " + noun1.word + ",";
    format2.haikuLine3 = adjective2.word + " " + verb3.word + " " + noun2.word + ".";
    format2.line1Syll = name1.syllables + verb1.syllables + adjective1.syllables;
    format2.line2Syll = verb2.syllables + 1 + art.syllables + noun1.syllables;
    format2.line3Syll = adjective2.syllables + verb3.syllables + noun2.syllables;

//outlines the formula for haiku format3 
var format3 = new Object();
    format3.haikuLine1 = art.word + " " + adjective1.word + " " + noun1.word + ",";
    format3.haikuLine2 = verb1.word + " " + adjective2.word + " " + noun2.word + ","; 
    format3.haikuLine3 = name1.word + " and " + name2.word + " " + verb2.word + ".";
    format3.line1Syll = art.syllables + adjective1.syllables + noun1.syllables;
    format3.line2Syll = verb1.syllables + adjective2.syllables + noun2.syllables;
    format3.line3Syll = name1.syllables + 1 + name2.syllables + verb2.syllables;

var haikuFormats = new Array(format1, format2, format3); 

//creates a function that randomizes the contents of format1, line1
function randomizeF1L1(){ 
    var art =  articles[Math.floor(Math.random()*articles.length)];
  var noun1 = zombieNouns[Math.floor(Math.random()*zombieNouns.length)];
	var verb1 = zombieVerbs[Math.floor(Math.random()*zombieVerbs.length)];
	format1.haikuLine1 = art.word + " " + noun1.word + " " + verb1.word + ",";
	format1.line1Syll = art.syllables + noun1.syllables + verb1.syllables;
}

//creates a function that randomizes the contents of format1, line2
function randomizeF1L2(){
	var name1 = charName[Math.floor(Math.random()*charName.length)];
	var adjective1 = zombieAdj[Math.floor(Math.random()*zombieAdj.length)];
	var verb2 = zombieVerbs[Math.floor(Math.random()*zombieVerbs.length)];
	format1.haikuLine2 = name1.word + " and " + adjective1.word + " " + verb2.word + ",";
	format1.line2Syll = name1.syllables + 1 + adjective1.syllables + verb2.syllables;
}

//creates a function that randomizes the contents of format1, line3
function randomizeF1L3(){
	var verb3 = zombieVerbs[Math.floor(Math.random()*zombieVerbs.length)];
	var adjective2 = zombieAdj[Math.floor(Math.random()*zombieAdj.length)];
	var noun2 = zombieNouns[Math.floor(Math.random()*zombieNouns.length)];
	format1.haikuLine3 = verb3.word + " " + adjective2.word + " " + noun2.word + ".";
	format1.line3Syll = verb3.syllables + adjective2.syllables + noun2.syllables;
}

//creates a function that randomizes the contents of format2, line1
function randomizeF2L1(){
	var name1 = charName[Math.floor(Math.random()*charName.length)];
	var verb1 = zombieVerbs[Math.floor(Math.random()*zombieVerbs.length)];
	var adjective1 = zombieAdj[Math.floor(Math.random()*zombieAdj.length)];	
	format2.haikuLine1 = name1.word + " " + verb1.word + " " + adjective1.word + ",";
	format2.line2Syll = verb2.syllables + 1 + art.syllables + noun1.syllables;
}

//creates a function that randomizes the contents of format2, line2
function randomizeF2L2(){
	var verb2 = zombieVerbs[Math.floor(Math.random()*zombieVerbs.length)];
	var art =  articles[Math.floor(Math.random()*articles.length)];
	var noun1 = zombieNouns[Math.floor(Math.random()*zombieNouns.length)];
	format2.haikuLine2 = verb2.word +  " " + noun1.word + ",";
	format2.line2Syll = verb2.syllables + 1 + art.syllables + noun1.syllables;
}

//creates a function that randomizes the contents of format2, line3
function randomizeF2L3(){
	var adjective2 = zombieAdj[Math.floor(Math.random()*zombieAdj.length)];
	var verb3 = zombieVerbs[Math.floor(Math.random()*zombieVerbs.length)];
	var noun2 = zombieNouns[Math.floor(Math.random()*zombieNouns.length)];
	format2.haikuLine3 = adjective2.word + " " + verb3.word + " " + noun2.word + ".";
	format2.line3Syll = adjective2.syllables + verb3.syllables + noun2.syllables;
}

//creates a function that randomizes the contents of format3, line1
function randomizeF3L1(){
	var art =  articles[Math.floor(Math.random()*articles.length)];
	var adjective1 = zombieAdj[Math.floor(Math.random()*zombieAdj.length)];
	var noun1 = zombieNouns[Math.floor(Math.random()*zombieNouns.length)];
	format3.haikuLine1 = art.word + " " + adjective1.word + " " + noun1.word + ",";
	format3.line1Syll = art.syllables + adjective1.syllables + noun1.syllables;
}

//creates a function that randomizes the contents of format3, line2
function randomizeF3L2(){
	var verb1 = zombieVerbs[Math.floor(Math.random()*zombieVerbs.length)];
	var adjective2 = zombieAdj[Math.floor(Math.random()*zombieAdj.length)];
	var noun2 = zombieNouns[Math.floor(Math.random()*zombieNouns.length)];
	format3.haikuLine2 = verb1.word + " " + adjective2.word + " " + noun2.word + ","; 
	format3.line2Syll = verb1.syllables + adjective2.syllables + noun2.syllables;
}

//creates a function that randomizes the contents of format3, line3
function randomizeF3L3(){
	var name1 = charName[Math.floor(Math.random()*charName.length)];
	var name2 = charName[Math.floor(Math.random()*charName.length)];
	var verb2 = zombieVerbs[Math.floor(Math.random()*zombieVerbs.length)];
	format3.haikuLine3 = name1.word + " and " + name2.word + " " + verb2.word + ".";
	format3.line3Syll = name1.syllables + 1 + name2.syllables + verb2.syllables;
}

function chooseFormat(){
	//a function for choosing one of the 3 available haiku formats
	var formatChosen = Math.floor(Math.random()*3);
function capitalize(string){
	//a function to capitalize the first letter of each line of the haiku...
	return string[0].toUpperCase() + string.slice(1);
}

//code used to randomly select a format; format1=0, format2=1, format3=3:
if(formatChosen===0){
	//randomize words into format1, line1
	randomizeF1L1();
	//as long as the number of syllables in line 1 is not = 5, keep randomizingâ€¦
	while(format1.line1Syll !== 5){
		randomizeF1L1();
	}
	randomizeF1L2();
	//as long as the number of syllables in line 2 is not = 7, keep randomizingâ€¦
	while(format1.line2Syll !== 7){
		randomizeF1L2();
	}
	randomizeF1L3();
	//as long as the number of syllables in line 3 is not = 5, keep randomizingâ€¦
	while(format1.line3Syll !== 5){
		randomizeF1L3();
	}
	console.log(capitalize(format1.haikuLine1));
	console.log(capitalize(format1.haikuLine2));
	console.log(capitalize(format1.haikuLine3));
} 
else if(formatChosen===1){
	//randomize words into format2, line1
	randomizeF2L1();
	//as long as the number of syllables in line 1 is not = 5, keep randomizingâ€¦
	while(format2.line1Syll !== 5){
		randomizeF2L1();
	}
	randomizeF2L2();
	//as long as the number of syllables in line 2 is not = 7, keep randomizingâ€¦
	while(format2.line2Syll !== 7){
		randomizeF2L2();
	}
	randomizeF2L3();
	//as long as the number of syllables in line 3 is not = 5, keep randomizingâ€¦
	while(format2.line3Syll !== 5){
		randomizeF2L3();
	}
	console.log(capitalize(format2.haikuLine1));
	console.log(capitalize(format2.haikuLine2));
	console.log(capitalize(format2.haikuLine3));
} 
else {
	//randomize words into format3, line1
	randomizeF3L1();
	//as long as the number of syllables in line 1 is not = 5, keep randomizingâ€¦
	while(format3.line1Syll !== 5){
		randomizeF3L1();
	}
	randomizeF3L2();
	//as long as the number of syllables in line 2 is not = 7, keep randomizingâ€¦
	while(format3.line2Syll !== 7){
		randomizeF3L2();
	}
	randomizeF3L3();
	//as long as the number of syllables in line 3 is not = 5, keep randomizingâ€¦
	while(format3.line3Syll !== 5){
		randomizeF3L3();
	}
	console.log(capitalize(format3.haikuLine1));
	console.log(capitalize(format3.haikuLine2));
	console.log(capitalize(format3.haikuLine3));
}
}

var thankYouMsg = "Thanks for using the 'Walking Dead' Zombie Haiku Generator! We'll continue adding to our dictionary, so make sure to come back soon and use the generator again!";

//call chooseFormat() with a confirm statement here
var userConf = confirm("Are you ready to generate a 'Walking Dead' Zombie Haiku?");
if(userConf===true){
	chooseFormat();
	//opens alert window that thanks user for using generator and reminds them to check back often for new dictionary words
	console.log("\n\n" + thankYouMsg);
} else {
	console.log("Then why are you even here??");
}
