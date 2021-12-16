// Dota2 Heroes

function Alchemist() {
// Default Alchemist Stats
    var stats = {
        health: 200,
        mana: 75,
        armor: 2,
        damage: 33,
        movement: 305
    }
    console.log('This is Default Alchemist Stats')
    console.log("Stats:",stats)

// Update Alchemist Stats for damage(reduced from 33 to 30)
    stats.damage = 30
    console.log('New Update for Alchemist Stats in Patch 7.01!')
    console.log('Damage reduced','from',33,'to', stats.damage)
    console.log("New Stats",stats)
}

Alchemist()