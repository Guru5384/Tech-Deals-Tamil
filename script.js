window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }

    const scrollBtn = document.getElementById("scrollTop");

    if(scrollBtn){

        window.addEventListener("scroll", function(){

            if(window.scrollY > 200){
                scrollBtn.style.display = "block";
            }else{
                scrollBtn.style.display = "none";
            }

        });

        scrollBtn.onclick = function(){
            window.scrollTo({
                top:0,
                behavior:"smooth"
            });
        };
    }

});