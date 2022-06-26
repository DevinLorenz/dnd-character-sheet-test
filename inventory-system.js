//Let's make a d&d Character Sheet!
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

let halfPlate = 5

let proficiencyBonus = 3
const initiative = dexterity





let backPack = [];
let satchel = [];
let equipped = [];

let clothes = `Traveller's Clothes`
let rations = 'Food Rations'
let weapon = 'Longsword'
let hPotion = 'Potion of Greater Healing'
let armor = `Half-Plate Armor`
let amulet = `Amulet of Osiris`

let armorClass = 10 + dexterity







let armorEquip = true
armorEquip = false
armorEquip = true

equipped.push(weapon,amulet,clothes)

if (armorEquip === true){
    equipped.unshift(armor)
} else if (armorEquip === false) {
    equipped.shift(armor)
}



if (armor === equipped[0]){
    armorClass += halfPlate
} else if (armor !== equipped[0]){
    armorClass = (10 + dexterity)
}










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

console.log(` Proficiency Bonus: +${proficiencyBonus}`)
console.log(`Initiative: +${initiative}    AC: ${armorClass}`)

console.log()
console.log(`----------------------------------------`)
console.log()






//Now lets push hPotion and rations to backpack.

backPack.push(rations , hPotion)

//Lets create a line that says how much space is being taken up in the backpack. Let's make the backpack only have space for 10 items.

let backPackSlots = backPack.length

//log the items in the backpack and how many items out of 10 there are.

console.log(`Backpack inventory: ${backPack}`)
    console.log(`Space: ${backPackSlots}/10`)
    
    
    
    
    
    
    
    
    
    //Now lets equip some items.
    
    
    
    let equippedSlots = equipped.length
    
   
    console.log()
    
    console.log(`Equipped: ${equipped}`)
    console.log(`Space: ${equippedSlots}/6`)

    console.log()
    console.log(`----------------------------------------`)
    console.log()




















console.log()
console.log(`----------------------------------------`)
console.log()

console.log(`You Attack! Roll to hit!`)
console.log()

let longSwordDamage = Math.floor((Math.random() * 10) + 1) + strength;
let longSwordAttack = Math.floor(((Math.random() * 20) + 1) + strength) + proficiencyBonus

if((longSwordAttack - 8) <= 1){
    console.log('Critical Failure!')
    console.log(`You fumble and drop your sword!`)   
} else if (longSwordAttack < 14){ 
    console.log(`You roll a ${longSwordAttack} to swing your sword and miss!`)
} else if(longSwordAttack > 27){
    console.log('Critical Hit!')
    console.log(`You do ${longSwordDamage * 2 - 5} points of critical slashing damage!`)
} else {    console.log(`You swing your sword with a ${longSwordAttack} to hit!`)
            console.log(`You do ${longSwordDamage} points of slashing damage!`)  
}



