const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', function(event){
    // when we scroll, turn nav bar bg color to white

    const scrolledY = window.pageYOffset;

    if(scrolledY > 0){
        navBar.classList.add('bg-white');
        navBar.classList.remove('bg-transparent');
        
        
    }else{
        navBar.classList.remove('bg-white');
        navBar.classList.add('bg-transparent');
    }
    


})



// when return to top positio, change nav bg color to transparent