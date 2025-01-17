let allData = JSON.parse(sessionStorage.getItem("allData"))


let textComents = document.getElementById("textComents")
    faultyBags.forEach(el => {
        switch (el.processBag) {
            case "AHL":
                let numbertagAHL
                numbertagAHL += el.bagTagNumber + " "
                textComents.value += "Incidente de ausência de bagagem no momento do desembarque. Etiqueta nº "+ numbertagAHL +". Foi orientado sobre os procedimentos de rastreio e solicitado endereço para entrega, caso a bagagem seja localizada. Informado que será atualizado sobre o status assim que possível "
                break;
            case "DPR":
                let numbertagDPR
                numbertagDPR += el.bagTagNumber + " "
                textComents.value += `<br></br>` + "Incidente de danificação de bagagem no momento do desembarque. Etiqueta nº "+ numbertagDPR +". Foi orientado sobre os procedimentos de rastreio e solicitado endereço para entrega, caso a bagagem seja localizada. Informado que será atualizado sobre o status assim que possívelste"
                break;
         
            default:
                break;
         }
    });