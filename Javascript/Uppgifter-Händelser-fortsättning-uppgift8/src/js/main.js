import '../scss/style.css'

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  let input = document.getElementById("textBox").value;
  let result = document.getElementById("result");

  result.innerHTML = parseInt(input);

  if (result.innerHTML > 100) {
    alert("Det var ett stort tal!");
  }

  else {
    alert("Det var ett litet tal!");
  }

})

 


