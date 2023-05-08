const getData = () => {
  let myNoteData = localStorage.getItem("myNoteData");
  
  if (!myNoteData) {
    return [];
  }

  myNoteData = JSON.parse(myNoteData);
  return myNoteData;
};
  
const loadDataFromLocalStorage = () => {
  let data = getData();
  if (data) {
    Array.from(data).forEach(note => {
      makeNotes(note);
    });
  }
};