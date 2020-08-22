var iFileName = "Aarakocra Varient Subraces.js";
RequiredSheetVersion(13);

SourceList["DNDWH"] = {
	name : "DND Wiki Homebrew",
	abbreviation : "DNDWH",
	url : "https://www.dandwiki.com/wiki/Main_Page",
}

RaceList["puffin aarakocra"] = {
	regExpSearch : /^(?=.*puffin)(?=.*aarakocra).*$/i,
	name : "Puffin Aarakocra",
	sortname : "Aarakocra Var, Puffin",
	source : ["DHB", 0],
	plural : "Aarakocra",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 },
		fly : { spd : 50, enc : 40 },
		swim : { spd : 30, enc : 20 },
	},
	languageProfs : [1, "Common", "Aarakocra", "Auran"],
	dmgres : ["Cold"],
	age : " reach maturity by age 3. Live to an average of 80 years",
	height : " about 5 feet tall",
	weight : " weigh between 80 and 100 pounds",
	heightMetric : " about 1.5 meters tall",
	weightMetric : " weigh between 36 and 45 kg",
	improvements : "Puffin Aarakocra: +1 Wisdom, +2 Dexterity;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Puffin Aarakocra (+1 Wisdom, +2 Dexterity)\nWings:\n   You have large wings sticking out of your back that, when fully extended outwards, give you a wingspan equal to twice your height. All armor and back accessories must be custom tailored to accommodate your wings.\nFlight:\n   You have a flying speed of 50 feet. In order to fly, you can’t be over-encumbered or wearing medium or heavy armor and you must have 15 feet of space.\nClaustrophobic:\n   While in spaces that are 10 feet or smaller space, you must make a DC 12 Wisdom saving throw each hour. If you fail, you have disadvantage on all attack rolls and ability checks until you enter an area that is larger.,
};

RaceList["eagle aarakocra"] = {
	regExpSearch : /^(?=.*eagle)(?=.*aarakocra).*$/i,
	name : "Eagle Aarakocra",
	sortname : "Aarakocra Var, Eagle",
	source : ["DNDWH", 0],
	plural : "Aarakocra",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 },
		fly : { spd : 50, enc : 40 },
	},
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*talons).*$/i,
		name : "Talons",
		source : ["DHB", 0],
		damage : [1, 4, "slashing"]
	},
	weaponsAdd : ["Talons"],
	languageProfs : ["Common", "Aarakocra", "Auran"],
	age : " reach maturity by age 3. Live to an average of 80 years",
	height : " about 5 feet tall",
	weight : " weigh between 80 and 100 pounds",
	heightMetric : " about 1.5 meters tall",
	weightMetric : " weigh between 36 and 45 kg",
	improvements : "Eagle Aarakocra: +1 Charisma, +2 Dexterity;",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Eagle Aarakocra (+1 Charisma, +2 Dexterity)\nWings:\n   You have large wings sticking out of your back that, when fully extended outwards, give you a wingspan equal to twice your height. All armor and back accessories must be custom tailored to accommodate your wings.\nFlight:\n   You have a flying speed of 50 feet. In order to fly, you can’t be over-encumbered or wearing medium or heavy armor and you must have 15 feet of space.\nClaustrophobic:\n   While in spaces that are 10 feet or smaller space, you must make a DC 12 Wisdom saving throw each hour. If you fail, you have disadvantage on all attack rolls and ability checks until you enter an area that is larger.\nEagle Eyes:\n   Whenever you make a Wisdom (Perception) check to make out details at a far distance, you are considered proficient in the Perception skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.,
};

