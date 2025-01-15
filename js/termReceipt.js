

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
date.innerText = allData.flghtRouter[0].data


let reservation = document.getElementById("reservation")
reservation.innerText = allData.locator

let nameClient = document.getElementById("nameClient")
nameClient.innerText = allData.firstName + " " + allData.familyName

window.print()