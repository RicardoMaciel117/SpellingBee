
var advancedWords = ["ABOVE-AVERAGE","ABUNDANTLY","ACCOMPLISH","ACCORDING","ACCURATE","ACKNOWLEDGE","ADVERTISING","AFFLUENCE","AGGREGATE","ALLEVIATE","ANNIVERSARY","APPOINTMENT","APPROACHING","ARCHAEOLOGIST","ARRANGEMENTS","ARTISAN","ASSIMILATE","ATHLETE","AUDIO-VISUAL","AUTHENTIC","AUTONOMOUS","AVARICE","BASKETBALL","BELIE","BINOCULARS","BIRTH-DATE","BLIZZARD","BOLSTER","BULLETIN","BUSINESSMEN","CAPILLARIES","CELEBRATION","CERTAINLY","CHARACTER","CHARACTERISTICS","CHLOROPHYLL","COINCIDENCE","COLLECTION","COMMUNICATION","COMPETITION","CONGRATULATIONS","CONVENIENCE","COOPERATE","CRITICIZED","DANGEROUS","DELUDE","DESCRIMINATION","DESCRIPTION","DETERIORATE","DISAPPOINTMENT","DISCOURAGE","DISSENT","DOGMATIC","ELUSIVE","EMULATE","ENMITY","ENTERTAINMENT","ENUNCIATE","ENVIRONMENT","EPHEMERAL","ESTABLISH","EUPHEMISM","EXAGGERATE","EXCELLENT","EXTINGUISHER","EXTRAVAGANT","FAHRENHEIT","FALLACY","FINANCIALLY","FLEXIBILITY","FOREIGN","GEOGRAPHY","GLOSSED","GOVERNMENT","GROTESQUE","HALLUCINATION","HAPPINESS","HEMISPHERE","HIGHLIGHTED","HUMILIATE","HYDROGEN","IDENTICAL","IMAGINARY","IMMORTALIZED","IMPROVEMENT","INDEED","INDIVIDUALISTIC","INDUSTRIOUS","INFORMATION","INSTRUCTION","INVITATION","JOURNEY","JUDGING","KNOWLEDGE","LABYRINTH","LENGTH","LIEUTENANT","LUDICROUS","MASQUERADE","MUSCLE","NARRATION","NECESSARY","NEIGHBORHOOD","OBEDIENCE","OPPORTUNITY","ORCHESTRA","PARAPHRASING","PENULTIMATE","PENURY","PERENNIAL","PERSONALITY","PESSIMISTIC","PHILOSOPHY","PHOTOSYNTHESIS","PIRANHA","PLAYGROUNDS","PLUMBER","PNEUMONIA","PREDICTION","PRESENTATION","PROFITABLE","PROGNOSTICATE","PRONUNCIATION","PSYCHOLOGICAL","PUNCTUATION","RECOMMEND","RECONSTRUCTING","REHEARSE","REPETITION","REQUIREMENTS","RESOLUTION","RESONANCE","RESPONSIBLE","SARCOPHAGUS","SATISFACTORY","SCHEDULE","SCHOLARSHIP","SEIZE","SENTENCES","SERIOUSNESS","SLIGHTLY","SLIPPED","SOMERSAULT","SOPHISTICATED","SOUVENIR","STOLID","STRUGGLE","STUPENDOUS","SUBCONSCIOUS","SUBMISSIVE","SUCCESSFUL","SUFFICIENTLY","SUPERFLUOUS","SUPPOSITIONS","SWITZERLAND","TAXI-DRIVER","TECHNIQUES","THERAPY","TOURNAMENT","TRANSCENDENTAL","TREASURE","TURMOIL","TWEEZERS","UNANIMOUS","UNDERGROUND","WEDNESDAY","WHIMSICAL","WIDTH","WRENCH","YACHT"];
var intermediateWords = ["ACCOMPLICE","ACCOUNTING","ACTUALLY","ADVENTURE","ADVICE","AFFLUENT","ALPHABET","AMOUNT","ANSWER","ANYWHERE","APARTMENT","APATHETIC","APOSTROPHE","ARCHEOLOGIST","ARCHIVE","ASTERISK","ATTEMPT","BEAUTIFUL","BIOGRAPHY","BORROW","BROTHER","BUILD","CALCULATE","CARAMEL","CELERY","CENSURE","CENTRAL","CHARGE","CHEMICAL","CHOICE","CHRISTMAS","CHURCH","COLLECTION","COMFORT","COMPANION","COMPETITIVE","COMPROMISE","COMPUTER","CONNECTION","CONTINENT","CONTROVERSY","COUNCIL","COUNTRY","CUCUMBER","CURFEW","DANGEROUS","DELICIOUS","DENTIST","DIFFERENT","DIFFICULT","DILIGENT","DISEASE","DISGUISE","DOWNLOAD","EARTH","EGYPTIAN","EMANATE","EMBARRASS","ENGAGED","ENGINEER","ENOUGH","EQUIPMENT","EXCITEMENT","EXECUTIVE","EXERCISE","EXPEDITION","EXPENSIVE","EXPERIENCE","EXPRESSION","FARMYARD","FASHION","FINALLY","FINISHED","FOLLOW","FORECAST","GENIUS","GENTLE","GETTING","GHOST","GLITTER","GLOBALIZATION","GRABBED","GRANDMOTHER","HAPPENED","HEALERS","HEALTHY","HEAVENLY","HOUSEHOLD","HUMMING","HYPHEN","IMPEDIMENT","IMPLICATE","INCREDIBLE","INDIGNANT","INFLUENCES","INJURED","INTERVIEW","INVESTMENTS","INVOLVING","KITCHEN","LANDSCAPE","LANGUAGE","LAUGHING","LIGHTNING","LUGGAGE","MATERIAL","MAYBE","MEASURED","MEMORABLE","MINUTE","MOTHER","MUSEUM","MYSTERY","NAUGHTY","NEWSPAPER","OFFICIAL","OLYMPIC","OPINION","ORANGUTAN","OUTWARDS","PATIENCE","PEOPLE","PERCEIVED","PERPETUAL","PINEAPPLE","PLEASURE","POPULAR","POSITION","POTTERY","PROBABLY","PROTOCOL","PUMPKIN","QUALIFIED","QUARTER","REMOVE","RESEARCH","RESONANCE","RESTAURANT","ROOMMATES","SANDWICH","SATELLITE","SCIENTIST","SCRATCH","SCULPTOR","SENATOR","SHADOW","SINGER","SKELETON","SKEPTIC","SOMETHING","SPECULATE","STOMACH","STRETCH","SUGGAR","SUGGESTED","SUPERMARKET","SUPERVISER","SURFACE","SURPRISE","TEACHER","TEENAGER","TELEPHONE","TERRIBLE","THROAT","THURSDAY","TRAGEDY","TYPICAL","UNABLE","UNDERSTAND","UNDERWEAR","UNIVERSITY","UNKNOWN","VEGETABLE","VEGETARIAN","VISUALIZE","VOCABULARY","WEDDING","WINDOW"];
var basicWords = ["ADULT","AGAINST","ALONE","ALWAYS","ANGRY","ANNOY","APPLE","AWFUL","BAKE","BALLON","BANK","BODY","BOOK","BROWN","BRUSH","CEMENT","CHAIR","CHANGE","CHASE","CHEF","CLASSROOM","COFFEE","COMPUTER","COULD","COUNTRY","COUSIN","CRAB","CRACK","CROWD","DOLL","DOLPHIN","ELEPHANT","ENEMY","EVENING","EYES","FAMILY","FAST","FATHER","FEBRUARY","FEEL","FRESH","FRONT","GARAGE","GATE","GERMANY","GIRL","GLAD","GLOVES","GLOW","GREATER","GREEN","HAND","HAPPY","HEART","HOLD","HOLIDAY","HOME","HOMEWORK","HOPE","HORSE","HOUSE","HUNDRED","ILLNESS","JOKE","JUDGE","JUMP","KITE","KNOCK","LETTUCE","LITTLE","LIVE","LOVE","LUNG","MACHINE","MEDICINE","MENU","MILK","MIRACLE","MONTH","MOUSE","MOUTH","NAME","NEST","NEUTRAL","NEVER","NOISE","NOSE","OBJECT","OCEAN","PAGE","PATTERNS","PILOT","PLACE","PLUM","POTATO","PRIZE","PURPLE","RADIO","READ","RIVER","ROOM","SATURDAY","SCHOOL","SHELL","SHINING","SHOE","SILLY","SISTER","SMELL","SMILE","SOCCER","SOUND","SPACE","SPEA","SPRING","STOP","STORE","STOVE","STUDENT","TABLE","TEACHER","THEIR","THINK","TICKET","TIRED","TOOL","TOOTH","TRAVEL","TRIP","TRUST","TUESDAY","TWELVE","TWENTY","UNDER","UNIFORM","USUAL","VACATION","VETERAN","VITAMIN","VOLUME","WALK","WATER","WHEN","WOOL","WORLD","WRITE","WRONG"];
var wordLeft = 0;
var localScore;
var randomCategories = ["BASIC","INTERMEDIATE","ADVANCED"];
var clearButtons = [];
var attempts = 3, category="", tempCategory, word, noBtns = 28,answer="";
var screen_X = x = window.innerWidth;
var finishTraining = false;

