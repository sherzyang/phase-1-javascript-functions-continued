// code your solution here

function saturdayFun(string = "roller-skate") {
    return `This Saturday, I want to ${string}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(String="*") {
    return function (word="special") {
      return `You are ${String}${word}${String}!`;
    };
  }
  