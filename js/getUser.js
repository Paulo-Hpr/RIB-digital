let firstName = document.getElementById("user-name")
let familyName = document.getElementById("user-lastname")
let  cpf = document.getElementById("user-cpf")
let phone = document.getElementById("user-phone")
let email = document.getElementById("user-email")
let selectedCategory = document.querySelector('input[atrb="azulCategory"]:checked');
let rushAgreement = document.querySelector('input[name="agreement-rush"]:checked');
let generalData = {}
let iptCep = document.getElementById("ipt-cep")
let iptStreet = document.getElementById("ipt-street")
let iptDistrit = document.getElementById("ipt-distrit")
let iptCity = document.getElementById("ipt-city")
let iptState = document.getElementById("ipt-state")
let iptNumber = document.getElementById("ipt-number")
let iptComplement = document.getElementById("ipt-complement")
let locator = document.getElementById("locator")
let iptdate = document.getElementById("ipt-date")


let btnTerm = document.getElementById("btnTerm")
let btnComents = document.getElementById("btnComents")

btnTerm.addEventListener('click',printTerm)
btnComents.addEventListener('click',generatorComents)

function getAll() {
    // generalData = {}
    generalData = 
    {
        firstName:firstName.value,
        familyName:familyName.value,
        cpf: cpf.value,
        phone:phone.value,
        email:email.value,
        selectedCategory:selectedCategory,

        iptCep:iptCep.value,
        iptStreet:iptStreet.value,
        iptDistrit:iptDistrit.value,
        iptCity:iptCity.value,
        iptState:iptState.value,
        iptNumber:iptNumber.value,
        iptComplement:iptComplement.value,

        locator:locator.value,
        flghtRouter,
        faultyBags
    }

    
}


function printTerm() { 
    getAll()   
    sessionStorage.setItem("allData",JSON.stringify(generalData))
    window.open("./termorecebimento.html");
    }

function generatorComents() {
    getAll()   
    createList()
    // window.open("./coments.html");
}    