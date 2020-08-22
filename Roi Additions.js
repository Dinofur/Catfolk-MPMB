var iFileName = "Roi Additions.js";
RequiredSheetVersion(13);

SourceList["COL"] = {
	name : "The Curse of Licidia",
	abbreviation : "COL",
};

FeatsList["keen eyes"] = {
	name : "Keen Eyes",
	source : ["COL", 0],
	description : "Advantage on sight-based perception rolls.",
	prerequisite : "Magic tattoo",
};

WeaponsList["midnight steel quarterstaff"] = {
	regExpSearch : /^le(?=.*midnight)(?=.*steel)(?=.*quarterstaff).*$/i,
	name : "Midnight Steel Quarterstaff",
	source : ["COL", 0],
	list : "melee",
	ability : 2,
	type : "Simple",
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	description : "Versatile (1d8), Thunderstep 3rd level (Save DC 16)",
	abilitytodamage : true,
	weight : 4,
	monkweapon : true,
	isMagicWeapon : true,
	modifiers : [2, 2],
};

MagicItemsList["rod of cold"] = {
	name : "Rod of Cold",
	source : ["COL", 0],
	type : "rod",
	rarity : "uncommon",
	weight : 1,
	allowDuplicates : true,
	description : "Any liquid that is not being worn or carried that remains within 1ft of this rod freezes after one hour. While in your hand or against your skin you do not suffer the effects of extreme heat and have advantage on constitution saving throws against the effects of heat.",
	descriptionLong : "This small metallic rod is 10 inches long and 1 inch in diameter. It is ice cold to the touch, and always has a small layer of frost coating it. Any liquid that is not being worn or carried that remains within 1ft of this rod freezes after one hour. While this Rod is in your hand, or against your skin you do not suffer the effects of extreme heat. In addition you have advantage on constitution saving throws against the effects of heat.",
};