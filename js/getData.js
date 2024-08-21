let name = document.getElementById("user-name")
let familyName = document.getElementById("user-lastname")
let phone = document.getElementById("user-phone")
let email = document.getElementById("user-email")
let  cpf = document.getElementById("user-cpf")
let divCaseDataFly = document.querySelector('.case-data-flight')
let listFlight = document.querySelector('.listFlight')
let btnAddBag = document.querySelector('.btn-add-bag')
let caseBtn = document.getElementById("case-btn")
let textError = document.getElementById("text-list-error")
let destiny = document.querySelector(".destiny")
let flghtRouter =[ {i:1},{e:1},{e:1} ]
let voo
let data
let origem
let destino

            const btnRemove = document.createElement("button")
            btnRemove.className="box-forms case-btnRemove"
            const IconBtnRemove = document.createElement("img")
            IconBtnRemove.className="btn-remove-bag"
            IconBtnRemove.setAttribute("src","./img/icons/cancel.png")
            IconBtnRemove.setAttribute("action","remove")
            btnRemove.appendChild(IconBtnRemove)



divCaseDataFly.addEventListener('click', addFlight)
btnRemove.addEventListener('click', removeFlight)


function addFlight(e) {
    const tagAction= e.target.getAttribute("action")
    if (tagAction !== "add") return
    if (flghtRouter.length < 4) {

    const [...inputs] = e.currentTarget.firstElementChild.getElementsByClassName('general-input')
    
    if(inputs.some((el=>{return el.value === undefined || el.value =="" }))) return textError.classList.add("ipt-error")

    inputs.forEach(el => {
    
         const tagName= el.getAttribute("name")
         if (tagName === "flight"){ return voo = el.value} 
         if (tagName === "date"){   return data = el.value} 
         if (tagName === "origin"){ return origem = el.value} 
         if (tagName === "destiny"){return destino = el.value} 
     
     
    });

    flghtRouter.push({
        voo: `${voo}`,
        data: `${data}`,
        origem: `${origem}`,
        destino: `${destino}`

    })

    inputs.forEach(el =>{
        const tagName= el.getAttribute("name")
        if (tagName === 'origin') {
             el.value = destino
        }else{el.value = ""}
        
    })

    listFlightconstructor()
    
    textError.classList.remove("ipt-error")
    }
}


function listFlightconstructor() {

    listFlight.innerHTML=""
    flghtRouter.forEach(e =>{
            const li = document.createElement("li")
            const lbFly = document.createElement("label")
            const lbDate = document.createElement("label")
            const lbOrigin = document.createElement("label")
            const lbDestiny = document.createElement("label")
                
            const divFly = document.createElement("div")
            const divDate = document.createElement("div")
            const divOrigin = document.createElement("div")
            const divDestiny = document.createElement("div")
        
            li.className="itenList"
            divFly.className= "box-forms"
            divDate.className= "box-forms"
            divOrigin.className= "box-forms"
            divDestiny.className= "box-forms"
  
        
            lbFly.className= "lb-input"
            lbDate.className= "lb-input"
            lbOrigin.className= "lb-input"
            lbDestiny.className= "lb-input"

            lbFly.textContent=`${e.voo}`
            lbDate.textContent=`${e.data}`
            lbOrigin.textContent=`${e.origem}`
            lbDestiny.textContent=`${e.destino}`
           
           divFly.appendChild(lbFly)
           divDate.appendChild(lbDate)
           divOrigin.appendChild(lbOrigin)
           divDestiny.appendChild(lbDestiny)
        
           
           li.appendChild(divFly)
           li.appendChild(divDate)
           li.appendChild(divOrigin)
           li.appendChild(divDestiny)



            li.appendChild(btnRemove)
           listFlight.appendChild(li)
    })
}


function removeFlight(e) {
    const tagAction= e.target.getAttribute("action")
    if (tagAction !== "remove") return

        flghtRouter.pop()
        listFlightconstructor()

    
}




