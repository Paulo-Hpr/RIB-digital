// let allData = JSON.parse(sessionStorage.getItem("allData"))

let caseComents = document.getElementById("case-coments")
let caseList = document.getElementById("caseList")

function createList() {
    caseList.innerHTML=''
    const p = document.createElement("p")
    const p2 = document.createElement("p")
    p.textContent = "Incidente(s) registrado(s) no momento do desembarque:"
    caseList.appendChild(p)

    generalData.faultyBags.forEach(el => {

        createItensList(
        el.bagTagNumber,
        el.processBag,
        el.Agreement
        )

    })
    p2.textContent = "Cliente informado dos prazos das tratativas e atualizações das ocorrências"
    caseList.appendChild(p2)
}

function createItensList(tagNum,process,agreement) {
    const li = document.createElement("li")
    li.textContent = `* Etiqueta: AD${tagNum} - ${process} - ${agreement}`
   return caseList.appendChild(li)
}
