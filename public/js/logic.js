let taxSwitch = document.getElementById("flexSwitchCheckDefault");
let tax_info = document.querySelectorAll(".tax-info");
let tax_toggle = document.querySelector('.tax-toggle');


taxSwitch.addEventListener('click', (event) => {

  tax_info.forEach((list) => {
     if(list.style.display != 'inline'){
      list.style.display = 'inline';
     }else{
      list.style.display = 'none';
     }
    // list.classList.toggle('tax-info-update');
  });
});



const filter = document.querySelectorAll('.filter');
filter.forEach((icon) => {
    icon.addEventListener('click', ()=> { 
   let ptext = icon.querySelector('p').textContent;
  window.location.href = `http://localhost:8080/listings/category/`+encodeURIComponent(ptext);
  });
  
});


