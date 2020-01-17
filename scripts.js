addEventListener("load", function(){
        document.main.addEventListener("wheel", function(e){
                e.preventDefault();
                document.body.scrollLeft+=e.deltaY<0 ? -200 : 200
        }, false);
}, false);