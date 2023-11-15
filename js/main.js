//==================Exercise #1 ==========//
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords(string, names) {
    // matches were found
    let foundMatch = false;

    // Convert to lowercase matching
    const lowercaseString = string.toLowerCase();

    // Loop through the dog names
    for (let i = 0; i < names.length; i++) {
        // Convert name to lowercase 
        const lowercaseName = names[i].toLowerCase();

        // Check if the lowercase name exists in the lowercase string
        if (lowercaseString.includes(lowercaseName)) {
            console.log(`Matched ${names[i]}`);
            foundMatch = true; // Set foundMatch to true since a match was found
        }
    }

    // If no matches were found, print "No Matches"
    if (!foundMatch) {
        console.log("No Matches");
    }
}

findWords(dog_string, dog_names);


//============Exercise #2 ============//
function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr.splice(i, 1, "even index");
        }
    }
}

let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
replaceEvens(arr);

console.log(arr); 


















