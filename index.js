
    Hello = (val) => {
      alert("Hello"+val);
    }
        for(var i=0;i<10;i++)
        {
            console.log(i);
        }
    function myFunction() {
      document.getElementById("demo").innerHTML = "Paragraph changed.";
    
    }
    
    var d=new Date();
    function date()
    {
        alert(d);
    }

var hello;

hello = function() {
  document.getElementById("demo").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", hello);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);

