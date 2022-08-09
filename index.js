// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(special='*') {
    const innerFunction = function(msg) {
        if (special === '*') {
            msg = 'a hard worker'
        } else if (special === '||') {
            msg = 'a dedicated programmer'
        }
        return `You are ${special}${msg}${special}!`;
    }
    return innerFunction;
}