$(function(){
	$('[data-toggle="popover"]').popover({ html : true });
	loadScore();
	//responsiveVoice.speak('Berenice');
});

window.onload = function() { 
	document.onkeypress = addKey;
}

function ocultarJumbo(){
	document.getElementById('jumbo').style.display = "none";
	//document.getElementById('cards').style.display = "none";
	document.getElementById('selector').style.display = "block";
}

function ocultarSelector(cat){
	document.getElementById('selector').style.display = "none";
	document.getElementById('speaker').style.display = "block";
	document.getElementById('marScore').style.display = "block";
	loadComponents(cat);
}

function ocultarSpeaker(){
	document.getElementById('speaker').style.display = "none";
	document.getElementById('botones').style.display = "block";
}

function hideButtons(){
	document.getElementById('botones').style.display = "none";
	document.getElementById('speaker').style.display = "block";
}

function chooseNewCategory(){
	document.getElementById('botones').style.display = "none";
	document.getElementById('speaker').style.display = "block";
	document.getElementById('selector').style.display = "block";
}

function getData(){
	responsiveVoice.speak(word.toString());
	document.getElementById('lets').style.opacity = 1.0;
	attempts--;
	$('.pop').attr('data-content','No: '+attempts);
	if(attempts==1){
		document.getElementById('help').style.opacity = 1.0;
	}
	else if(attempts==0){
		$('.pop').popover('hide');
		attempts = 3;
		setTimeout('ocultarSpeaker()', 800);
	}
	
}
function loadComponents(cat) {
	if(category==""){
		generateButtons();
		category = cat;
		document.getElementById('wordsLeft').style.display = (category != "RANDOM") ? "block":"none";
	}
	setCategory(cat);
	responsiveContent();
	generateLetters();
	hideSecretWord();
}

