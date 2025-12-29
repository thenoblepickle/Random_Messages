//set up strings
const cyberpunkChaos = {
  subjects: [
    "The rogue AI", 
    "A caffeine-deprived intern", 
    "The neon-clad bounty hunter",
    "An ancient mechanical owl", 
    "The last surviving disco dancer", 
    "A sentient cloud of glitter",
    "The legendary street racer", 
    "A mysterious pizza delivery bot", 
    "The lead singer of a virtual band",
    "A grumpy time-traveler"
  ],
  verbs: [
    "accidentally hacked into", 
    "is currently daydreaming about", 
    "must immediately sabotage",
    "decided to overclock", 
    "is trying to explain the internet to", 
    "finally discovered the shortcut to",
    "wants to aggressively barter for", 
    "is legally required to dance with", 
    "secretly replaced the batteries in",
    "found a way to teleport"
  ],
  objects: [
    "the mainframe of a galactic bank", 
    "a mountain of expired energy drinks", 
    "the secret society of garden gnomes",
    "a floating city made of recycled plastic", 
    "the world's most powerful toaster", 
    "a black hole located in a laundromat",
    "the underground championships of rock-paper-scissors", 
    "a collection of rare, 21st-century memes",
    "the blueprints for a cardboard spaceship", 
    "a digital forest where it only rains binary"
  ]
};

const fantasyQuests = {
  subjects: [
    "A socially anxious dragon", "The knight in rusted armor", "A very confused wizard",
    "The ghost of a gourmet chef", "A sentient pile of gold", "The local village idiot",
    "A talking squirrel with a sword", "The last remaining unicorn"
  ],
  verbs: [
    "is currently questing for", "accidentally cursed", "tried to challenge",
    "is hiding from", "begged for mercy from", "stole the legendary map of",
    "forgot the true meaning of", "hired a mercenary to guard"
  ],
  objects: [
    "the bottomless pit of despair", "a very spicy phoenix egg", "the enchanted library of whispers",
    "a legendary talking shield", "the tavern's secret stash of ale", "a bridge guarded by a grumpy troll",
    "the forbidden forest of tickling", "a kingdom made entirely of cheese"
  ]
};

const corporateSatire = {
  subjects: [
    "The overworked HR manager", "A LinkedIn influencer", "The CEO's pet goldfish",
    "A broken espresso machine", "The middle-management team", "An unpaid summer intern",
    "The company's last working printer", "A freelance graphic designer"
  ],
  verbs: [
    "scheduled a meeting about", "sent a passive-aggressive email to", "accidentally CC'd the entire office on",
    "is trying to synergize with", "pivoted the strategy toward", "demanded a status update on",
    "spent the entire budget on", "is currently ghosting"
  ],
  objects: [
    "a stack of unread resumes", "the last slice of communal pizza", "a motivational poster of a cat",
    "the company’s dwindling stock price", "a spreadsheet with 500 errors", "the yearly performance review",
    "a virtual happy hour", "the office's only comfortable chair"
  ]
};

const gourmetDisasters = {
  subjects: [
    "A five-star celebrity chef", "The microwave in the breakroom", "A rogue food critic",
    "The local sourdough starter", "An experimental cooking robot", "The owner of a fusion taco truck",
    "A panicked line cook", "The secret ingredient"
  ],
  verbs: [
    "severely over-seasoned", "attempted to flambé", "mistook a brick for",
    "tried to ferment", "deep-fried a handful of", "refuses to acknowledge the existence of",
    "discovered a new way to burn", "replaced the salt with"
  ],
  objects: [
    "a bowl of artisanal cereal", "the world's soggiest sandwich", "a truffle-infused rubber boot",
    "a cake that looks like a shoe", "the customer's expectation of quality", "a lukewarm cup of decaf",
    "the secret recipe for instant water", "a mountain of glittery cupcakes"
  ]
};

//pick a random string
const pickRandom = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};

//generate message
const generateMessage = (subjects, verbs, objects) => {
    const subject = pickRandom(subjects);
    const verb = pickRandom(verbs);
    const object = pickRandom(objects);
    const message = `${subject} ${verb} ${object}.`;
    return message
};

console.log(generateMessage(subjects, verbs, objects));