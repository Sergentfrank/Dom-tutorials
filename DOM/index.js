function grab (){
    a = document.getElementsByName("gender")[1];
    console.log(a);
    a.remove();
}
    let a = document.createElement("main");
    a.innerHTML = "<p> this is Dom text frank</p>";
    document.body.appendChild(a);
