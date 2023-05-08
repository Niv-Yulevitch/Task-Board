const makeNotes = details => {
  let noteDiv = document.createElement('div');
  let noteText = document.createElement('p');
  let noteDate = document.createElement('p');
  let btnClose = document.createElement('button');
    
  noteDiv.id = details.id ? details.id : "Note_" + Date.now();

  noteDiv.style.backgroundImage = 'url(../HTML/Images/notebg.png';
  noteDiv.style.backgroundRepeat = 'no-repeat';
  noteDiv.style.margin = '15px';
  noteDiv.style.height = '250px';
  noteDiv.style.width = '200px';
  noteDiv.style.float = 'left';
  noteDiv.className = "text-center w3-container w3-center w3-animate-opacity noteDiv";

  btnClose.style.float = 'right';
  btnClose.style.backgroundColor = 'transparent';
  btnClose.style.border = 'none';
  btnClose.style.marginRight = '5px';
  btnClose.style.marginTop = '18px';
  btnClose.style.height = '20px';
  btnClose.style.display = 'none';
  btnClose.className = 'glyphicon glyphicon-remove-sign';
  btnClose.setAttribute('aria-hidden', 'true');
  btnClose.type = 'reset';

  noteText.style.marginTop = '38px';
  noteText.style.height = '138px';
  noteText.style.width = '150px';
  noteText.style.overflow = 'auto';
  noteText.style.overflowX = 'hidden';
  noteText.style.position = 'relative'
    

  noteDate.style.textAlign = 'left';
  noteDate.style.width = '77px'
  noteDate.style.marginLeft = '10px';
  noteDate.style.fontSize = '11px';
  noteDate.style.fontWeight = 'bold';
    
  noteText.innerText = `${details.text}`;
  noteDate.innerText = `${details.date} ${details.time}`;
    
  noteDiv.onmouseenter = () => {
    btnClose.style.display = 'block';
  }

  noteDiv.onmouseleave = () => {
    btnClose.style.display = 'none';
  }

  btnClose.onclick = event => {
    deleteData(event.target.parentElement.id);
    event.target.parentElement.remove();
  };
  
  noteDiv.appendChild(btnClose);
  noteDiv.appendChild(noteText);
  noteDiv.appendChild(noteDate);
  myNotesDiv.appendChild(noteDiv);

  return noteDiv.id;
};