const Deletebtn = document.querySelector('#Delete');

    Deletebtn.addEventListener('click', (event) => {

        event.preventDefault();

         let Userconform = confirm("Are you sure you want to delete this listings?");

         if(Userconform){
            let form = Deletebtn.closest('form');
            if(form){
                form.submit();
            }else{
                console.log('form Not found');
            }
         }else{
            alert("Deletion cancelled.");
         }
});
