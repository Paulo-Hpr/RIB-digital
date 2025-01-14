

let allData = JSON.parse(sessionStorage.getItem("allData"))
console.log(allData)  

let tagNumber = document.getElementById("tagNumber")
allData.faultyBags.forEach(el =>{
    console.log(el.bagTagNumber)
    tagNumber.innerText += " AD" + el.bagTagNumber + "/"
})

let flitghs = document.getElementById("flitghs")
 allData.flghtRouter.forEach(el =>{
    console.log(el.voo)
    flitghs.innerText += " AD" + el.voo + "/"
})

let amountBag = document.getElementById("amountBag")
amountBag.innerText = allData.faultyBags.length

let date = document.getElementById("date")
let data = allData.flghtRouter[0].data


let reservation = document.getElementById("reservation")
reservation.innerText = allData.locator

let nameClient = document.getElementById("nameClient")
nameClient.innerText = allData.firstName + " " + allData.familyName






function goScript() {
let allData = JSON.parse(sessionStorage.getItem("allData"))
console.log(allData)  

}

function termGenerator() {
    let nameClient = generalData.firstName + " " + generalData.familyName
    let numbersTags 
    generalData.faultyBags.forEach(el => {
        console.log(el.bagTagNumber)  
        return numbersTags = el.bagTagNumber
    }); 
    console.log(numbersTags)  
}

// generalData = 
//     {
//         firstName:firstName.value,
//         familyName:familyName.value,
//         flghtRouter,
//         locator,
//         faultyBags
//     }