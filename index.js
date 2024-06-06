#! /usr/bin/env node
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name:"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your Opponent",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        let asak = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do",
                choices: ["Attack", "Drink Portion", "Run for your life"]
            }
        ]);
        if (asak.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fule is ${p1.fuel}`);
                console.log(`${o1.name} fule is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose. better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fule is ${p1.fuel}`);
                console.log(`${o1.name} fule is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("you win");
                    process.exit();
                }
            }
            if (asak.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(`You drink health protion your fuel is ${p1.fuel}`);
            }
            if (asak.opt == "Run for youur life") {
                console.log("You loose, better luck next time");
                process.exit();
            }
        }
    }
    //Alien
    if (opponent.select == "Alien") {
        let asak = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do",
                choices: ["Attack", "Drink Portion", "Run for your life"]
            }
        ]);
        if (asak.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fule is ${p1.fuel}`);
                console.log(`${o1.name} fule is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose. better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fule is ${p1.fuel}`);
                console.log(`${o1.name} fule is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("you win");
                    process.exit();
                }
            }
            if (asak.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(`You drink health protion your fuel is ${p1.fuel}`);
            }
            if (asak.opt == "Run for youur life") {
                console.log("You loose, better luck next time");
                process.exit();
            }
        }
    }
    //zombies
    if (opponent.select == "Zombie") {
        let asak = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do",
                choices: ["Attack", "Drink Portion", "Run for your life"]
            }
        ]);
        if (asak.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fule is ${p1.fuel}`);
                console.log(`${o1.name} fule is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose. better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fule is ${p1.fuel}`);
                console.log(`${o1.name} fule is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("you win");
                    process.exit();
                }
            }
            if (asak.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(`You drink health protion your fuel is ${p1.fuel}`);
            }
            if (asak.opt == "Run for youur life") {
                console.log("You loose, better luck next time");
                process.exit();
            }
        }
    }
} while (true);
