window.onload = function() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    
    
    button1.addEventListener("click", function(event){
        alert("Clicked!");
    });

    button2.addEventListener("click", function(event){
        const newP = document.createElement("p");
        const allP = document.getElementsByTagName('p')
        newP.innerText = "[ Paragraph #" + allP.length + ": ] A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).";
        document.getElementById("information").appendChild(newP);
    });

    button3.addEventListener("click", function(event){
        const allP = document.getElementsByTagName('p')
        document.getElementById("information").removeChild(allP[allP.length-1])  
    });

}
