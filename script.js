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
// Note: Noah was working on something like this which looked cool as a way to only use one handle function for all attacks and pull the class through the $(this) button, though I decided to stick to the long-form method I started with for now as I wasn't sure how to only use one of the 2 classes pulled from this method.  I think he said he was switching his 2nd classes to ID's to make it work which makes sense to grab just that one button's ID.

function onReady() {
    // console.log('in onReady!')
    $('.arcane-scepter').on('click', handleArcaneScepter)
    $('.entangle').on('click', handleEntangle)
    $('.dragon-blade').on('click', handleDragonBlade)
    $('.star-fire').on('click', handleStarFire)
}

//------------- Handlers

function handleArcaneScepter() {
    // console.log('in Arcane Scepter!')
    let arcaneAP = playerAttacks.arcaneScepter.APcost;
    let arcaneAttack = playerAttacks.arcaneScepter.HPdamage;
    // console.log('AP Usage:', arcaneAP);
    // console.log('Attacks for:', arcaneAttack);
    playerAttackPoints -= arcaneAP;
    enemyHitPoints -= arcaneAttack;
    // console.log('current playerAttackPoints:', playerAttackPoints);

    render();
}

function handleEntangle() {
    let entangleAP = playerAttacks.entangle.APcost;
    let entangleAttack = playerAttacks.entangle.HPdamage;
    playerAttackPoints -= entangleAP;
    enemyHitPoints -= entangleAttack;

    render();
}

function handleDragonBlade() {
    let dragonBladeAP = playerAttacks.dragonBlade.APcost;
    let dragonBladeAttack = playerAttacks.dragonBlade.HPdamage;
    playerAttackPoints -= dragonBladeAP;
    enemyHitPoints -= dragonBladeAttack;

    render();
}

function handleStarFire() {
    let starFireAP = playerAttacks.starFire.APcost;
    let starFireAttack = playerAttacks.starFire.HPdamage;
    playerAttackPoints -= starFireAP;
    enemyHitPoints -= starFireAttack;

    render();
}


//------------ Rendering

function render() {
    if (playerAttackPoints < 0) {
        playerAttackPoints = 0;
    }
    if (enemyHitPoints < 0) {
        enemyHitPoints = 0;
    }
    $('.ap-text').text(`${playerAttackPoints} AP`)
    $('.hp-text').text(`${enemyHitPoints} HP`)
    console.log(playerAttackPoints)

    if (playerAttackPoints == 0) {
        $('.freaky-fungus').addClass('jump').removeClass('walk')
        $('.attack-btn').attr('disabled', true);
    }
    if (enemyHitPoints == 0) {
        $('.freaky-fungus').addClass('dead').removeClass('walk')
    }
}