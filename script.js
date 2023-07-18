$(document).ready(onReady);

// State Variables can be declared outside of the onReady
let playerAttackPoints = 100;
let enemyHitPoints = 100;

// created object of objects.  I tried with an array of objects, but it wasn't working as well for me when I wanted to access a specific object's value.  I'm sure I was missing something simple, but it was difficult for me to get it to work that way (and that's the most common data structure per lectures, so I'm sure there's a way without using specific index #s !)

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
    playerAttackPoints -= entangleAP; // subtracting from global variables when clicked
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
    if (playerAttackPoints < 0) { // not allowing AP or HP to go below 0
        playerAttackPoints = 0;
    }
    if (enemyHitPoints < 0) {
        enemyHitPoints = 0;
    }

    $('.ap-text').text(`${playerAttackPoints} AP`) 
    $('.hp-text').text(`${enemyHitPoints} HP`) // updating AP and HP bar text with global variable values

    setInterval(refreshHP, 1000) // re-loading the div and progress meter along with updating the HP every 1 second - very cool find!
    function refreshHP() {
        $('.hp-text').text(`${enemyHitPoints} HP`)
        $('#hp-meter').val(`${enemyHitPoints}`)
        if (enemyHitPoints >= 100) {
            enemyHitPoints = 100; // made it so it won't go above 100.  If I have > 100 it flickered around 100/101 maybe because of the interval and load timing not being exactly the same
        }
    }

    // console.log(playerAttackPoints)
    // console.log(enemyHitPoints)

    if (playerAttackPoints == 0) {
        $('.freaky-fungus').addClass('jump').removeClass('walk') // replaced classes so a different CSS style is applied
        $('.attack-btn').attr('disabled', true); // disabled the buttons, and added CSS style with disabled as well
    }
    if (enemyHitPoints == 0) {
        $('.freaky-fungus').addClass('dead').removeClass('walk')
    } else if (enemyHitPoints < 50) {
        setInterval(hpRegeneration, 1000); // HP regen for when HP is below 50
    }

    function hpRegeneration() {
        if (enemyHitPoints > 0) { // made it so it won't regen when at 0 HP
            enemyHitPoints++; // 1HP per hpRegeneration function run (every 1 sec)
        }
    }

    $('#ap-meter').val(`${playerAttackPoints}`) 
    $('#hp-meter').val(`${enemyHitPoints}`) // updating value of meters with global variable
}