function setProgress (){
	document.getElementById('score').innerHTML = localScore[tempCategory].score;
	document.getElementById('wrong').innerHTML = localScore[tempCategory].wrong;
}


function responsiveContent(){
	if(screen_X<360){
		var spk = document.getElementById('speakerImg');
		spk.style.width="120px";
		spk.style.height="125px";
	}
}




function setCategory(cat){
	if(cat=="RANDOM"){
		if(randomCategories.length==0){
			showModal(true,"Impossible","You have finished all categories");
			finishTraining = true;
		}
		else{
			setCategory(randomCategories[Math.round(Math.random() * ((randomCategories.length-1) - 0))]);
			return;
		}

	}
	else{
		document.getElementById('catg').innerHTML=cat;
		if(cat=="BASIC"){
			word = basicWords[Math.round(Math.random() * ((basicWords.length-1) - 0))];
			if(category==cat){
				wordLeft = basicWords.length;
			}
		}
		else if(cat=="INTERMEDIATE"){
			word = intermediateWords[Math.round(Math.random() * ((intermediateWords.length-1) - 0))];
			if(category==cat){
				wordLeft = intermediateWords.length;
			}
		}
		else{
			word = advancedWords[Math.round(Math.random() * ((advancedWords.length-1) - 0))];
			if(category==cat){
				wordLeft = advancedWords.length;
			}
		}
		console.log(word);
		tempCategory = cat;
		setProgress();
		document.getElementById("wdLeft").innerHTML = wordLeft;
	}


}

