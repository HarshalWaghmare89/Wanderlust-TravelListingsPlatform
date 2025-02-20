const search = document.querySelector('.navbar-nav .d-flex .search-bar');

search.addEventListener('focus',(event)=> {
 search.classList.add('search');
});

search.addEventListener('blur', () => {
  search.classList.remove('search');
})



const btn = document.querySelector('.search-btn');

btn.addEventListener('click', (event) => {
 event.preventDefault();
  const query = search.value.trim();
  if(query){
    window.location.href = `/listings/search?q=${query}`;
    search.value = "";
  }else{
    console.log('search query not found');
  }
});