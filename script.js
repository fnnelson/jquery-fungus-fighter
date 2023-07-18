$(document).ready(onReady);

// State Variables can be declared outside of the onReady
let playerAttackPoints = 100;
let enemyHitPoints = 100;

const playerAttacks = {
    arcaneScepter: {
        APcost: 12,
        HPdamage: 14
    },
    entangle: {
        APcost: 23,
        HPdamage: 9
    },
    dragonBlade: {
        APcost: 38,
        HPdamage: 47
    },
    starFire: {
        APcost: 33,
        HPdamage: 25
    }
};

// function onReady() {
//     $('.attack-btn').on('click', handleAttack)
// }
// function handleAttack() {
//     let whichAttack = $(this).attr('class');
//     console.log('this attack in handleAttack:', whichAttack)
// }  
// Note: Noah was working on something like this which looked cool as a way to only use one handle function for all attacks and pull the class through the $(this) button, though I decided to stick to the long-form method I started with for now as I wasn't sure how to only use one of the 2 classes pulled from this method.

function onReady() {
    // console.log('in onReady!')
    $('.arcane-scepter').on('click', handleArcaneScepter)
    $('.entangle').on('click', handleEntangle)
    $('.dragon-blade').on('click', handleDragonBlade)
    $('.star-fire').on('click', handleStarFire)



    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function handleArcaneScepter() {
    // console.log('in Arcane Scepter!')
    let arcaneAP = playerAttacks.arcaneScepter.APcost;
    let arcaneAttack = playerAttacks.arcaneScepter.HPdamage;
    // console.log('AP Usage:', arcaneAP);
    // console.log('Attacks for:', arcaneAttack);
    playerAttackPoints -= arcaneAP;
    enemyHitPoints -= arcaneAttack;
    console.log('current playerAttackPoints:', playerAttackPoints);
}

function handleEntangle() {
    let entangleAP = playerAttacks.entangle.APcost;
    let entangleAttack = playerAttacks.entangle.HPdamage;
    playerAttackPoints -= entangleAP;
    enemyHitPoints -= entangleAttack;
    console.log('current playerAttackPoints:', playerAttackPoints);
}

function handleDragonBlade() {
    let dragonBladeAP = playerAttacks.dragonBlade.APcost;
    let dragonBladeAttack = playerAttacks.dragonBlade.HPdamage;
    playerAttackPoints -= dragonBladeAP;
    enemyHitPoints -= dragonBladeAttack;
    console.log('current playerAttackPoints:', playerAttackPoints);
}

function handleStarFire() {
    let starFireAP = playerAttacks.starFire.APcost;
    let starFireAttack = playerAttacks.starFire.HPdamage;
    playerAttackPoints -= starFireAP;
    enemyHitPoints -= starFireAttack;
    console.log('current playerAttackPoints:', playerAttackPoints);
}
