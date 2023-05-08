const deleteData = detailsID => {
  let previousData = getData();  
  for (let i = 0; i < previousData.length; i++) {
    if (previousData[i].id === detailsID) {
      previousData.splice(i, 1);
      break;
    }
  }

  previousData = JSON.stringify(previousData);
  localStorage.setItem("myNoteData", previousData);
};

const deleteAllDataFromLocalStorage = () => {
  localStorage.clear();
  location.reload();
}