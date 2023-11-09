import '../scss/style.css'

const clickMe = document.getElementById("clickMe");
clickMe.addEventListener("click", myButton); 

function myButton() {
  console.log("Du klickade på knappen");
}


myButton = (e) => {
  console.log(e.target); 
  e.target.clasName = "red";
  } 

 clickMe.addEventListener("click", () => {

    let myOtherInput = document.getElementById("myOtherInput").value;
    let myInput = document.getElementById("myInput").value;
    let newText = document.getElementById("newText");

    newText.innerHTML = parseInt(myInput) + parseInt(myOtherInput);
  
  });
  
  
  const resetButton = document.getElementById("resetButton");

  resetButton.addEventListener("click", ()=> {
    newText.innerHTML = 0;
  })
  

   



  
  
   




  
