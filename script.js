
const a = document.querySelectorAll(".image-icon");

a.forEach(element => {


  element.addEventListener("click", (e) => {

    if (element.src.slice(-8) == "plus.png")
    {
    
        element.setAttribute('src', 'image/minus.png');
    }
    else
    {
        element.setAttribute('src', 'image/plus.png');

    }
    


  }



  );
 



});


