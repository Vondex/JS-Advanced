class SummerCamp {
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, 
        "student": 300, 
        "collegian": 500};
        this.listOfParticipants = [];
    }
    registerParticipant (name, condition, money){
        if(!this.priceForTheCamp[condition]){
            throw new Error("Unsuccessful registration at the camp.");
        }
        let nameIndex = this.listOfParticipants.findIndex(a => a.name == name);
        if (nameIndex > -1){
            return `The ${name} is already registered at the camp.`
        }
        let partMoney = 0;
        if (condition == 'child') partMoney = 150;
        else if(condition == 'student') partMoney = 300;
        else if(condition == 'collegian') partMoney = 500;
        
        if (money < this.priceForTheCamp[money]){
            return `The money is not enough to pay the stay at the camp.`;
        } else {
            this.listOfParticipants.push({name, condition, power: 100, wins: 0});
            return `The ${name} was successfully registered.`
        }
    }

    unregisterParticipant(name){
        let nameIndex = this.listOfParticipants.findIndex(a => a.name == name);
        if (nameIndex == -1){
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        else {
            this.listOfParticipants.splice(nameIndex, 1)
            return `The ${name} removed successfully.`
        }
    }
    timeToPlay (typeOfGame, participant1, participant2){


    }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));

console.log(summerCamp.unregisterParticipant("Petar Petarson"));



