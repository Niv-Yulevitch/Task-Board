let myForm = document.getElementById('myForm');
let myTextNote = document.getElementById('formInput1');
let myDateNote = document.getElementById('formInput2');
let myTimeNote = document.getElementById('formInput3');
let myNotesDiv = document.getElementById('notes-div');

myTextNote.required = true;
myDateNote.required = true;

myForm.onsubmit = e => {
  e.preventDefault();

  if (!myTextNote.value || !myDateNote.value) {
    return false;
  }
  
  if (myTextNote.value.length < 1) {
  return false;
  }
  
  let details = {
    text: myTextNote.value,
    date: myDateNote.value,
    time: myTimeNote.value
  };
  
  details.id = makeNotes(details);
  saveData(details);

  return true;
};