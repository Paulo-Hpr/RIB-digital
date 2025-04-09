let sections = document.getElementsByClassName('body-forms');
let bodyApp = document.querySelector('.body-rib-app');
let bagProcess = document.getElementsByClassName('bagProcess');
let listMenu = document.querySelectorAll('.elements-menu');
let listBagMenu = document.querySelectorAll('.btn-bag');
let btnstart= document.getElementById('btn-start')
let btnUser= document.getElementById('btnUser')
let btnHome= document.getElementById('btnHome')
let btnAdress= document.getElementById('btnAdress')
let btnFlight= document.getElementById('btnFlight')
let btnBag= document.getElementById('btnBag')
let btnAgreement= document.getElementById('btnAgreement')
let btnPrintl= document.getElementById('btnPrintl')
let btnAhl= document.getElementById('ahl')
let btnDpr= document.getElementById('dpr')
let btnPfr= document.getElementById('pfr')

listMenu.forEach( function(event){
  event.addEventListener('click', showSection)
});
listBagMenu.forEach( function(event){
  event.addEventListener('click', controlShowProcess)
});

btnstart.addEventListener('click', showSection)


 function showSection() {
   let indx = this.getAttribute('data-idx')
   bodyApp.classList.remove("display-visibl")
   // Oculta todas as seções
   for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
      listMenu[i].classList.remove("el-menu-slctd")
    }
    // Exibe apenas a seção com o ID correspondente
    if (indx == 0) {
      bodyApp.classList.add("display-visibl")
    }
    sections[indx].style.display = 'block';
    listMenu[indx].classList.add("el-menu-slctd")


  }

 function controlShowProcess() {
  let idx = this.getAttribute('data-value')
    for (var i = 0; i < bagProcess.length; i++) {
      bagProcess[i].style.display = 'none';
    }
    bagProcess[idx].style.display = 'block';
  }



  function logout(){
    let indx = this.getAttribute('data-idx')
    console.log(indx)
    
  }
