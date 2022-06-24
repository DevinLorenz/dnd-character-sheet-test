//I am going to make arrays that correspond with three different inventory spaces: Equipped, Backpack, Satchel.

let heroName = `Vaal'Vahn`
const characterClass = 'Fighter'
let level = 5
let subClass = 'Champion'
const race = 'Elf'

const strength = 5
const dexterity = 2
const constitution = 5
const intellegence = 1
const wisdom = 2
const charisma = -1

const initiative = dexterity
const armorClass = 10 + dexterity + 5


let backPack = [];
let satchel = [];
let equipped = [];

let clothes = `Traveller's Clothes`
let rations = 'Food Rations'
let weapon = 'Longsword'
let potion = 'Potion of Greater Healing'
let armor = `Half-Plate Armor`
let amulet = `Amulet of Osiris`

//Logging character information.
console.log()
console.log(`Character: ${heroName}`)
console.log(`Level ${level} ${race} ${characterClass} - ${subClass}`)
console.log()


console.log()
console.log('Ability Scores:')

console.log()
console.log(`    Strength: 20 | +${strength}`)
console.log(`   Dexterity: 15 | +${dexterity}`)
console.log(`Constitution: 20 | +${constitution}`)
console.log(`Intellegence: 12 | +${intellegence}`)
console.log(`      Wisdom: 14 | +${wisdom}`)
console.log(`     Charisma: 9 | ${charisma}`)


console.log()
console.log()
console.log(`Initiative: +${initiative}    AC:${armorClass}`)
console.log()
console.log(`----------------------------------------`)

//good. now lets push potions and rations to backpack.

backPack.push(rations , potion)

//Lets create a line that says how much space is being taken up.

let backPackSlots = backPack.length

//Lets console log the items in the backpack and how many items out of 10 there are.
console.log()
console.log(`Backpack inventory: ${backPack}`)
console.log(`Space: ${backPackSlots}/10`)

//Now lets equip some items.

equipped.push(weapon,amulet,armor,clothes)

let equippedSlots = equipped.length

console.log()
console.log(`Equipped: ${equipped}`)
console.log(`Space: ${equippedSlots}/6`)