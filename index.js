/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let volumnConv = document.getElementById("volumn-conv")
let lengthConv = document.getElementById("length-conv")
let massConv = document.getElementById("mass-conv")
let inputData = document.getElementById("input-data")

function convert() {
    let input = inputData.value
    
    //length conversion
    mToF = input * 3.281
    fToM = input * (1 / 3.281)
    lengthConv.textContent = `${input} meters = ${mToF.toFixed(3)} feets | ${input} feets = ${fToM.toFixed(3)} meters`
    
    //volumn conversion
    lToG = input * 0.264
    gToL = input * (1 / 0.264)
    volumnConv.textContent = `${input} liters = ${lToG.toFixed(3)} gallons | ${input} liters = ${gToL.toFixed(3)} gallons`
    
    //mass conversion
    kgToP = input * 2.204
    pToKg = input * (1 / 2.204)
    massConv.textContent = `${input} kilogram = ${kgToP.toFixed(3)} pounds | ${input} pounds = ${pToKg.toFixed(3)} kilogram`
}