RaceList["macaw aarakocra"] = {
	regExpSearch : /^(?=.*macaw)(?=.*aarakocra).*$/i,
	name : "Macaw Aarakocra",
	sortname : "Aarakocra Var, Macaw",
	source : ["DNDWH", 0],
	plural : "Aarakocra",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 },
		fly : { spd : 50, enc : 40 },
	},
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*talons).*$/i,
		name : "Talons",
		source : ["DNDWH", 0],
		damage : [1, 4, "slashing"]
	},
	weaponsAdd : ["Talons"],
	languageProfs : ["Common", "Aarakocra", "Auran"],
	age : " reach maturity by age 3. Live to an average of 80 years",
	height : " about 5 feet tall",
	weight : " weigh between 80 and 100 pounds",
	heightMetric : " about 1.5 meters tall",
	weightMetric : " weigh between 36 and 45 kg",
	improvements : "Macaw Aarakocra: +1 Charisma, +2 Dexterity;",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Macaw Aarakocra (+1 Charisma, +2 Dexterity)\nWings:\n   You have large wings sticking out of your back that, when fully extended outwards, give you a wingspan equal to twice your height. All armor and back accessories must be custom tailored to accommodate your wings.\nFlight:\n   You have a flying speed of 50 feet. In order to fly, you can’t be over-encumbered or wearing medium or heavy armor and you must have 15 feet of space.\nClaustrophobic:\n   While in spaces that are 10 feet or smaller space, you must make a DC 12 Wisdom saving throw each hour. If you fail, you have disadvantage on all attack rolls and ability checks until you enter an area that is larger.\nMimicry:\n   You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check.,
};

RaceList["owl aarakocra"] = {
	regExpSearch : /^(?=.*owl)(?=.*aarakocra).*$/i,
	name : "Owl Aarakocra",
	sortname : "Aarakocra Var, Owl",
	source : ["DNDWH", 0],
	plural : "Aarakocra",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 },
		fly : { spd : 50, enc : 40 },
	},
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*talons).*$/i,
		name : "Talons",
		source : ["DNDWH", 0],
		damage : [1, 4, "slashing"]
	},
	weaponsAdd : ["Talons"],
    vision : ["Darkvision", 60],
	languageProfs : ["Common", "Aarakocra", "Auran"],
	age : " reach maturity by age 3. Live to an average of 80 years",
	height : " about 5 feet tall",
	weight : " weigh between 80 and 100 pounds",
	heightMetric : " about 1.5 meters tall",
	weightMetric : " weigh between 36 and 45 kg",
	improvements : "Owl Aarakocra: +1 Wisdom, +2 Dexterity;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Owl Aarakocra (+1 Wisdom, +2 Dexterity)\nWings:\n   You have large wings sticking out of your back that, when fully extended outwards, give you a wingspan equal to twice your height. All armor and back accessories must be custom tailored to accommodate your wings.\nFlight:\n   You have a flying speed of 50 feet. In order to fly, you can’t be over-encumbered or wearing medium or heavy armor and you must have 15 feet of space.\nClaustrophobic:\n   While in spaces that are 10 feet or smaller space, you must make a DC 12 Wisdom saving throw each hour. If you fail, you have disadvantage on all attack rolls and ability checks until you enter an area that is larger.,
};

RaceList["potoo aarakocra"] = {
	regExpSearch : /^(?=.*potoo)(?=.*aarakocra).*$/i,
	name : "Potoo Aarakocra",
	sortname : "Aarakocra Var, Potoo",
	source : ["DNDWH", 0],
	plural : "Aarakocra",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 },
		fly : { spd : 50, enc : 40 },
	},
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*talons).*$/i,
		name : "Talons",
		source : ["DNDWH", 0],
		damage : [1, 4, "slashing"]
	},
	weaponsAdd : ["Talons"],
	languageProfs : ["Common", "Aarakocra", "Auran"],
    skills : ["Stealth"],
	age : " reach maturity by age 3. Live to an average of 80 years",
	height : " about 5 feet tall",
	weight : " weigh between 80 and 100 pounds",
	heightMetric : " about 1.5 meters tall",
	weightMetric : " weigh between 36 and 45 kg",
	improvements : "Potoo Aarakocra: +1 Wisdom, +2 Dexterity;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Potoo Aarakocra (+1 Wisdom, +2 Dexterity)\nWings:\n   You have large wings sticking out of your back that, when fully extended outwards, give you a wingspan equal to twice your height. All armor and back accessories must be custom tailored to accommodate your wings.\nFlight:\n   You have a flying speed of 50 feet. In order to fly, you can’t be over-encumbered or wearing medium or heavy armor and you must have 15 feet of space.\nClaustrophobic:\n   While in spaces that are 10 feet or smaller space, you must make a DC 12 Wisdom saving throw each hour. If you fail, you have disadvantage on all attack rolls and ability checks until you enter an area that is larger.,
};

