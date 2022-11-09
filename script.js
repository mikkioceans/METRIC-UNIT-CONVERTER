let inputNumber = document.getElementById("number-input")
let lengthOutputP = document.querySelector(".length-output-p")
let volumeOutputP = document.querySelector(".volume-output-p")

let massOutputP = document.querySelector(".mass-output-p");

let convertBtn = document.querySelector(".convert-btn")



convertBtn.addEventListener("click", ()=>{
    lengthChecks();
    volumeChecks();
    massChecks();
    inputNumber.value = "";
})


function lengthChecks(){
    let number = inputNumber.value ;

    let metersToFeet = number * 3.28084;

    metersToFeet = metersToFeet.toFixed(3)
    
    let feetToMeters = number / 3.281;

    feetToMeters = feetToMeters.toFixed(3)
    
    lengthOutputP.innerHTML = `${number} meters = ${metersToFeet} feet | ${number} feet = ${feetToMeters} meters`
    
}


function volumeChecks(){
    let number = inputNumber.value;
    let liters = 0.264172 ;
    let gallons = 3.78541;

    let litreToGallons = number * liters;
    litreToGallons = litreToGallons.toFixed(3);
    
   
    let gallonsToLitres = number * gallons;
    gallonsToLitres = gallonsToLitres.toFixed(3)
    
    volumeOutputP.innerHTML = `${number} litres = ${litreToGallons} gallons | ${number} gallons = ${gallonsToLitres} litres`
    
}

const massChecks = () => {
    let number = inputNumber.value;
    let kgToPounds = number * 2.20462;
    kgToPounds = kgToPounds.toFixed(3);

    let poundsToKg = number * 0.453592  ;
    
    poundsToKg = poundsToKg.toFixed(3)
    massOutputP.textContent = `${number} kilos = ${kgToPounds} pounds | ${number} pounds = ${poundsToKg} kilos`
} 