function generateLetters(){
	var randomletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	for (var i = 1;  i <= noBtns; i++) {
      var btns = document.getElementById('_'+i)
      btns.value = randomletters[Math.round(Math.random() * (25 - 0))];
      btns.disabled=false;
    }
}

function addLetter(id){
	var bot = document.getElementById(id);
	answer+= bot.value;
	console.log(answer);
	bot.value = '_';
	bot.disabled=true;
	if(!word.startsWith(answer)){
		badWord();
	}
	if(word==answer){
		showModal(false,"Good Job!",word,"#21bc45");
		addToLocalScore(true);
		removeWord();
		nextWord();
	}
}

function badWord(){
	showModal(true,"You have a mistake!","Word: "+word+"<br>You: "+answer,"#ff384a");
	addToLocalScore(false);
	nextWord();
}


function nextWord(){
	setCategory(category);
	if(!finishTraining){
		generateLetters()
		hideSecretWord();
		document.getElementById('lets').style.opacity = 0;
		document.getElementById('help').style.opacity = 0;
		attempts = 3;
		answer = "";
		hideButtons();
	}
	else{
		showModal(true,"Thanks for your time!",":)","#17a2b8");
	}
}



function generateButtons(){
	var div = document.getElementById('divBotones');
	var cont = 0, lim =7;
	if(screen_X<350){
		lim = 6;
		noBtns = 30;
	}
	for (var i=1; i<=noBtns;i++){
		var boton = document.createElement('input');
		boton.type = 'button';
		boton.id = '_'+i;
		boton.value = '_';
		boton.className = "letra btn btn-dark";
		div.appendChild(boton);
		boton.setAttribute( "onclick","addLetter('"+boton.id+"');");
		cont++;
		var space = document.createElement("span");
		space.innerHTML = ' ';
		div.appendChild(space);
		if(cont==lim){
			var br1 = document.createElement("br");
			var br2 = document.createElement("br");
			div.appendChild(br1);
			div.appendChild(br2);
			cont=0;
		}
	}
}

function hideSecretWord(){
	var posiciones = [];
	var palabra = word;
	var libre = false;
	for(var i = 0; i < palabra.length; i++){
	    while (!libre) {
	        var posicion = Math.round(Math.random() * (noBtns - 2));
	        if(!posiciones.includes(posicion) && posicion!= 0){
	          	posiciones.push(posicion);
	          	libre = true;
	        }
	    }
	    libre = false;
	}
	for(var i in posiciones){
		var bot = document.getElementById('_'+posiciones[i]).value =word[i];
	}
}


