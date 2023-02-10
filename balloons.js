function solve() {
  class Balloon {
    constructor(balloonColor, gasWeight) {
      this.color = balloonColor;
      this.gasWeight = gasWeight;
    }
  }
  class PartyBalloon extends Balloon {
    constructor(balloonColor, gasWeight, ribbonColor, ribbonLength) {
      super(balloonColor, gasWeight);
      this._ribbon = {
        color: ribbonColor,
        length: ribbonLength,
      };
    }
    get ribbon() {
      return this._ribbon;
    }
  }
  class BirthdayBalloon extends PartyBalloon {
    constructor(balloonColor, gasWeight, ribbonColor, ribbonLength, text) {
      super(balloonColor, gasWeight, ribbonColor, ribbonLength);
      this.text = text;
    }
    get text() {
      return this.text;
    }
  }
  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon
  }
}

let classes = solve();

let testBalloon = new classes.Balloon(

"yellow", 20.5);

let testPartyBalloon = new

classes.PartyBalloon("yellow", 20.5,

"red", 10.25);

let ribbon = testPartyBalloon.ribbon;

console.log(testBalloon);

console.log(testPartyBalloon);

console.log(ribbon);