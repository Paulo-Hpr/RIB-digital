let faultyBags =[]
let bagColors = document.getElementById("bagColors")
let listBag = document.getElementById("listBag")
let bagBrand = document.getElementById("bagBrand")
let bagTagNumber = document.getElementById("bagTagNumber")
let bagWeight = document.getElementById("bagWeight")
let btnAddBagProcess = document.getElementById("btnAddBagProcess")
let boxBagApp = document.getElementById("bag-app")

function getSelectedProcessBag(){
    const selectedRadio = document.querySelector('input[name="btnProcess"]:checked');
   return selectedRadio.value
}
document.querySelector('input[ atrb="dprArea"]:checked')

btnAddBagProcess.addEventListener('click',addBag)

function addBag() {
    const processTypeBag = getSelectedProcessBag()
    let bagInfo
    switch (processTypeBag) {
        case 'DPR':
            const selectedArea = document.querySelectorAll('input[atrb="dprArea"]:checked');
            dprArea = Array.from(selectedArea).map(el => el.id)

            const selectedLocal = document.querySelectorAll('input[atrb="dprLocal"]:checked');
            dprLocal = Array.from(selectedLocal).map(el => el.name)

            bagInfo = {
                aerea: dprArea,
                local: dprLocal
            }
            break;
            
        case 'PFR': 
            const pfrWeight = document.querySelector('input[atrb="pfrWeight"]').value;
            const pfrContent = document.querySelector('textarea[atrb="pfrContent"]').value;


            bagInfo = {
                missingWeight: pfrWeight,
                content: pfrContent
            }      
            break;

        case 'AHL': 
            const ahlCategory = Array.from(document.querySelectorAll('input[atrb="ahlCategory"]')).filter(input=> input.value.trim() != '' ).map(el => el.value);
            
            const ahlDescription = Array.from(document.querySelectorAll('input[atrb="ahlDescription"]')).filter(input=> input.value.trim() != '' ).map(el => el.value);
 

            bagInfo = {
                category: ahlCategory,
                description: ahlDescription
            }      
            break;
        default:
            break;
    }


    faultyBags.push({
        colors: `${bagColors.value}`,
        bagBrand: `${bagBrand.value}`,
        bagTagNumber: `${bagTagNumber.value}`,
        bagWeight: `${bagWeight.value}`,
        processBag: processTypeBag,
        bagInformation:bagInfo
    })

    listBagConstructor()

}

function listBagConstructor() {

    listBag.innerHTML=""
    faultyBags.forEach(e =>{
            const li = document.createElement("li")
            const imgBag = document.createElement("img")
            const currentBag = document.createElement("p")
            currentBag.textContent = `${e.processBag} - ${e.bagTagNumber}`
            li.className="listBag-itens"
            imgBag.className= "icon-list-bags"    
            
            imgBag.setAttribute('src',"./img/icons/bagagens.png")
        
           li.appendChild(imgBag)
           li.appendChild(currentBag)


            listBag.appendChild(li)
    })
}

function clearFields() {
    const fields = Array.from(boxBagApp.querySelectorAll('input')).filter(input=> input.value.trim() != '' )
    fields.forEach(el => el.value = '')
    console.log(fields)
}