RaceList["finch aarakocra"] = {
	regExpSearch : /^(?=.*finch)(?=.*aarakocra).*$/i,
	name : "Finch Aarakocra",
	sortname : "Aarakocra Var, Finch",
	source : ["DNDWH", 0],
	plural : "Aarakocra",
	size : 2,
	speed : {
		walk : { spd : 25, enc : 15 },
		fly : { spd : 50, enc : 40 },
	},
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*talons).*$/i,
		name : "Talons",
		source : ["DNDWH", 0],
		damage : [1, 4, "slashing"]
	},
	weaponsAdd : ["Talons"],
	languageProfs : ["Common", "Aarakocra", "Auran"],
	age : " reach maturity by age 3. Live to an average of 80 years",
	height : " about 3 feet tall",
	weight : " weigh between 48 and 60 pounds",
	heightMetric : " about 0.9 meters tall",
	weightMetric : " weigh between 22 and 27 kg",
	improvements : "Finch Aarakocra: +1 Intelligence, +2 Dexterity;",
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Finch Aarakocra (+1 Intelligence, +2 Dexterity)\nWings:\n   You have large wings sticking out of your back that, when fully extended outwards, give you a wingspan equal to twice your height. All armor and back accessories must be custom tailored to accommodate your wings.\nFlight:\n   You have a flying speed of 50 feet. In order to fly, you can’t be over-encumbered or wearing medium or heavy armor and you must have 10 feet of space.\nClaustrophobic:\n   While in spaces that are 5 feet or smaller space, you must make a DC 12 Wisdom saving throw each hour. If you fail, you have disadvantage on all attack rolls and ability checks until you enter an area that is larger.\nNaturally Stealthy:\n   You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.,
};

RaceList["raven aarakocra"] = {
	regExpSearch : /^(?=.*raven)(?=.*aarakocra).*$/i,
	name : "Raven Aarakocra",
	sortname : "Aarakocra Var, Raven",
	source : ["DNDWH", 0],
	plural : "Aarakocra",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 },
		fly : { spd : 50, enc : 40 },
	},
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*talons).*$/i,
		name : "Talons",
		source : ["DNDWH", 0],
		damage : [1, 4, "slashing"]
	},
	weaponsAdd : ["Talons"],
	languageProfs : ["Common", "Aarakocra", "Auran"],
	toolProfs : ["Disguise kit"],
	age : " reach maturity by age 3. Live to an average of 80 years",
	height : " about 5 feet tall",
	weight : " weigh between 80 and 100 pounds",
	heightMetric : " about 1.5 meters tall",
	weightMetric : " weigh between 36 and 45 kg",
	improvements : "Raven Aarakocra: +1 Intelligence, +2 Dexterity;",
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Raven Aarakocra (+1 Intelligence, +2 Dexterity)\nWings:\n   You have large wings sticking out of your back that, when fully extended outwards, give you a wingspan equal to twice your height. All armor and back accessories must be custom tailored to accommodate your wings.\nFlight:\n   You have a flying speed of 50 feet. In order to fly, you can’t be over-encumbered or wearing medium or heavy armor and you must have enough 15 feet of space.\nClaustrophobic:\n   While in spaces that are 10 feet or smaller space, you must make a DC 12 Wisdom saving throw each hour. If you fail, you have disadvantage on all attack rolls and ability checks until you enter an area that is larger.,
};

RaceList["albatross aarakocra"] = {
	regExpSearch : /^(?=.*albatross)(?=.*aarakocra).*$/i,
	name : "Albatross Aarakocra",
	sortname : "Aarakocra Var, Albatross",
	source : ["DNDWH", 0],
	plural : "Aarakocra",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 },
		fly : { spd : 50, enc : 40 },
	},
	languageProfs : ["Common", "Aarakocra", "Auran"],
	age : " reach maturity by age 3. Live to an average of 80 years",
	height : " about 7 feet tall",
	weight : " weigh between 112 and 140 pounds",
	heightMetric : " about 2.1 meters tall",
	weightMetric : " weigh between 59 and 63.5 kg",
	improvements : "Albatross Aarakocra: +1 Strength, +2 Dexterity;",
	scores : [1, 2, 0, 0, 0, 0],
	trait : "Albatross Aarakocra (+1 Strength, +2 Dexterity)\nWings:\n   You have large wings sticking out of your back that, when fully extended outwards, give you a wingspan equal to twice your height. All armor and back accessories must be custom tailored to accommodate your wings.\nFlight:\n   You have a flying speed of 50 feet. In order to fly, you can’t be over-encumbered or wearing heavy armor and you must have 20 feet of space.\nClaustrophobic:\n   While in spaces that are 15 feet or smaller space, you must make a DC 12 Wisdom saving throw each hour. If you fail, you have disadvantage on all attack rolls and ability checks until you enter an area that is larger.\nPowerful Build:\n   You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.,
    carryingCapacity : 2,
};

