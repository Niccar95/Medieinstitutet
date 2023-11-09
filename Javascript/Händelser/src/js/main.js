const comment = document.getElementById("text");

comment.innerHTML = "Hej";

comment.className = "red";

const divTag = document.createElement("div");

const container = document.getElementById("container");

container.appendChild(divTag);

divTag.id = "Yellow";


const secondComment = document.getElementById("secondText");

secondComment.innerHTML = "<b>Hej då!</b>";

