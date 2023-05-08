const saveData = details => {
  let previousData = getData();
  
  previousData.push(details);

  localStorage.setItem("myNoteData", JSON.stringify(previousData));
};