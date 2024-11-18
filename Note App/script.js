const inputBox = document.querySelector(".input");
const addButton = document.querySelector(".addBtn");
const errorMessage = document.querySelector(".error-message-text");
const listWrapper = document.querySelector(".notes-list-wrapper");

function createNewNoteItem(text) {
  const li = document.createElement("li");
  const p = document.createElement("p");

  p.textContent = text;
  li.appendChild(p);

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add("btn", "editBtn");
  li.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("btn", "deleteBtn");
  li.appendChild(deleteButton);

  return li;
}

function saveNoteToStorage(text) {
  let notelist;

  if (localStorage.getItem("notes") === null) {
    notelist = [];
  } else {
    notelist = JSON.parse(localStorage.getItem("notes"));
  }
  notelist.push(text);
  localStorage.setItem("notes", JSON.stringify(notelist));
}

function fetchAllNotes() {
  let noteList;
  if (localStorage.getItem("notes") === null) {
    noteList = [];
  } else {
    noteList = JSON.parse(localStorage.getItem("notes"));

    noteList.forEach((noteItem) => {
      const extractLi = createNewNoteItem(noteItem);
      listWrapper.appendChild(extractLi);
    });
  }

  console.log(noteList);
}

function addNewNote() {
  const extractInputText = inputBox.value.trim();
  if (extractInputText.length <= 0) {
    errorMessage.textContent = "Please input a text";
    inputBox.style.border = "5px solid red";
    return false;
  }

  const createNote = createNewNoteItem(extractInputText);
  listWrapper.appendChild(createNote);
  inputBox.value = "";

  saveNoteToStorage(extractInputText);

  console.log(extractInputText);
  console.log(createNote);
}

function handleDeleteNotes(currentNote) {
  let notesList;
  if (localStorage.getItem("notes") === null) {
    notesList = [];
  } else {
    notesList = JSON.parse(localStorage.getItem("notes"));
  }

  let currentNoteText = currentNote.children[0].innerHTML;
  let index = notesList.indexOf(currentNoteText);

  notesList.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesList));
}

function handleEditOrDeleteNote(event) {
  console.log(event.target.previousElementSibling, event.target.innerHTML);

  if (event.target.innerHTML === "Delete") {
    listWrapper.removeChild(event.target.parentElement);
    handleDeleteNotes(event.target.parentElement);

    console.log(event.target.parentElement);
  }

  if (event.target.innerHTML === "Edit") {
    console.log(event.target.previousElementSibling.innerHTML);
    inputBox.value = event.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addButton.innerText = "Edit Note";
    currentEditedNote = event;
  }
}

document.addEventListener("DOMContentLoaded", fetchAllNotes);
addButton.addEventListener("click", addNewNote);
listWrapper.addEventListener("click", handleEditOrDeleteNote);
