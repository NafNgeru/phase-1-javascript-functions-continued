// code your solution here
function saturdayFun(activity1 = "roller-skate"){
    return `This Saturday, I want to ${activity1}!`;
}
saturdayFun();
saturdayFun("bathe my dog")
console.log(saturdayFun())
console.log(saturdayFun("bathe my dog"))




function mondayWork(activity2 = "go to the office"){
    return `This Monday, I will ${activity2}.`;
}

mondayWork();
mondayWork("work from home")
console.log(mondayWork());
console.log(mondayWork("work from home"));



function wrapAdjective(activity3 = "*"){
    function x (y = "special"){
        return `You are ${activity3}${y}${activity3}!`
    }
    return x;
}

const promptWrapAdjective = wrapAdjective("!!")
console.log(promptWrapAdjective("a dedicated programmer"));


