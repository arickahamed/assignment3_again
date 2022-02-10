

// 1. convert a value of kilometer to meter--------------------------
const kilometerToMeter = (valueInKilometer) => {
    if(valueInKilometer >= 0) {
        // we know, 1 kilometer = 1000 meter
        const result = valueInKilometer * 1000;
        return result; 
        // console.log(result);
    } else {
        alert("please enter the positive value!");
        // console.log("please enter the positive value!");
    }
};
// kilometerToMeter(-5);


// 2. calculate some budget of users ------------------------
const budgetCalculator = (watchQuantity, mobileQuantity, laptopQuantity) => {
    if(watchQuantity >=0 && mobileQuantity >=0 && laptopQuantity >= 0) {
        const watchCost = watchQuantity * 50;
        const mobileCost = mobileQuantity * 100;
        const laptopCost = laptopQuantity * 500;
        const finalCost = watchCost + mobileCost + laptopCost;
        return finalCost;
        // console.log(finalCost);
    } else {
        alert('please enter the positive value!');
        // console.log("please enter the positive value!");
    }
};
// budgetCalculator(2,4,1);


// 3. calculate the money for staying at a hotel --------------
const hotelCost = (dayNum) => {
    if(dayNum > 0 && dayNum <=10) {
        const totalCost = dayNum * 100;
        return totalCost;
        // console.log(totalCost);
    } else if(dayNum > 10 && dayNum <= 20) {
        const tenDayCost = 1000;
        const restDayCost = (dayNum - 10) * 80;
        const totalCost = tenDayCost + restDayCost;
        return totalCost;
        // console.log(totalCost);
    } else if(dayNum > 20) {
        const twentyDayCost = 1000 + 800;
        const restDayCost = (dayNum - 20) * 50;
        const totalCost = twentyDayCost + restDayCost;
        return totalCost;
        // console.log(totalCost);
    }else {
        alert("please enter the positive value!");
        // console.log('please enter the positive value!');
    }
};
// hotelCost(-5);


// 4. find out the largest string from an array -----------------
const megaFriend = (friendsName) => {
    let largestName = "";
    let largestNameLength = 0;
    for(let friendName of friendsName) {
        const friendNameLength = friendName.length;
        if(friendNameLength > largestNameLength) {
            largestNameLength = friendNameLength;
            largestName = friendName;
        }
    }
    return largestName;
    // console.log(largestNameLength);
    // console.log(largestName);
} ;

// const friendsName = ["arick", "jodu", "modhu", "karim", "shahinur", "ali", "ahsanuzzaman", "foysal"]; 
// megaFriend(friendsName);