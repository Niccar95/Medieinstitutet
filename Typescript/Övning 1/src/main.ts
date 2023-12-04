import '../src/style.css'

const clickMe = document.getElementById("clickMe");
clickMe?.addEventListener("click", myButton); 

function myButton() {
  console.log("Du klickade på knappen");
}


 clickMe?.addEventListener("click", () => {

    let myOtherInput = document.getElementById("myOtherInput") as HTMLInputElement;
    let myInput = document.getElementById("myInput") as HTMLInputElement;
    let newText = document.getElementById("newText");

   

    if(newText) {

      newText.innerHTML = (parseInt(myInput.value) + parseInt(myOtherInput.value)).toString();
    }
  
  });
  
  
  const resetButton = document.getElementById("resetButton");
  let resetText = document.getElementById("newText");


  resetButton?.addEventListener("click", ()=> {
    if (resetText) {

      resetText.innerHTML = "0";
      
    }
    
  })
  

   
