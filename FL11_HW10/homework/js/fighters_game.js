class Fighter {
    constructor (combatant) {
        this.getName = () => combatant.name;
        this.getDamage = () => combatant.damage;
        this.getAgility = () => combatant.agility;
        this.getHealth = () => combatant.hp;

        this.wins = 0;
        this.loses = 0;

        this.addWin = () => ++this.wins;
        this.addLoss = () => ++this.loses;

        this.heal = HPs => {
            let health = this.getHealth();
            combatant.hp += HPs;
            if (combatant.hp > health) {
                combatant.hp = health;
            }
        };

        this.dealDamage = damage => {
            combatant.hp -= damage;
            if (combatant.hp < 0) {
                combatant.hp = 0
            }
        };
    }

    attack(Fighter) {
        let randomAgility = 100;
        if (Math.random() * randomAgility < randomAgility - Fighter.getAgility()) {
            Fighter.dealDamage(this.getDamage());
            console.log( `${this.getName()} make ${this.getDamage()} damage to ` +
                `${Fighter.getName()}.${Fighter.getName()} hp: ${Fighter.getHealth()} `);
        } else {
            console.log(`${Fighter.getName()} attack missed`)
        }
    };

    logCombatHistory() {
        console.log(`Name: ${this.getName()}, Wins: ${this.wins}, Loses: ${this.loses}`);
    };
}

function battle (fighter1, fighter2) {
    while (fighter1.getHealth() > 0 || fighter2.getHealth() > 0) {
        if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter1.attack(fighter2);
        }
        if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter2.attack(fighter1);
        }
        if (fighter1.getHealth() <= 0) {
            fighter1.addLoss();
            fighter2.addWin();

            console.log(`${fighter2.getName()} win. ${fighter1.getName()} is dead.`);
            break;
        } else if (fighter2.getHealth() <= 0) {
            fighter1.addWin();
            fighter2.addLoss();

            console.log(`${fighter1.getName()} win. ${fighter2.getName()} is dead.`);
            break;
        }
    }
}

const firstCombatant = new Fighter({name: `John`, damage: 20, agility: 25, hp: 100});
const secondCombatant = new Fighter({name: `Jim`, damage: 10, agility: 40, hp: 120});
battle(firstCombatant, secondCombatant);
