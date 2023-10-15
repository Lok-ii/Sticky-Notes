let addNote = document.querySelector(".add");
let note = document.querySelector("#inputArea");
let lowerContainer = document.querySelector(".lowerContainer");
let text = document.querySelector(".note-text");
let color = document.querySelector("input");
let noNotes = document.querySelector(".no-notes");


let colorValue = "#000000";
color.addEventListener("input", ()=>{
    colorValue = color.value;
});
addNote.addEventListener("click", (event)=>{
    if(note.value == ""){
        alert('Please enter some text to add to the note');
    }else{

        newElement();
        note.value = "";
        noNotes.style.display = "none";
    }
})

function newElement(){
    let newDiv = document.createElement("div");
    newDiv.classList.add("newElement");
    newDiv.innerHTML = `<p class="note-text"></p>
    <button class="del">x</button>`;
    lowerContainer.appendChild(newDiv);
    lowerContainer.lastElementChild.firstChild.innerText = note.value;
    if(colorValue != "#000000" && colorValue != "#000"){
        newDiv.style.backgroundColor = colorValue;
    }else{
        lowerContainer.lastElementChild.firstChild.style.color = "#ffffff";
        newDiv.style.backgroundColor = colorValue;
    }

    lowerContainer.lastElementChild.lastChild.addEventListener("click", (e)=>{
        e.target.parentElement.remove();
        if(lowerContainer.childElementCount < 2){
            noNotes.style.display = "block";
        }
    });

    
}