function removeWord(){
	console.log("Removiendo: "+word+" Cat: "+tempCategory);
	if(tempCategory=="BASIC"){
    	basicWords.splice(basicWords.indexOf(word), 1);
    	if(basicWords.length==0){
				showModal(true,"Congratulations!","You have finished basic words","#17a2b8");
				categoryIsNotRandom();
    		randomCategories.splice(randomCategories.indexOf("BASIC"),1);
    	}
  	}
  	else if(tempCategory=="INTERMEDIATE"){
    	intermediateWords.splice(intermediateWords.indexOf(word), 1);
    	if(intermediateWords.length==0){
				showModal(true,"Congratulations!","You have finished intermediate words","#17a2b8");
				categoryIsNotRandom();
    		randomCategories.splice(randomCategories.indexOf("INTERMEDIATE"),1);
    	}
    }
  	else if(tempCategory=="ADVANCED"){
    	advancedWords.splice(advancedWords.indexOf(word), 1);
    	if(advancedWords.length==0){
			showModal(true,"Congratulations!","You have finished advanced words","#17a2b8");
			categoryIsNotRandom();
    		randomCategories.splice(randomCategories.indexOf("ADVANCED"),1);
    	}
    }
}

function categoryIsNotRandom(){
	if(category!="RANDOM"){
		finishTraining = true;
	}
}

function getHelp(){
	var h = "";
	for(i in word){
		h += "_";
	}
	h = h.split("");
	h[0] = word[0];
	h[Math.round(word.length/2)] = word[Math.round(word.length/2)];
	if(tempCategory!="BASIC"){
		h[word.length-1] = word[word.length-1];
	}
	h = h.join("");
	document.getElementById('help').style.opacity = 0;
	showModal(true,"The word is:",h,"#f8f9fa");
}

function addKey(event){
	if(document.getElementById('botones').style.display == "block"){
		var key = String.fromCharCode(event.which).toUpperCase();
		var btns = document.getElementById('divBotones').childNodes;
		if(word.includes(key)){
			for(i in btns){
				if(btns[i].value==key){
					addLetter(btns[i].id);
					break;
				}
				else if(btns[(btns.length-1) - i].value==key){
					addLetter(btns[(btns.length-1) - i].id);
					break;
				}
			}
		}
		else{
			answer+= key;
			badWord();
		}
	}
}

function showModal(closable,msgHeader,msgContent,color){
	 
	if(closable){
		document.getElementById("closable").style.display = "block";
	}
	else{
		document.getElementById("closable").style.display = "none";
		setTimeout('$("#myModal").modal("hide")', 2000);
	}
	document.getElementById('divModal').style.backgroundColor = color;
	document.getElementById('modHeader').innerHTML = msgHeader;
	document.getElementById('modContent').innerHTML = msgContent;
	
	$("#myModal").modal("toggle");
	
}

$('.pop').popover().click(function () {
    setTimeout(function () {
        $('.pop').popover('hide');
    }, 700);
});

//Desactivar la consola del Navegador-->
//*
var DEBUG = false;
if(!DEBUG){
    if(!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "info"];
    for(var i=0;i<methods.length;i++){
        console[methods[i]] = function(){};
    }
}

// Desactivar la consola del navegador <<-- */

function loadScore (){
	getlocScore();
	for(i in randomCategories){
		tempCategory = randomCategories[i];
		for(j in localScore[randomCategories[i]].words){
			word = localScore[randomCategories[i]].words[j];
			removeWord();
		}
	}
}



function getlocScore (){
	var locScore = JSON.parse(localStorage.getItem("localScore"));
	if(locScore == null || locScore == "" || locScore == 'undefined' || typeof locScore == 'undefined'){
		createlocScore();
	}	
	else{
		localScore = locScore;
	}
}

function createlocScore (){
	let locScore = {
		BASIC : {
			score: 0,
			wrong: 0,
			words: []
		},
		INTERMEDIATE : {
			score: 0,
			wrong: 0,
			words: []
		},
		ADVANCED : {
			score: 0,
			wrong: 0,
			words: []
		}
	};
	localStorage.setItem("localScore", JSON.stringify(locScore));
	localScore = locScore;
}

function addToLocalScore (correct){
	if(correct){
		localScore[tempCategory].words.push(word);
		localScore[tempCategory].score++;
	}
	else{
		localScore[tempCategory].wrong++;
	}
	localStorage.setItem("localScore", JSON.stringify(localScore));
}
