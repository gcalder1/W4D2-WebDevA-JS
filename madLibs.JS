const timeOfDay = "bright morning";

const mathResult = 5 * 5;

const booleanValue = timeOfDay.includes("morning");

const pirateReference = {
    rank: "captain",
    vessel: "The Black Pearl",
    aim: "mysterious chest"
}

const story = `One ${timeOfDay}, I set sail on a pirate ship named 
${pirateReference.vessel}. The endless sea stretched endlessly before us. 
${booleanValue ? "Since it was morning, it was easy to see across the sea thanks to the daylight." 
: "Since it was the evening, myself and my crew used our torches to light up the way."}
Just then, we spotted a ${pirateReference.aim} floating in the water. 
'Could it be treasure?' the ${pirateReference.rank} exclaimed. We hauled it aboard and 
opened it. Did you know 5 × 5 equals ${mathResult}? Incredible, right?`;

document.getElementById("madlibs-output").textContent = story;

console.log(story);

//checking to see if I set up the variables correctly
// console.log(timeOfDay);
// console.log(mathResult);
// console.log(booleanValue);
// console.log(pirateReference);