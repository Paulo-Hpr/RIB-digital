

let allData = JSON.parse(sessionStorage.getItem("allData"))


let tagNumber = document.getElementById("tagNumber")
allData.faultyBags.forEach(el =>{
    tagNumber.innerText += " AD" + el.bagTagNumber + "/"
})

let flitghs = document.getElementById("flitghs")
 allData.flghtRouter.forEach(el =>{
    flitghs.innerText += " AD" + el.voo + "/"
})

let amountBag = document.getElementById("amountBag")
amountBag.innerText = allData.faultyBags.length

let date = document.getElementById("date")
let dateFLy =new Date(allData.flghtRouter[0].data)
const dia = String(dateFLy.getDate() +1).padStart(2, '0');
const mes = String(dateFLy.getMonth() + 1).padStart(2, '0'); // 
const ano = dateFLy.getFullYear();
date.innerText = `${dia}/${mes}/${ano}`;



let reservation = document.getElementById("reservation")
reservation.innerText = allData.locator

let nameClient = document.getElementById("nameClient")
nameClient.innerText = allData.firstName + " " + allData.familyName