RaceList["chicken aarakocra"] = {
	regExpSearch : /^(?=.*chicken)(?=.*aarakocra).*$/i,
	name : "Chicken Aarakocra",
	sortname : "Aarakocra Var, Chicken",
	source : ["DNDWH", 0],
	plural : "Aarakocra",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 },
	},
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*talons).*$/i,
		name : "Talons",
		source : ["DNDWH", 0],
		damage : [1, 4, "slashing"]
	},
	weaponsAdd : ["Talons"],
	languageProfs : ["Common", "Aarakocra", "Auran"],
	savetxt : {
	text : ["Disadv. on save against being frightened",],
    action : [["bonus action", "Disengage"], ["bonus action", "Hide"]],
	adv_vs : ["charmed"]
    },
	age : " reach maturity by age 3. Live to an average of 80 years",
	height : " about 5 feet tall",
	weight : " weigh between 80 and 100 pounds",
	heightMetric : " about 1.5 meters tall",
	weightMetric : " weigh between 36 and 45 kg",
	improvements : "Chicken Aarakocra: +1 Intelligence, +2 Dexterity;",
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Chicken Aarakocra (+1 Intelligence, +2 Dexterity)\Panicked Flapping:\n   You can reduce the damage you would take from falling by 50 feet as long as you are not grappled, incapicitated or restrained.\Nimble Escape:\n   You can take the Disengage or Hide action as a bonus action on each of your turns.,
};

RaceList["penguin aarakocra"] = {
	regExpSearch : /^(?=.*penguin)(?=.*aarakocra).*$/i,
	name : "Penguin Aarakocra",
	sortname : "Aarakocra Var, Penguin",
	source : ["DNDWH", 0],
	plural : "Aarakocra",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 },
		swim : { spd : 50, enc : 40 },
	},
	languageProfs : ["Common", "Aarakocra", "Auran"],
	dmgres : ["Cold"],
	age : " reach maturity by age 3. Live to an average of 80 years",
	height : " about 5 feet tall",
	weight : " weigh between 80 and 100 pounds",
	heightMetric : " about 1.5 meters tall",
	weightMetric : " weigh between 36 and 45 kg",
	improvements : "Penguin Aarakocra: +1 Constitution, +2 Dexterity;",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Penguin Aarakocra (+1 Constitution, +2 Dexterity)\nArtic Dwellers:\n   You are resistant to cold damage and have advantage on Wisdom (Survival) checks made in artic environments.,
};

RaceList["ostrich aarakocra"] = {
	regExpSearch : /^(?=.*ostrich)(?=.*aarakocra).*$/i,
	name : "Ostrich Aarakocra",
	sortname : "Aarakocra Var, Ostrich",
	source : ["DNDWH", 0],
	plural : "Aarakocra",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 },
	},
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*talons).*$/i,
		name : "Talons",
		source : ["DNDWH", 0],
		damage : [1, 4, "slashing"]
	},
	weaponsAdd : ["Talons"],
	languageProfs : ["Common", "Aarakocra", "Auran"],
	age : " reach maturity by age 3. Live to an average of 80 years",
	height : " about 5 feet tall",
	weight : " weigh between 80 and 100 pounds",
	heightMetric : " about 1.5 meters tall",
	weightMetric : " weigh between 36 and 45 kg",
	improvements : "Ostrich Aarakocra: +1 Strength, +2 Dexterity;",
	scores : [1, 2, 0, 0, 0, 0],
	trait : "Ostrich Aarakocra (+1 Strength, +2 Dexterity)\nStrong Legs:\n   You can move twice as far when jumping.\nPowerful Build:\n   You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.,
    carryingCapacity : 2,
};