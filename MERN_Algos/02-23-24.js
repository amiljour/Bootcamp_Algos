/*
  Given an array of ailments, and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

// RIOT

const medications = [
  {
    name: "Sulforaphane",
    treatableSymptoms: [
      "dementia",
      "alzheimer's",
      "inflammation",
      "neuropathy",
    ],
  },
  {
    name: "Longvida Curcumin",
    treatableSymptoms: [
      "pain",
      "inflammation",
      "depression",
      "arthritis",
      "anxiety",
    ],
  },
  {
    name: "Hericium erinaceus",
    treatableSymptoms: ["anxiety", "cognitive decline", "depression"],
  },
  {
    name: "Nicotinamide mononucleotide",
    treatableSymptoms: [
      "ageing",
      "low NAD",
      "obesity",
      "mitochondrial myopathy",
      "diabetes",
    ],
  },
  {
    name: "PainAssassinator",
    treatableSymptoms: [
      "pain",
      "inflammation",
      "cramps",
      "headache",
      "toothache",
      "back pain",
      "fever",
    ],
  },
];

/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

// HINTS:
// Loop through first array to check the medicine
// then loop through second array to see if the symptoms match the inputted symptoms
// if they match add them into a new array at the end return array
// edge case if no matches return null

function webMD(ailments, meds) {
  // create a counter
  let medicationThatTreatsTheBestCounter = 0
  // create an array for the medication that treats the best
  let medicationThatTreatsTheBest = []
  // create a forEach loop to go over each of the meds 
  meds.forEach(medication => {
    // create a counter for the current med
    let treatCount = 0 
      // create a forEach loop for the ailments
      ailments.forEach(ailment => {
        // create an if statement that checks of medication has the treatableSymptoms in the ailment and if so rase treat count by one for each time it is true
        if (medication.treatableSymptoms.includes(ailment)){
          treatCount++
        }
      })
      // create an if statement that checks if the current meds treatCount is > then the current medicationThatTreatsTheBestCounter
      if (treatCount > medicationThatTreatsTheBestCounter){
        // if true change the medicationThatTreatsTheBestCounter to now be the treatCount
        medicationThatTreatsTheBestCounter = treatCount
        // add the current medication to the medicationThatTreatsTheBest
        medicationThatTreatsTheBest = [medication.name]
      }
      // check if the treatCount is equal to the medicationThatTreatsTheBestCounter and that it is no 0
      else if (treatCount === medicationThatTreatsTheBestCounter && treatCount !== 0){
        // if that check passes then push the medication as well to have multiple
        medicationThatTreatsTheBest.push(medication.name)
      }
    })
  return medicationThatTreatsTheBest
}

console.log(webMD(["pain"], medications));
console.log(webMD(["pain", "inflammation", "depression"], medications));
console.log(webMD(["existential dread"], medications));






  // // create a newArr
  // let newArr = [];
  // // create a counter
  // let counter = 0;
  // // create a for loop for the meds to go through each medication and what they treat
  // for (let i = 0; i < meds.length; i++) {
  //   for (let x = 0; x < ailments.length; x++) {
  //     for (let y = 0; y < meds[i].treatableSymptoms.length; y++) {
  //       if (meds[i].treatableSymptoms[y] === ailments[x]) {
  //         counter++;
  //       }
  //     }
  //   }
  // }
  // loop through the ailments list
  // for each ailments loop through treatable symptoms that incudes
  // if includes add to counter for each for symptom
  // push to newArr if treatable symptom matches the expected
  // return the newArr

