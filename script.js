// mana types: browN, pinK, yeLLow, teAl, Orange, Black

var cards = [
  {
    name: "Dwarven Scribe",
    creator: "MunkeGutz",
    type: ["Creature"],
    type2: ["Dwarf", "Advisor"], // subtypes and supertypes, as well as DFC
    mana: [1, "N"],
    colors: ["brown"], // write out color names here for clarity
    pt: [1, 3], // leave array empty if card does not have P/T
    rulesText: "Vigilance <br>Wordy spells you cast cost (1) more to cast.",
    flavorText: "\"The tomes have little room for your monologuing\"",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/image%20(1).webp?v=1746664934825"
  },
  {
    name: "Pin Down",
    creator: "Insert Name Here",
    type: ["Instant"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: [1, "A"],
    colors: ["teal"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Choose one -" + 
    "<br>- Exile target instant or sorcery spell, then return it to the battlefield under its owner's control." +
    "<br>- All basic lands gain shroud until end of turn.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Pin%20Down.png?v=1746731051093"
  },
  {
    name: "Giant Salamander",
    creator: "MunkeGutz",
    type: ["Creature"],
    type2: ["Giant", "Salamander"], // subtypes and supertypes, as well as DFC
    mana: [1, "N"],
    colors: ["brown"], // write out color names here for clarity
    pt: [1, 3], // leave array empty if card does not have P/T
    rulesText: "Nonbasic landwalk",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Giant%20Salamander.png?v=1746731110295"
  },
  {
    name: "End the Masquerade",
    creator: "The Madwomen",
    type: ["Sorcery"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: [2, "L"],
    colors: ["yellow"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Goad target creature. It goes insane until your next turn." + 
    "<br>Madness (L)",
    flavorText: "\"Indeed, it's time. We have all laid aside disguise but you.\"" +
    "<br>\"I wear no mask.\"<br>\"No mask? No mask!\"" +
    "<br>- The King in Yellow, Act I, Scene II",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/End%20the%20Masquerade.png?v=1746731113593"
  },
  {
    name: "Giant Scarecrow",
    creator: "Insert Name Here",
    type: ["Artifact", "Creature"],
    type2: ["Giant", "Scarecrow"], // subtypes and supertypes, as well as DFC
    mana: [4, "N", "N"],
    colors: ["brown"], // write out color names here for clarity
    pt: [6, 6], // leave array empty if card does not have P/T
    rulesText: "Trample",
    flavorText: "\"Holy shit\" -Captain Storm",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Giant%20Scarecrow.png?v=1746731117985"
  },
  {
    name: "Crapshoot",
    creator: "The Madwomen",
    type: ["Instant"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: ["A"],
    colors: ["teal"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Counter target spell. Its controller may roll 2d6. If they roll a 7 or an 11, they create three Treasure tokens. " +
    "Otherwise, they create one of those tokens.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Crapshoot%20v2.png?v=1746744900288"
  },
  {
    name: "Dwarven Instigators",
    creator: "MunkeGutz",
    type: ["Creature"],
    type2: ["Dwarf", "Warrior"], // subtypes and supertypes, as well as DFC
    mana: [2, "N"],
    colors: ["brown"], // write out color names here for clarity
    pt: [4, 2], // leave array empty if card does not have P/T
    rulesText: "Provoke, provoke",
    flavorText: "\"You over there, with the short beard!\"",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Dwarven%20Instigators.png?v=1746732083279"
  },
  {
    name: "A Jolly Good Fellow",
    creator: "The Madwomen",
    type: ["Creature"],
    type2: ["Gremlin"], // subtypes and supertypes, as well as DFC
    mana: ["K", "K"],
    colors: ["pink"], // write out color names here for clarity
    pt: [4, 2], // leave array empty if card does not have P/T
    rulesText: "When this enters, create a Cake token. <br>Huglink",
    flavorText: "...That nobody can deny!",
    image: "images/AJollyGoodFellow.png"
  },
  {
    name: "Reality Stinger",
    creator: "MunkeGutz",
    type: ["Creature"],
    type2: ["Horror"], // subtypes and supertypes, as well as DFC
    mana: ["O/A", "A"],
    colors: ["orange", "teal"], // write out color names here for clarity
    pt: [2, 2], // leave array empty if card does not have P/T
    rulesText: "When Reality Stinger enters, target creature gains vanishing. Put 3 time counters on it.",
    flavorText: "Lurking in the corridors between worlds, it puts an end to those who do not belong.",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Reality%20Stinger.png?v=1746732093448"
  },
  {
    name: "Lightning-Flinger",
    creator: "MunkeGutz",
    type: ["Creature"],
    type2: ["Rat", "Warlock"], // subtypes and supertypes, as well as DFC
    mana: [1, "L"],
    colors: ["yellow"], // write out color names here for clarity
    pt: [1, 3], // leave array empty if card does not have P/T
    rulesText: "When this enters, it deals 2 damage to target player chosen at random." +
    "<br>Whenever you take damage from a source you control, this creature gets +2/+0 and gains trample until end of turn.",
    flavorText: "\"More-more power, yes-yes!\"",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Lightning%20Flinger.png?v=1746732096552"
  },
  {
    name: "Balloon Dragon",
    creator: "Insert Name Here",
    type: ["Artifact", "Creature"],
    type2: ["Balloon", "Dragon"], // subtypes and supertypes, as well as DFC
    mana: [2, "K", "K"],
    colors: ["pink"], // write out color names here for clarity
    pt: [4, 4], // leave array empty if card does not have P/T
    rulesText: "Flying" +
    "<br>If all players' combined life total is 100 or more, Balloon Dragon has base power and toughness 100/100.",
    flavorText: "Never underestimate the versatility of a clown's talents.",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Balloon%20Dragon.png?v=1746732101913"
  },
  {
    name: "Jolt to Wakefulness",
    creator: "The Madwomen",
    type: ["Instant"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: ["L"],
    colors: ["yellow"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Untap target tapped creature. If you paid the madness cost, put a -1/-1 counter on that creature. " +
    "Otherwise, draw a card. <br>Madness (0)",
    flavorText: "\"I saw the stars themselves. Their light was as black as the space between them, and they..." +
    "Gods help me, they were beautiful.\"",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Jolt%20to%20Wakefulness.png?v=1746732105898"
  },
  {
    name: "Man Opener",
    creator: "MunkeGutz",
    type: ["Creature"],
    type2: ["Horror"], // subtypes and supertypes, as well as DFC
    mana: [2, "N", "N"],
    colors: ["brown"], // write out color names here for clarity
    pt: [2, 2], // leave array empty if card does not have P/T
    rulesText: "When Man Opener enters, destroy target creature.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Man%20Opener.png?v=1746741786974"
  },
  {
    name: "Kindred of Rot",
    creator: "MunkeGutz",
    type: ["Creature"],
    type2: ["Insect", "Horror"], // subtypes and supertypes, as well as DFC
    mana: [1, "O"],
    colors: ["orange"], // write out color names here for clarity
    pt: [2, 1], // leave array empty if card does not have P/T
    rulesText: "First strike <br>Whenever a triggered ability causes you to sacrifice a permanent," +
    "put a +1/+1 counter on Kindred of Rot.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Kindred%20of%20Rot.png?v=1746741789376"
  },
  {
    name: "Trollish Justice",
    creator: "MunkeGutz",
    type: ["Instant"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: [1, "A"],
    colors: ["teal"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Flip a coin. If it comes up heads, counter target creature spell. " + 
    "Otherwise, counter target creature spell.",
    flavorText: "\"Coin? Surely you jest, the prosecution sees no coin.\"",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Trollish%20Justice.png?v=1746741791428"
  },
  {
    name: "Sugma, Hidden Below",
    creator: "The Madwomen",
    type: ["Creature"],
    type2: ["Legendary", "Dwarf", "Horror"], // subtypes and supertypes, as well as DFC
    mana: ["N/B", "N/B", "N/B", "N/B"],
    colors: ["brown", "other"], // write out color names here for clarity
    pt: [2, 2], // leave array empty if card does not have P/T
    rulesText: "Undying, persist, deathtouch",
    flavorText: "A common joke among the dwarves was, whenever an outsider would ask what Sugma was, to respond with " +
    "\"sugma balls\" or something akin to it. The dwarves loved this joke, as it was an easy way to dodge the question... " +
    "As well as ignore the horrors they had created.",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Sugma%20Hidden%20Below.png?v=1746742185644"
  },
  {
    name: "Piolence",
    creator: "Insert Name Here",
    type: ["Instant"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: ["K"],
    colors: ["pink"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Exile target attacking creature, then return it to the battlefield under its owner's control. " +
    "Its owner creates a Food token and you draw a card.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Piolence.png?v=1746742187373"
  },
  {
    name: "Clown Heretic",
    creator: "MunkeGutz",
    type: ["Creature"],
    type2: ["Clown", "Barbarian"], // subtypes and supertypes, as well as DFC
    mana: [1, "B/K", "K"],
    colors: ["pink", "other"], // write out color names here for clarity
    pt: [2, 3], // leave array empty if card does not have P/T
    rulesText: "Trample <br>Whenever an opponent gains life, put a +1/+1 counter on Clown Heretic.",
    flavorText: "Tainted with alien mana from another world, he left the circus in search of blood.",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Clown%20Heretic.png?v=1746742189469"
  },
  {
    name: "Tend",
    creator: "Vitral_",
    type: ["Sorcery"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: [2, "N"],
    colors: ["brown"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Create a colorless Mudflats land token. <br>Retrace",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Tend.png?v=1746743104333"
  },
  {
    name: "Drunken Master",
    creator: "The Madwomen",
    type: ["Creature"],
    type2: ["Human", "Monk"], // subtypes and supertypes, as well as DFC
    mana: [2, "O"],
    colors: ["orange"], // write out color names here for clarity
    pt: [3, 3], // leave array empty if card does not have P/T
    rulesText: "Blitz (4)(O) <br>When this dies, it deals damage equal to twice its power to target creature.",
    flavorText: "Even inebriated, some of the Order could defeat giants.",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Drunken%20Master.png?v=1746743106738"
  },
  {
    name: "D.I.Y. Devil",
    creator: "Draner",
    type: ["Creature"],
    type2: ["Devil"], // subtypes and supertypes, as well as DFC
    mana: [4, "K"],
    colors: ["pink"], // write out color names here for clarity
    pt: [2, 2], // leave array empty if card does not have P/T
    rulesText: "At the beginning of combat on your turn, you get two tickets, then you may put a sticker on a nonland permanent you control. " +
    "<br>D.I.Y. Devil gets +2/+0 for each name sticker it has and +0/+2 for each art sticker it has.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/DIY%20Devil.png?v=1746743108831"
  },
  {
    name: "Glimpse the Open Sky",
    creator: "Vitral_",
    type: ["Sorcery"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: [2, "O"],
    colors: ["orange"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Exile the top seven cards of your library. You may play two of them this turn.",
    flavorText: "\"The unreachable horizon. The setting of the burning sun. The cloudless abyss above our shifting ground. " +
    "These are the only things that are certain.\"",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Glimpse%20the%20Open%20Sky.png?v=1746743707040"
  },
  {
    name: "The Great Caucus Race",
    creator: "Vitral_",
    type: ["Instant"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: [1, "K"],
    colors: ["pink"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Demonstrate <br>Each player creates a 1/1 pink Beast Friend token that can't be blocked and with " + 
    "\"Whenever this creature deals damage to a player, that player draws a card\". <br>Scry 2.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/The%20Great%20Caucus%20Race.png?v=1746743708801"
  },
  {
    name: "Dispose Of",
    creator: "The Madwomen",
    type: ["Instant"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: [2, "N", "N"],
    colors: ["brown"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Deal 4 damage to target creature. <br>Weigh your options.",
    flavorText: "\"It can be as subtle or as blunt as you want, just make sure he doesn't bother us again.\" - Alrik, Mine Foreman",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Dispose%20Of.png?v=1746743710548"
  },
  {
    name: "Diggy Diggy Hole",
    creator: "Phae",
    type: ["Enchantment"],
    type2: ["Legendary"], // subtypes and supertypes, as well as DFC
    mana: [3, "N"],
    colors: ["brown"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "During your turn, Mudflats tap for one additional brown mana.",
    flavorText: "\"Born underground, suckled from a teat of stone. Raised in the dark, the safety of our mountain home.\"",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Diggy%20Diggy%20Hole.png?v=1746744481498"
  },
  {
    name: "Dwarven Arbalist",
    creator: "MunkeGutz",
    type: ["Creature"],
    type2: ["Dwarf", "Archer"], // subtypes and supertypes, as well as DFC
    mana: [2, "N"],
    colors: ["brown"], // write out color names here for clarity
    pt: [2, 4], // leave array empty if card does not have P/T
    rulesText: "Non-wordy creatures you control have reach. <br>Outlast (N)",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Dwarven%20Arbalist.png?v=1746744483410"
  },
  {
    name: "Simple Farmer",
    creator: "The Madwomen",
    type: ["Creature"],
    type2: ["Human", "Peasant"], // subtypes and supertypes, as well as DFC
    mana: [2, "N"],
    colors: ["brown"], // write out color names here for clarity
    pt: [2, 3], // leave array empty if card does not have P/T
    rulesText: "(T): Add (N). <br>(1), (T): Put a farm counter on target land.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Simple%20Farmer.png?v=1746744485431"
  },
  {
    name: "Amber Ent",
    creator: "Insert Name Here",
    type: ["Creature"],
    type2: ["Treefolk"], // subtypes and supertypes, as well as DFC
    mana: [1, "O"],
    colors: ["orange"], // write out color names here for clarity
    pt: [3, 3], // leave array empty if card does not have P/T
    rulesText: "Cumulative upkeep (1) <br>Reach <br>When Amber Ent dies, if it had two or more age counters on it, " +
    "you may create a token that's a copy of Amber Medallion.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Amber%20Ent.png?v=1746745366153"
  },
  {
    name: "Sand-Favored Corpse",
    creator: "The Madwomen",
    type: ["Creature"],
    type2: ["Zombie", "Monk"], // subtypes and supertypes, as well as DFC
    mana: [1, "O", "O"],
    colors: ["orange"], // write out color names here for clarity
    pt: [4, 4], // leave array empty if card does not have P/T
    rulesText: "Rot 3 <br>When this becomes a land, it becomes an Oasis in addition to its other types.",
    flavorText: "The sands of the hourglass finds itself rewarding some grains over others.",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Sand%20Favored%20Corpse%20v2.png?v=1746750817363"
  },
  {
    name: "Augius, Council Grandmaster",
    creator: "ThePixelFerret",
    type: ["Creature"],
    type2: ["Legendary", "Human", "Cleric"], // subtypes and supertypes, as well as DFC
    mana: [2, "A", "A"],
    colors: ["teal"], // write out color names here for clarity
    pt: [2, 3], // leave array empty if card does not have P/T
    rulesText: "Whenever you cast a spell, create a Treasure token. <br>Coerce",
    flavorText: "The Grandmaster is a conduit of prejudice, spite so tempered that it dispenses the will of its god without a second thought.",
    image: "images/AugiusCouncilGrandmaster2.png"
  },
  {
    name: "Hot Potato",
    creator: "Phae",
    type: ["Artifact"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: [1, "L"],
    colors: ["yellow"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "(T): Add (L) for each charge counter on this artifact. <br>At the beginning of each end step, flip a coin. If you win the flip, " +
    "put a charge counter on this artifact and the player after you in turn order gains control of it. Otherwise, this deals damage to you " +
    "equal to the number of charge counters on it.",
    flavorText: "\"In this era they want more innovation at any cost, never caring for the consequences.\"",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Hot%20Potato.png?v=1746746016288"
  },
  {
    name: "Show-Stopper",
    creator: "The Madwomen",
    type: ["Creature"],
    type2: ["Human", "Performer"], // subtypes and supertypes, as well as DFC
    mana: [3, "K"],
    colors: ["pink"], // write out color names here for clarity
    pt: [3, 4], // leave array empty if card does not have P/T
    rulesText: "Flash, split second <br>When this creature enters, end the turn. If the player or team whose turn it is isn't " +
    "you or on your team, the player(s) whose turn it is may draw X cards and gain X life, where X is twice the number of spells on the stack.",
    flavorText: "\"And now, the moment you've all been waiting for!\"",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Show%20Stopper.png?v=1746746018093"
  },
  {
    name: "Provocative Rootwalla",
    creator: "MAR10",
    type: ["Creature"],
    type2: ["Lizard"], // subtypes and supertypes, as well as DFC
    mana: ["L"],
    colors: ["yellow"], // write out color names here for clarity
    pt: [1, 1], // leave array empty if card does not have P/T
    rulesText: "Madness (0) <br>Provoke <br>(1)(L): Goad target creature. Activate only once each turn.",
    flavorText: "\"Even in strange, alien planes, the humble Rootwalla lives on.\"",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Provocative%20Rootwalla.png?v=1746746020129"
  },
  {
    name: "New Beginnings",
    creator: "The Madwomen",
    type: ["Enchantment"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: [3, "O", "O"],
    colors: ["orange"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Whenever a triggered ability causes you to sacrifice a creature, or a creature you control loses one or more " +
    "of its types, discover X, where X is that permanent's mana value.",
    flavorText: "Even death is less reliable than change.",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/New%20Beginnings.png?v=1746747593844"
  },
  {
    name: "Tumbleweed",
    creator: "MunkeGutz",
    type: ["Creature"],
    type2: ["Plant"], // subtypes and supertypes, as well as DFC
    mana: ["O", "O", "O"],
    colors: ["orange"], // write out color names here for clarity
    pt: [6, 1], // leave array empty if card does not have P/T
    rulesText: "Trample, haste <br>At the beginning of the end step, sacrifice this creature.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Tumbleweed.png?v=1746747595667"
  },
  {
    name: "Daoping, Puller of Strings",
    creator: "The Madwomen",
    type: ["Creature"],
    type2: ["Legendary", "Zombie", "Monk", "Child"], // subtypes and supertypes, as well as DFC
    mana: [3, "O", "O"],
    colors: ["orange"], // write out color names here for clarity
    pt: [4, 6], // leave array empty if card does not have P/T
    rulesText: "When this enters, target player may scry 3, then reveal the top card of their library. If that card is a permanent, " +
    "they put it on the battlefield with a time counter on it. If they do, it gains vanishing. <br>(3), (T): " +
    "Exile target creature, then return it to the battlefield under its owner's control.",
    flavorText: "Lived too long, yet died too soon...",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Daoping%20Puller%20of%20Strings.png?v=1746747597545"
  },
  {
    name: "Phosphophyllite Charm",
    creator: "Radio Jade",
    type: ["Instant"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: ["A", "A"],
    colors: ["teal"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Choose one - <br>- Counter target non-wordy spell. <br>- Exile the top three cards of your library and " + 
    "choose one. You may play that card for as long as it remains exiled. <br>- Put a phantasmal counter on target creature.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Phosphophyllite%20Charm.png?v=1746748276746"
  },
  {
    name: "Purifying Pyre // Putrefying Pyre",
    creator: "Insert Name Here",
    type: ["Enchantment"],
    type2: ["DFC"], // subtypes and supertypes, as well as DFC
    mana: ["1", "O"],
    colors: ["orange", "other"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Cumulative upkeep (O) <br>Whenever a permanent you control gets an age counter or loses a time counter, you may " + 
    "draw a card. If you do, discard a card. <br>Disturb (3)(H/B)(H/B) <br>//<br>Cumulative upkeep (B) <br>Whenever a player " +
    "draws a card, you may pay (H/B). If you do, that player mills two cards for each age counter on Putrefying Pyre.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Purifying%20Pyre%20-%20Putrefying%20Pyre.png?v=1746748278227"
  },
  {
    name: "Impatient Rook",
    creator: "The Madwomen",
    type: ["Creature"],
    type2: ["Troll", "Warrior"], // subtypes and supertypes, as well as DFC
    mana: [2, "A", "A"],
    colors: ["teal"], // write out color names here for clarity
    pt: [4, 4], // leave array empty if card does not have P/T
    rulesText: "As an additional cost to cast this spell, sacrifice a pawn. <br>When this enters, choose one - " +
    "<br>- Remove up to five counters from target permanent. <br>- Put a trample counter on this creature.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Impatient%20Rook.png?v=1746748280286"
  },
  {
    name: "Citrine Scepter",
    creator: "Insert Name Here",
    type: ["Artifact"],
    type2: ["Equipment"], // subtypes and supertypes, as well as DFC
    mana: [1, "L"],
    colors: ["yellow"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Equip (2) <br>Equipped creature gets +2/+0 and has prowess and trample. <br>Whenever equipped creature deals " + 
    "4 or more damage to an opponent, sacrifice Citrine Scepter, then create a token that's a copy of Citrine Medallion.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Citrine%20Scepter.png?v=1746749127195"
  },
  {
    name: "Glissa, the Trader",
    creator: "Radio Jade",
    type: ["Creature"],
    type2: ["Legendary", "Zombie", "Elf"], // subtypes and supertypes, as well as DFC
    mana: ["A", "K", "K"],
    colors: ["teal", "pink"], // write out color names here for clarity
    pt: [3, 3], // leave array empty if card does not have P/T
    rulesText: "First strike, lifelink <br>Whenever a nontoken creature an opponent controls and owns dies, you may donate a permanent " +
    "you control to that player. If you do, put that creature onto the battlefield under your control.",
    flavorText: "",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/Glissa%20the%20Trader.png?v=1746749128999"
  },
  {
    name: "The Ringleader",
    creator: "ThePixelFerret",
    type: ["Creature"],
    type2: ["Legendary", "Clown", "Warlock"], // subtypes and supertypes, as well as DFC
    mana: [3, "K", "K"],
    colors: ["pink"], // write out color names here for clarity
    pt: [3, 3], // leave array empty if card does not have P/T
    rulesText: "At the beginning of your upkeep, create a 1/1 Clown creature token, then each player may draw a card. <br>(2)(K)(K), (T): " +
    "Open an attraction. <br>Whenever an opponent draws a card other than the first card they draw during each of their draw steps, you may " +
    "visit one of your attractions.",
    flavorText: "\"All are welcome at my carnival. Come, laugh and dance.\"",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/The%20Ringleader.png?v=1746749130844"
  },
  {
    name: "The Ringleader's Tent",
    creator: "ThePixelFerret",
    type: ["Artifact", "Land"],
    type2: ["Legendary", "Carnival", "Attraction"], // subtypes and supertypes, as well as DFC
    mana: [],
    colors: ["colorless"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "You may put this card in your main deck. <br>The Ringleader's Tent enters the battlefield tapped. <br>Visit - Create a " +
    "1/1 pink Clown creature token, then put a +1/+1 counter on a creature you control.",
    flavorText: "Not many venture inside, but all who do leave with a smile on their face.",
    image: "https://cdn.glitch.global/7b568555-0956-486a-ba6c-74d510dc659f/The%20Ringleaders%20Tent.png?v=1746749132961"
  },
  {
    name: "Bouncer",
    creator: "Radio Jade",
    type: ["Creature"],
    type2: ["Bouncer"], // subtypes and supertypes, as well as DFC
    mana: [2, "O", "O"],
    colors: ["orange"], // write out color names here for clarity
    pt: [2, 5], // leave array empty if card does not have P/T
    rulesText: "Whenever a nontoken creature enters under an opponent's control, that player may pay (2). If they don't, create a Spring token. " +
    "This ability triggers only once each turn.",
    flavorText: "",
    image: "images/Bouncer.png"
  },
  {
    name: "Fried Remora",
    creator: "Radio Jade",
    type: ["Enchantment"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: ["L"],
    colors: ["yellow"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Cumulative Upkeep (1) <br>Whenever an opponent casts a noncreature spell, that player may pay (4). If they don't, exile the top " +
    "card of your library. You may play it until the end of your next turn.",
    flavorText: "",
    image: "images/FriedRemora.png"
  },
  {
    name: "A Moment's Rest",
    creator: "Vitral_",
    type: ["Instant"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: ["O"],
    colors: ["orange"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Prevent all damage that would be dealt this turn.",
    flavorText: "All are equal and all are safe in the water's edge.",
    image: "images/AMomentsRest.png"
  },
  {
    name: "Ratling Gunners",
    creator: "MunkeGutz",
    type: ["Creature"],
    type2: ["Rat", "Soldier"], // subtypes and supertypes, as well as DFC
    mana: ["L", "O"],
    colors: ["yellow", "orange"], // write out color names here for clarity
    pt: [2, 2], // leave array empty if card does not have P/T
    rulesText: "Cumulative Upkeep (L) or (O) <br>At the beginning of each end step and when Ratling Gunners dies, it deals X damage to target creature " +
    "you don't control chosen at random, where X is the number of counters on it.",
    flavorText: "",
    image: "images/RatlingGunners.png"
  },
  {
    name: "Voltage Viper",
    creator: "null",
    type: ["Creature"],
    type2: ["Snake"], // subtypes and supertypes, as well as DFC
    mana: ["L"],
    colors: ["yellow"], // write out color names here for clarity
    pt: [1, 1], // leave array empty if card does not have P/T
    rulesText: "When this creature enters, you get (E). <br>Exhaust - (E): This creature gains deathtouch until end of turn. <br>Exhaust - (E): This " +
    "creature gains first strike until end of turn.",
    flavorText: "",
    image: "images/VoltageViper.png"
  },
  {
    name: "Mudflat Man",
    creator: "Radio Jade",
    type: ["Land", "Creature"],
    type2: ["Legendary", "Mudflats", "Dwarf"], // subtypes and supertypes, as well as DFC
    mana: [],
    colors: ["brown"], // write out color names here for clarity
    pt: [2, 1], // leave array empty if card does not have P/T
    rulesText: "Mudflat Man enters tapped and exerted. <br>Trample",
    flavorText: "You are what you eat",
    image: "images/MudflatMan.png"
  },
  {
    name: "Chaotic Insight",
    creator: "Insert Name Here",
    type: ["Enchantment"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: [3, "L"],
    colors: ["yellow"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "If you would roll one or more dice, roll that many dice plus 1 instead and ignore one of the results. <br>At the beginning of your " +
    "upkeep, you may pay (1)(L). If you do, roll a six-sided die, then draw cards and lose life equal to the result.",
    flavorText: "",
    image: "images/ChaoticInsight.png"
  },
  {
    name: "Card Shark",
    creator: "null",
    type: ["Creature"],
    type2: ["Shark", "Gambler"], // subtypes and supertypes, as well as DFC
    mana: [1, "A"],
    colors: ["teal"], // write out color names here for clarity
    pt: [2, 1], // leave array empty if card does not have P/T
    rulesText: "When this creature enters, exile the top card of your library. Until end of turn, you may play that card. <br>Intimidate",
    flavorText: "",
    image: "images/CardShark.png"
  },
  {
    name: "Car Wash",
    creator: "null",
    type: ["Land"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: [],
    colors: ["colorless"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Car Wash enters tapped unless you control a Vehicle. <br>(T): Add (L) or (A) <br>(2)(L)(A), (T): Create a 3/2 colorless Vehicle " +
    "artifact token with crew 1.",
    flavorText: "",
    image: "images/CarWash.png"
  },
  {
    name: "Candybot",
    creator: "Insert Name Here",
    type: ["Artifact", "Creature"],
    type2: ["Robot", "Employee"], // subtypes and supertypes, as well as DFC
    mana: [1, "K"],
    colors: ["pink"], // write out color names here for clarity
    pt: [2, 3], // leave array empty if card does not have P/T
    rulesText: "When Candybot enters the battlefield and at the beginning of your upkeep, each player creates a Food token. <br>(K), (T), " +
    "sacrifice two Foods: Create a token that's a copy of Rock Candy Medallion.",
    flavorText: "",
    image: "images/Candybot.png"
  },
  {
    name: "Decaying Devourer",
    creator: "Radio Jade",
    type: ["Creature"],
    type2: ["Elemental", "Horror"], // subtypes and supertypes, as well as DFC
    mana: [1, "L", "L", "O", "O"],
    colors: ["yellow", "orange"], // write out color names here for clarity
    pt: [9, 4], // leave array empty if card does not have P/T
    rulesText: "Blitz (3)(L)(L)(O)(O) <br>Decayed, Annihilator 4",
    flavorText: "Its hunger is endless, its lifetime is not.",
    image: "images/DecayingDevourer.png"
  },
  {
    name: "Rot Fiend",
    creator: "Radio Jade",
    type: ["Creature"],
    type2: ["Goblin"], // subtypes and supertypes, as well as DFC
    mana: [1, "O/B"],
    colors: ["orange", "other"], // write out color names here for clarity
    pt: [2, 2], // leave array empty if card does not have P/T
    rulesText: "Rot Fiend enters with a +1/+1 counter for each mana produced by a Swamp used to cast it. <br>Menace",
    flavorText: "Empowered by the rotlands, it embodies that which we sought to leave behind.",
    image: "images/RotFiend.png"
  },
  {
    name: "Ferris Wheel",
    creator: "null",
    type: ["Land"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: [],
    colors: ["colorless"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Car Wash enters tapped unless an opponent gained life this turn. <br>(T): Add (K) or (L). <br>Exhaust - (3)(K)(L), (T): " +
    "Each player may discard their hand and draw five cards.",
    flavorText: "",
    image: "images/FerrisWheel.png"
  },
  {
    name: "Elder of the Order",
    creator: "null",
    type: ["Creature"],
    type2: ["Orc", "Monk"], // subtypes and supertypes, as well as DFC
    mana: ["O"],
    colors: ["orange"], // write out color names here for clarity
    pt: [2, 4], // leave array empty if card does not have P/T
    rulesText: "Cumulative upkeep - Put a -1/-1 counter on this creature. <br>Vigilance",
    flavorText: "The oldest and wisest of the Order are also often the first into battle",
    image: "images/ElderOfTheOrder.png"
  },
  {
    name: "Fossilize",
    creator: "Insert Name Here",
    type: ["Sorcery"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: [4, "N"],
    colors: ["brown"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "Exile target permanent with two or more abilities. Create a token that's a copy of Fossil Medallion.",
    flavorText: "",
    image: "images/Fossilize.png"
  },
  {
    name: "Electrospectre",
    creator: "MunkeGutz",
    type: ["Creature"],
    type2: ["Spirit", "Elemental"], // subtypes and supertypes, as well as DFC
    mana: ["L"],
    colors: ["yellow"], // write out color names here for clarity
    pt: [1, 1], // leave array empty if card does not have P/T
    rulesText: "First strike, haste <br>Voltage 4 - As long as you have 4 or more (E), Electrospectre gets +2/+1 and has trample.",
    flavorText: "",
    image: "images/Electrospectre.png"
  },
  {
    name: "Lightning Catchers",
    creator: "MunkeGutz",
    type: ["Creature"],
    type2: ["Human", "Wizard"], // subtypes and supertypes, as well as DFC
    mana: [1, "L"],
    colors: ["yellow"], // write out color names here for clarity
    pt: [1, 3], // leave array empty if card does not have P/T
    rulesText: "At the beginning of your upkeep, you get (E). <br>(E), (T): Add one mana of any color.",
    flavorText: "\"Only a fool would try to catch lightning in a bottle. That's why I brought a jar.\"",
    image: "images/LightningCatchers.png"
  },
  {
    name: "Dwarven Mage",
    creator: "MunkeGutz",
    type: ["Creature"],
    type2: ["Dwarf", "Wizard"], // subtypes and supertypes, as well as DFC
    mana: [2, "N", "N"],
    colors: ["brown"], // write out color names here for clarity
    pt: [3, 3], // leave array empty if card does not have P/T
    rulesText: "Non-wordy spells you cast cost (1) less to cast for each Dwarf you control.",
    flavorText: "Dwarven spells are always concise and always devastating.",
    image: "images/DwarvenMage.png"
  },
  {
    name: "Promotion",
    creator: "Vitral_",
    type: ["Instant"],
    type2: [], // subtypes and supertypes, as well as DFC
    mana: [2, "A", "A"],
    colors: ["teal"], // write out color names here for clarity
    pt: [], // leave array empty if card does not have P/T
    rulesText: "This spell costs (1)(A) less to cast if it targets an unblocked creature you control that dealt damage this turn. <br>Target creature you " +
    "control becomes a copy of target creature or creature card in a graveyard.",
    flavorText: "Mobility within the council is zero sum.",
    image: "images/Promotion.png"
  },
  {
    name: "Lunara, Patient Schemer",
    creator: "The Madwomen",
    type: ["Planeswalker"],
    type2: ["Legendary", "Lunara"], // subtypes and supertypes, as well as DFC
    mana: [3, "A", "A"],
    colors: ["teal"], // write out color names here for clarity
    pt: [-1, 7], // leave array empty if card does not have P/T
    rulesText: "(+2): Create two 2/2 Bird creature tokens with flying and \"Exhaust - Add (O) or (L).\" <br>(-3): Return target creature to its owner's hand. <br>" +
    "(-11): Each opponent reveals their hand. Put each creature card from it under your team's control.",
    flavorText: "",
    image: "images/LunaraPatientSchemer.png"
  },
  
  {
    name: "WIP - HIDE CARD",
    creator: "Insert Name Here",
    type: ["Artifact", "Creature"],
    type2: ["Work", "in", "Progress"], // subtypes and supertypes, as well as DFC
    mana: [6],
    colors: ["colorless"], // write out color names here for clarity
    pt: [6, 6], // leave array empty if card does not have P/T
    rulesText: "Trample",
    flavorText: "Alas, the inner workings of my creation are on display.",
    image: "go go power rangers"
  },
];

var nameInput = document.getElementById("name-input");
var mvFilter = document.getElementById("mv-select");
var mvInput = document.getElementById("mv-input");
var colorFilter = document.getElementById("color-select");
var colorInputs = {
  brown: document.getElementById("brown-check"),
  pink: document.getElementById("pink-check"),
  yellow: document.getElementById("yellow-check"),
  teal: document.getElementById("teal-check"),
  orange: document.getElementById("orange-check"),
  colorless: document.getElementById("colorless-check"),
  other: document.getElementById("other-color-check"),
};
var ptInputs = [
  document.getElementById("power-input"),
  document.getElementById("toughness-input"),
];
var typeFilter = document.getElementById("type-select");
var typeInput = document.getElementById("type-input");
var rtInput = document.getElementById("rt-input");
var ftInput = document.getElementById("ft-input");
var creatorInput = document.getElementById("creator-input");

var resultFrame = document.getElementById("frame-search-results");

var cardImgWidth = 100;
// auto resize card images based on initial display size:
if (screen.width >= 900) cardImgWidth = 150;
if (screen.width >= 1200) cardImgWidth = 200;
if (screen.width >= 1500) cardImgWidth = 250;
if (screen.width >= 1800) cardImgWidth = 300;
if (screen.width >= 2400) cardImgWidth = 400;
if (screen.width >= 3000) cardImgWidth = 500;

for (var i = 0; i < cards.length; i ++) {
  var nextCardHTML = '<div class="card-image">';
  var setWidth = cardImgWidth;
  if (cards[i].type2.includes("DFC")) setWidth *= 2;
  nextCardHTML += "<b>" + cards[i].name + "</b><br>by " + cards[i].creator;
  nextCardHTML += '<br><img src="' + cards[i].image + '" width="' + setWidth + '">';
  nextCardHTML += "</div>";
  
  resultFrame.innerHTML += nextCardHTML;
}

var cardImages = document.getElementsByClassName("card-image");

setInterval(updatePage, 100);

function updatePage() {
  for (var i = 0; i < cards.length; i ++) {
    var showCard = true;
    if (cards[i].name == "WIP - HIDE CARD") showCard = false; // debug safeguard for incomplete cards when the site is public
    if (nameInput.value != "") {
      if (!(cards[i].name.toLowerCase().includes(nameInput.value.toLowerCase()))) showCard = false;
    }
    if (showCard) { // process mana cost
      if ((mvFilter.value == "x") && !(cards[i].mana.includes("X"))) showCard = false;
      if ((mvInput.value != "") && showCard) {
        var numVal = parseInt(mvInput.value);
        if (cards[i].mana.includes("X") && !(mvFilter.value == "greater")) showCard = false;
        if (showCard) {
          if (cards[i].mana.length == 0) {
            if (!((mvFilter.value == "less") || (numVal <= 0))) showCard = false;
          } else {
            var cardMV = 0;
            for (var j = 0; j < cards[i].mana.length; j ++) {
              var sym = cards[i].mana[j];
              if ((typeof sym) == "number") cardMV += sym;
              else if (sym != "X") {
                if (sym[0] == "2") cardMV += 2;
                // add "else-if" for additional number hybrid symbols
                else cardMV ++;
              }
            }
            if ((mvFilter.value == "equal") && (cardMV != numVal)) showCard = false;
            if ((mvFilter.value == "less") && (cardMV > numVal)) showCard = false;
            if ((mvFilter.value == "greater") && (cardMV < numVal)) showCard = false;
          }
        }
      }
    }
    if (showCard) { // process colors
      var selectedColors = [];
      if (colorInputs.brown.checked) selectedColors.push("brown");
      if (colorInputs.pink.checked) selectedColors.push("pink");
      if (colorInputs.yellow.checked) selectedColors.push("yellow");
      if (colorInputs.teal.checked) selectedColors.push("teal");
      if (colorInputs.orange.checked) selectedColors.push("orange");
      if (colorInputs.colorless.checked) selectedColors.push("colorless");
      if (colorInputs.other.checked) selectedColors.push("other");

      if ((selectedColors.length > 0) && !(selectedColors.includes("colorless") && (colorFilter.value == "including"))) {
        // check to make sure any colors are being filtered; "includes colorless" is taken to imply all cards, for simplicity of code
        if (colorFilter.value == "equal") {
          for (var s of selectedColors) {
            if (!(cards[i].colors.includes(s))) showCard = false;
          }
          for (var s of cards[i].colors) {
            if (!(selectedColors.includes(s))) showCard = false;
          }
        }
        if (showCard) {
          var match = true;
          if (colorFilter.value == "excluding"){
            for (var s of selectedColors) {
              if (cards[i].colors.includes(s)) match = false;
            }
          }
          else {
            for (var s of selectedColors) {
              if (!(cards[i].colors.includes(s))) match = false;
            }
          }
          showCard = match;
        }
      }
    }
    if (showCard) { // process types
      var cardTypes = [];
      cardTypes.push(...(cards[i].type));
      cardTypes.push(...(cards[i].type2));
      // type and type2 are only separated to future-proof for search mechanics that care about subtypes
      var selectedTypes = [];
      if (typeInput.value != "") {
        selectedTypes = typeInput.value.split(" ");
        
        for (var j = 0; j < cardTypes.length; j ++) cardTypes[j] = cardTypes[j].toLowerCase();
        for (var k = 0; k < selectedTypes.length; k ++) selectedTypes[k] = selectedTypes[k].toLowerCase();
        
        if (typeFilter.value == "equal") {
          for (var s of selectedTypes) {
            if (!(cardTypes.includes(s))) showCard = false;
          }
          for (var s of cardTypes) {
            if (!(selectedTypes.includes(s))) showCard = false;
          }
        }
        if (showCard) {
          var match = true;
          if (typeFilter.value == "excluding"){
            for (var s of selectedTypes) {
              if (cardTypes.includes(s)) match = false;
            }
          }
          else {
            for (var s of selectedTypes) {
              if (!(cardTypes.includes(s))) match = false;
            }
          }
          showCard = match;
        }
      }
      // if no types are input, do not filter
    }
    if (showCard) { // process P/T
      if ((ptInputs[0].value != "") || (ptInputs[1].value != "")) {
        if (cards[i].pt.length <= 1) showCard = false;
        else {
          for (var j = 0; j < 2; j ++) if ((ptInputs[j].value != "") && (cards[i].pt[j] != parseInt(ptInputs[j].value))) showCard = false;
        }
      }
    }
    if (showCard) { // process rules text, flavor text, and creator
      if (rtInput.value != "") {
        if (!(cards[i].rulesText.toLowerCase().includes(rtInput.value.toLowerCase()))) showCard = false;
      }
      if (ftInput.value != "") {
        if (!(cards[i].flavorText.toLowerCase().includes(ftInput.value.toLowerCase()))) showCard = false;
      }
      if (creatorInput.value != "") {
        if (cards[i].creator.toLowerCase() != creatorInput.value.toLowerCase()) showCard = false;
      }
    }
    
    if (showCard && (cardImages[i].classList.contains("hide"))) cardImages[i].classList.remove("hide");
    else if (!showCard && !(cardImages[i].classList.contains("hide"))) cardImages[i].classList.add("hide");
  }
}
