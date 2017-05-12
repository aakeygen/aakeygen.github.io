(function () {
	var state = {
		act: true,
		reg: false
	};
	window._act = function(x) {
		state.act = x;
	};

	window._reg = function(x) {
		state.reg = x;
	};
	$(document).ready(function() {
		var words = ["mandatary", "mandate", "mandated", "mandatedness", "mandatee", "mandates", "mandating", "mandation", "mandative", "mandator", "mandatories", "mandatorily", "mandatoriness", "mandators", "mandatory", "mandats", "mandatum", "mandelate", "mandelic", "manderelle", "mandi", "mandible", "mandibles", "mandibula", "mandibular", "mandibulary", "mandibulate", "mandibulated", "mandibuliform", "mandibulohyoid", "mandibulomaxillary", "mandibulopharyngeal", "mandibulosuspensorial", "mandil", "mandilion", "mandingo", "mandioca", "mandiocas", "mandir", "mandlen", "mandment", "mandoer", "mandola", "mandolas", "mandolin", "mandoline", "mandolinist", "mandolinists", "mandolins", "mandolute", "mandom", "mandora", "mandore", "mandorla", "mandorlas", "mandorle", "mandra", "mandragora", "mandragvn", "mandrake", "mandrakes", "mandrel", "mandrels", "mandriarch", "mandril", "mandrill", "mandrills", "mandrils", "mandrin", "mandritta", "mandruka", "mands", "mandua", "manducable", "manducate", "manducated", "manducating", "manducation", "manducatory", "mandyai", "mandyas", "mandyases", "mandyi", "mane", "manes", "maned", "manege", "maneges", "maneh", "manei", "maneless", "manent", "manequin", "manerial", "manes", "manesheet", "maness", "manet", "maneuver", "maneuverability", "maneuverable", "maneuvered", "maneuverer", "maneuvering", "maneuvers", "maneuvrability", "maneuvrable", "maneuvre", "maneuvred", "maneuvring", "maney", "manfish", "manful", "manfully", "manfulness", "mang", "manga", "mangabeira", "mangabev", "mangabey", "mangabeys", "mangabies", "mangaby", "mangal", "mangana", "manganapatite", "manganate", "manganblende", "manganbrucite", "manganeisen", "manganese", "manganesian", "manganesic", "manganetic", "manganhedenbergite", "manganic", "manganiferous", "manganite", "manganium", "manganize", "manganocalcite", "manganocolumbite", "manganophyllite", "manganosiderite", "manganosite", "manganostibiite", "manganotantalite", "manganous", "manganpectolite", "mange", "mangeao", "mangeier", "mangeiest", "mangel", "mangelin", "mangels", "mangelwurzel", "manger", "mangers", "mangerite", "mangers", "mangery", "manges", "mangey", "mangi", "mangier", "mangiest", "mangily", "manginess", "mangle", "mangled", "mangleman", "mangler", "manglers", "mangles", "mangling", "manglingly", "mango", "mangoes", "mangold", "mangolds", "mangona", "mangonel", "mangonels", "mangonism", "mangonization", "mangonize", "mangoro", "mangos", "mangosteen", "mangour", "mangrass", "mangrate", "mangrove", "mangroves", "mangue", "mangwe", "mangy", "manhaden", "manhandle", "manhandled", "manhandler", "manhandles", "manhandling", "manhattan", "manhattans", "manhead", "manhole", "manholes", "manhood", "manhoods", "manhours", "manhunt", "manhunter", "manhunting", "manhunts", "mani", "mania", "maniable", "maniac", "maniacs", "maniacal", "maniacally", "maniacs", "maniaphobia", "manias", "manic", "manically", "manicate", "manichaean", "manichee", "manichord", "manichordon", "manicole", "manicon", "manicord", "manicotti", "manics", "maniculatus", "manicure", "manicured", "manicures", "manicuring", "manicurist", "manicurists", "manid", "manie", "manienie", "maniere", "manifer", "manifest", "manifesta", "manifestable", "manifestant", "manifestation", "manifestations", "manifestational", "manifestationist", "manifestations", "manifestative", "manifestatively", "manifested", "manifestedness", "manifester", "manifesting", "manifestive", "manifestly", "manifestness", "manifesto", "manifestoed", "manifestoes", "manifestos", "manifests", "manificum", "manifold", "manifolds", "manifolded", "manifolder", "manifolding", "manifoldly", "manifoldness", "manifolds", "manifoldwise", "maniform", "manify", "manihot", "manihots", "manikin", "manikinism", "manikins", "manila", "manilas", "manilio", "manilla", "manillas", "manille", "manilles", "manini", "manioc", "manioca", "maniocas", "maniocs", "maniple", "maniples", "manipulability", "manipulable", "manipular", "manipulary", "manipulatability", "manipulatable", "manipulate", "manipulated", "manipulates", "manipulating", "manipulation", "manipulational", "manipulations", "manipulative", "manipulatively", "manipulator", "manipulators", "manipulators", "manipulatory", "manis", "manism", "manist", "manistic", "manit", "manito", "manitoba", "manitos", "manitou", "manitous", "manitrunk", "manitu", "manitus", "maniu", "manjack", "manjak", "manjeet", "manjel", "mank", "mankeeper", "mankie", "mankiller", "mankilling", "mankin", "mankind", "mankinds", "mankindly", "manks", "manky", "manless", "manlessly", "manlessness", "manlet", "manlier", "manliest", "manlihood", "manlike", "manlikely", "manlikeness", "manlily", "manliness", "manling", "manly", "manmade", "manna", "mannaia", "mannan", "mannans", "mannas", "manned", "mannequin", "mannequins", "manner", "mannerable", "mannered", "manneredness", "mannerhood", "mannering", "mannerism", "mannerisms", "mannerist", "manneristic", "manneristical", "manneristically", "mannerize", "mannerless", "mannerlessness", "mannerliness", "mannerly", "manners", "mannersome", "manness", "mannet", "mannide", "mannie", "manniferous", "mannified", "mannify", "mannikin", "mannikinism", "mannikins", "manning", "mannire", "mannish", "mannishly", "mannishness", "mannitan", "mannite", "mannites", "mannitic", "mannitol", "mannitols", "mannitose", "mannoheptite", "mannoheptitol", "mannoheptose", "mannoketoheptose", "mannonic", "mannopus", "mannosan", "mannose", "mannoses", "manny", "mano", "manoc", "manoeuver", "manoeuvered", "manoeuvering", "manoeuvre", "manoeuvred", "manoeuvreing", "manoeuvrer", "manoeuvring", "manograph", "manoir", "manometer", "manometers", "manometers", "manometric", "manometrical", "manometrically", "manometries", "manometry", "manomin", "manor", "manors", "manorial", "manorialism", "manorialize", "manors", "manorship", "manos", "manoscope", "manostat", "manostatic", "manpack", "manpower", "manpowers", "manqu", "manque", "manquee", "manqueller", "manred", "manrent", "manroot", "manrope", "manropes", "mans", "mansard", "mansarded", "mansards", "manscape", "manse", "manser", "manservant", "manses", "manship", "mansion", "mansions", "mansional", "mansionary", "mansioned", "mansioneer", "mansionry", "mansions", "manslaughter", "manslaughterer", "manslaughtering", "manslaughterous", "manslaughters", "manslayer", "manslayers", "manslaying", "manso", "mansonry", "manstealer", "manstealing", "manstopper", "manstopping", "mansuete", "mansuetely", "mansuetude", "manswear", "mansworn", "mant", "manta", "mantal", "mantapa", "mantappeaux", "mantas", "manteau", "manteaus", "manteaux", "manteel", "mantegar", "mantel", "mantels", "mantelet", "mantelets", "manteline", "mantelletta", "mantellone", "mantellshelves", "mantelpiece", "mantelpieces", "mantels", "mantelshelf", "manteltree", "manter", "mantes", "mantevil", "mantic", "mantically", "manticism", "manticora", "manticore", "mantid", "mantids", "mantilla", "mantillas", "mantis", "mantises", "mantispid", "mantissa", "mantissas", "mantissas", "mantistic", "dragomanish", "dragomans", "dragomen", "dragon", "dragons", "dragonade", "dragonesque", "dragoness", "dragonet", "dragonets", "dragonfish", "dragonfishes", "dragonflies", "dragonfly", "dragonhead", "dragonhood", "dragonish", "dragonism", "dragonize", "dragonkind", "dragonlike", "dragonnade", "dragonne", "dragonroot", "dragons", "dragontail", "dragonwort", "dragoon", "dragoonable", "dragoonade", "dragoonage", "dragooned", "dragooner", "dragooning", "dragoons", "dragrope", "dragropes", "drags", "dragsaw", "dragsawing", "dragshoe", "dragsman", "dragsmen", "dragstaff", "dragster", "dragsters", "drahthaar", "drail", "drailed", "drailing", "drails", "drain", "drainable", "drainage", "drainages", "drainageway", "drainboard", "draine", "drained", "drainer", "drainerman", "drainermen", "drainers", "drainfield", "draining", "drainless", "drainman", "drainpipe", "drainpipes", "drains", "drainspout", "draintile", "drainway", "draisene", "draisine", "drake", "drakefly", "drakelet", "drakes", "drakestone", "drakonite", "dram", "drama", "dramas", "dramalogue", "dramamine", "dramas", "dramatic", "dramatical", "dramatically", "dramaticism", "dramaticle", "dramatics", "dramaticule", "dramatis", "dramatisable", "dramatise", "dramatised", "dramatiser", "dramatising", "dramatism", "dramatist", "dramatists", "dramatists", "dramatizable", "dramatization", "dramatizations", "dramatize", "dramatized", "dramatizer", "dramatizes", "dramatizing", "dramaturge", "dramaturgic", "dramaturgical", "dramaturgically", "dramaturgist", "dramaturgy", "drame", "dramm", "drammach", "drammage", "dramme", "drammed", "drammer", "dramming", "drammock", "drammocks", "drams", "dramseller", "dramshop", "dramshops", "drang", "drank", "drant", "drapability", "drapable", "drape", "drapeability", "drapeable", "draped", "draper", "draperess", "draperied", "draperies", "drapers", "drapery", "draperys", "drapes", "drapet", "drapetomania", "draping", "drapping", "drassid", "drastic", "drastically", "drat", "dratchell", "drate", "drats", "dratted", "dratting", "draught", "draughts", "draughtboard", "draughted", "draughter", "draughthouse", "draughtier", "draughtiest", "draughtily", "draughtiness", "draughting", "draughtman", "draughtmanship", "draughts", "draughtsboard", "draughtsman", "draughtsmanship", "draughtsmen", "draughtswoman", "draughtswomanship", "draughty", "drave", "dravidian", "dravite", "dravya", "draw", "drawability", "drawable", "drawarm", "drawback", "drawbacks", "drawbacks", "drawbar", "drawbars", "drawbeam", "drawbench", "drawboard", "drawbolt", "drawbore", "drawbored", "drawbores", "drawboring", "drawboy", "drawbridge", "drawbridges", "drawbridges", "drawcansir", "drawcard", "drawcut", "drawdown", "drawdowns", "drawee", "drawees", "drawer", "drawerful", "drawers", "drawfile", "drawfiling", "drawgate", "drawgear", "drawglove", "drawhead", "drawhorse", "drawing", "drawings", "drawk", "drawknife", "drawknives", "drawknot", "drawl", "drawlatch", "drawled", "drawler", "drawlers", "drawlier", "drawliest", "drawling", "drawlingly", "drawlingness", "drawlink", "drawloom", "drawls", "drawly", "drawn", "drawnet", "drawnly", "drawnness", "drawnwork", "drawoff", "drawout", "drawplate", "drawpoint", "drawrod", "draws", "drawshave", "drawsheet", "drawspan", "drawspring", "drawstop", "drawstring", "drawstrings", "drawtongs", "drawtube", "drawtubes", "dray", "drayage", "drayages", "drayed", "drayhorse", "draying", "drayman", "draymen", "drays", "drazel", "drch", "dread", "dreadable", "dreaded", "dreader", "dreadful", "dreadfully", "dreadfulness", "dreadfuls", "dreading", "dreadingly", "dreadless", "dreadlessly", "dreadlessness", "dreadlocks", "dreadly", "dreadnaught", "dreadness", "dreadnought", "dreadnoughts", "dreads", "dream", "dreamage", "dreamboat", "dreamed", "dreamer", "dreamers", "dreamery", "dreamful", "dreamfully", "dreamfulness", "dreamhole", "dreamier", "dreamiest", "dreamily", "dreaminess", "dreaming", "dreamingful", "dreamingly", "dreamish", "dreamland", "dreamless", "dreamlessly", "dreamlessness", "dreamlet", "dreamlike", "dreamlikeness", "dreamlit", "dreamlore", "dreams", "dreamscape", "dreamsily", "dreamsiness", "dreamsy", "dreamt", "dreamtide", "dreamtime", "dreamwhile", "dreamwise", "dreamworld", "dreamy", "drear", "drearfully", "drearier", "drearies", "dreariest", "drearihead", "drearily", "dreariment", "dreariness", "drearing", "drearisome", "drearisomely", "drearisomeness", "drearly", "drearness", "dreary", "dreche", "dreck", "drecks", "dredge", "dredged", "dredgeful", "dredger", "dredgers", "dredges", "dredging", "dredgings", "dree", "dreed", "dreegh", "dreeing", "dreep", "dreepiness", "dreepy", "drees", "dreg", "dreggier", "dreggiest", "dreggily", "dregginess", "dreggish", "dreggy", "dregless", "dregs", "dreich", "dreidel", "dreidels", "dreidl", "dreidls", "dreigh", "dreikanter", "dreikanters", "dreiling", "dreint", "dreissiger", "drek", "dreks", "drench", "drenched", "drencher", "drenchers", "drenches", "drenching", "drenchingly", "dreng", "drengage", "drengh", "drent", "drepane", "drepania", "drepanid", "drepaniform", "drepanium", "drepanoid", "dresden", "dress", "dressage", "dressages", "dressed", "dresser", "dressers", "dressership", "dresses", "dressier", "dressiest", "dressily", "dressiness", "dressing", "dressings", "dressline", "dressmake", "dressmaker", "dressmakers", "dressmakers", "dressmakership", "dressmakery", "dressmaking", "dressoir", "dressoirs", "dressy", "drest", "dretch", "drevel", "drew", "drewite", "drey", "dreynt", "drias", "drib", "dribbed", "dribber", "dribbet", "dribbing", "dribble", "dribbled", "dribblement", "dribbler", "dribblers", "dribbles", "dribblet", "dribblets", "dribbling", "driblet", "driblets", "dribs", "dridder", "driddle", "drie", "driech", "dried", "driegh", "drier", "driers", "drierman", "driers", "dries", "driest", "drift", "driftage", "driftages", "driftbolt", "drifted", "drifter", "drifters", "driftfish", "driftfishes", "driftier", "driftiest", "drifting", "driftingly", "driftland", "driftless", "driftlessness", "driftlet", "driftman", "driftpiece", "driftpin", "driftpins", "drifts", "driftway", "driftweed", "driftwind", "driftwood", "drifty", "drighten", "drightin", "drill", "drillability", "drillable", "drillbit", "drilled", "driller", "drillers", "drillet", "drilling", "drillings", "drillman", "drillmaster", "drillmasters", "drills", "drillstock", "drilvis", "drily", "dringle", "drink", "drinkability", "drinkable", "drinkableness", "drinkables", "drinkably", "drinker", "drinkers", "drinkery", "drinking", "drinkless", "drinkproof", "drinks", "drinky", "drinn", "drip", "drips", "dripless", "dripolator", "drippage", "dripped", "dripper", "drippers", "drippier", "drippiest", "dripping", "drippings", "dripple", "dripproof", "drippy", "drips", "dripstick", "dripstone", "dript", "drisheen", "drisk", "drissel", "drivable", "drivage", "drive", "driveable", "driveaway", "driveboat", "drivebolt", "drivecap", "drivehead", "drivel", "driveled", "driveler", "drivelers", "driveline", "driveling", "drivelingly", "drivelled", "driveller", "drivellers", "drivelling", "drivellingly", "drivels", "driven", "drivenness", "drivepipe", "driver", "driverless", "drivers", "drivership", "drives", "drivescrew", "driveway", "driveways", "driveways", "drivewell", "driving", "drivingly", "drizzle", "drizzled", "drizzles", "drizzlier", "drizzliest", "drizzling", "drizzlingly", "drizzly", "drochuil", "droddum", "drof", "drofland", "droger", "drogerman", "drogermen", "drogh", "drogher", "drogherman", "droghlin", "drogoman", "drogue", "drogues", "droguet", "droh", "droich", "droil", "droit", "droits", "droitsman", "droitural", "droiture", "droiturel", "drolerie", "droll", "drolled", "droller", "drolleries", "drollery", "drollest", "drolling", "drollingly", "drollish", "drollishness", "drollist", "drollness", "drolls", "drolly", "drolushness", "dromaeognathism", "dromaeognathous", "drome", "dromed", "dromedarian", "dromedaries", "dromedarist", "dromedary", "drometer", "dromic", "dromical", "dromioid", "dromograph", "dromoi", "dromomania", "dromometer", "dromon", "dromond", "dromonds", "dromons", "dromophobia", "dromornis", "dromos", "dromotropic", "drona", "dronage", "drone", "drones", "droned", "dronel", "dronepipe", "droner", "droners", "drones", "dronet", "drongo", "drongos", "droning", "droningly", "dronish", "dronishly", "dronishness", "dronkelew", "dronkgrass", "dronte", "drony", "droob", "drool", "drooled", "droolier", "drooliest", "drooling", "drools", "drooly", "droop", "drooped", "drooper", "droopier", "droopiest", "droopily", "droopiness", "drooping", "droopingly", "droopingness", "droops", "droopt", "droopy", "drop", "drops", "dropax", "dropberry", "dropcloth", "dropflower", "dropforge", "dropforged", "dropforger", "dropforging", "drophead", "dropheads", "dropkick", "dropkicker", "dropkicks", "droplet", "droplets", "droplight", "droplike", "dropline", "dropling", "dropman", "dropmeal", "dropout", "dropouts", "droppage", "dropped", "dropper", "droppers", "dropperful", "droppers", "dropping", "droppings", "droppingly", "droppings", "droppy", "drops", "dropseed", "dropshot", "dropshots", "dropsical", "dropsically", "dropsicalness", "dropsied", "dropsies", "dropsonde", "dropsy", "dropsywort", "dropt", "dropvie", "dropwise", "dropworm", "dropwort", "dropworts", "drosera", "droseraceous", "droseras", "droshkies", "droshky", "droskies", "drosky", "drosograph", "drosometer", "drosophila", "drosophilae", "drosophilas", "dross", "drossed", "drossel", "drosser", "drosses", "drossier", "drossiest", "drossiness", "drossing", "drossless", "drossy", "drostden", "drostdy", "drou", "droud", "droughermen", "drought", "droughts", "droughtier", "droughtiest", "droughtiness", "droughts", "droughty", "drouk", "droukan", "drouked", "drouket", "drouking", "droukit", "drouks", "droumy", "drouth", "drouthier", "drouthiest", "drouthiness", "drouths", "drouthy", "drove", "droved", "drover", "drovers", "droves", "droving", "drovy", "drow"];
		var chars = 'abcdefghijklmnopqrstuvwqyz0123456789';

		function ubs() {
			$('#textbg').width($('#text').width());
			$('#textbg').height($('#text').height()+45);
		};

		$(window).resize(ubs).trigger('resize');

		$('#text').mouseover(function() {
			$('#textbg').stop().animate({ opacity: 0.85 });
		}).mouseleave(function() {
			$('#textbg').stop().animate({ opacity: 0 });
		});

		(function() {
			var VELOCITY = 1;
			var PARTICLES = 400;
			
			var mouse = {x:0, y:0};
			var particles = [];
			var colors = [ "#601ED4","#FFFFFF","#E3A644" ];
			var canvas = document.getElementById('bg');
			canvas.style.backgroundColor = 'black';
			var context;
			
			if (canvas && canvas.getContext) {
				context = canvas.getContext('2d');
				
				for( var i = 0; i < PARTICLES; i++ ) {
					particles.push( { 
						x: Math.random()*window.innerWidth,
						y: Math.random()*window.innerHeight,
						vx: ((Math.random()*(VELOCITY*2))-VELOCITY),
						vy: ((Math.random()*(VELOCITY*2))-VELOCITY),
						size: (1+Math.random()*3),
						color: colors[ Math.floor( Math.random() * colors.length ) ]
					} );
				}
				
				Initialize();
			}
			
			function Initialize() {
				window.addEventListener('mousemove', MouseMove, false);
				window.addEventListener('mousedown', MouseDown, false);
				window.addEventListener('resize', ResizeCanvas, false);
				setInterval( TimeUpdate, 40 );
				
				ResizeCanvas();
			}
			
			function TimeUpdate(e) {
				
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				
				var len = particles.length;
				var particle;
				
				for( var i = 0; i < len; i++ ) {
					particle = particles[i];
					
					if (!particle.frozen) {
						particle.x += particle.vx;
						particle.y += particle.vy;
						
						if (particle.x > window.innerWidth) {
							particle.vx = -VELOCITY - Math.random();
						}
						else if (particle.x < 0) {
							particle.vx = VELOCITY + Math.random();
						}
						else {
							particle.vx *= 1 + (Math.random() * 0.005);
						}
						
						if (particle.y > window.innerHeight) {
							particle.vy = -VELOCITY - Math.random();
						}
						else if (particle.y < 0) {
							particle.vy = VELOCITY + Math.random();
						}
						else {
							particle.vy *= 1 + (Math.random() * 0.005);
						}
						
						var distanceFactor;
						if(particle.color == colors[1]) {
							distanceFactor = 1;
						}
						else {
							distanceFactor = DistanceBetween( mouse, particle );
							distanceFactor = Math.max( Math.min( 15 - ( distanceFactor / 10 ), 10 ), 1 );
						}
						
						particle.currentSize = particle.size*distanceFactor;
					}
					
					context.fillStyle = particle.color;
					context.beginPath();
					context.arc(particle.x,particle.y,particle.currentSize,0,Math.PI*2,true);
					context.closePath();
					context.fill();
					
				}
			}
			
			function MouseMove(e) {
				mouse.x = e.layerX;
				mouse.y = e.layerY;
			}
			
			function MouseDown(e) {
				var len = particles.length;
				
				var closestIndex = 0;
				var closestDistance = 1000;
				
				for( var i = 0; i < len; i++ ) {
					var thisDistance = DistanceBetween( particles[i], mouse );
					
					if( thisDistance < closestDistance ) {
						closestDistance = thisDistance;
						closestIndex = i;
					}
					
				}
				
				if (closestDistance < particles[closestIndex].currentSize) {
					particles[closestIndex].frozen = true;
				}
			}
			
			function ResizeCanvas(e) {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
				if(context.setAlpha)
					context.setAlpha(0.5);
			}
			
			function DistanceBetween(p1,p2) {
				var dx = p2.x-p1.x;
				var dy = p2.y-p1.y;
				return Math.sqrt(dx*dx + dy*dy);
			}
		})();

		$('#start').click(function() {
			$(this).remove();
			ubs();

			var tails = ['@gmail.com', '@yahoo.com'];
			var email = '';
			var i;

			email += words[randomInt(0, words.length - 1)] + '.' + words[randomInt(0, words.length - 1)];
			email += tails[randomInt(0, tails.length-1)];

			var password = '';
			for(i = 0; i < randomInt(8, 16); i++) {
				var c = chars.charAt(randomInt(0, chars.length-1));
				password += randomInt(0, 1) === 1 ? c : c.toUpperCase();
			}

			var check = '&#10003;';
			loga('Registering.. ');

			$.getScript('https://ephemeron:dayeiph0ne@pp@api.audioaddict.com/v1/di/members.jsonp?member[email]='+email+'&member[password]='+password+'&member[password_confirmation]='+password+'&_method=POST&callback=_reg', function() {
				if(state.reg && state.reg.api_key) {
					loga(check+'\nActivating premium... ');
					$.getScript('https://ephemeron:dayeiph0ne@pp@api.audioaddict.com/v1/di/members/1/subscriptions/trial/premium-radio-2016.jsonp?api_key='+state.reg.api_key+'&_method=POST&callback=_act', function() {
						if(!state.act) {
							var curl = 'http://www.di.fm/member/confirm/'+state.reg.confirmation_token;
							log(check+'\n');
							log('<a class="confirm-link" href="javascript:void(0);">To continue, click here to confirm your account.</a>\n');
							
							$('.confirm-link').click(function () {
								var win = window.open(curl, 'confirmation', 'width=100,height=100,top=0,left=0');
								setTimeout(function () {
									win.close();
									print();
									log('\nEnjoy!');
								}, 3500);
								log("Please leave the popup window open, and wait for 3.5 seconds...\n");
								window.focus();
							});

							function print() {
								log('Email address: '+state.reg.email);
								log('Password: '+password);
								log('Listen key: '+state.reg.listen_key);
								log('API key: '+state.reg.api_key);
							}
						}
						else {
							console.log('Error', state.act);
							log('Something went wrong during activation. Check the console.');
						}
					});
				}
				else {
					log('Something went wrong during registration.');
				}
			});

		});

		function log(str) {
			ubs();
			$('#log').append(str+'\n');
		}

		function loga(str) {
			ubs();
			$('#log').append(str);
		}
	});

	function randomInt(a, b) {
		return a-1+Math.round(1+Math.random()*(b-a));
	}
})();