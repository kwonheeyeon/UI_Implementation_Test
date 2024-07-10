const applyButton = document.querySelector("#applyButton");

applyButton.addEventListener("click", function(e){
  const width = Number(document.querySelector("#width").value);
  const height = Number(document.querySelector("#height").value);
  const fontSize = document.querySelector("#fontSize").value;
  const fontWeights = document.querySelectorAll(".fontWeight");
  const fontColor = document.querySelector("#fontColor").value;
  const backgroundColor = document.querySelector("#backgroundColor").value;
  const rowAligns = document.querySelectorAll(".rowAlign");
  const colAligns = document.querySelectorAll(".colAlign");
  const outputString = document.querySelector("#outputString").value;

  const box = document.querySelector("#box");
  const font = document.querySelector("#font");

  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.style.backgroundColor = backgroundColor;

  font.innerText = outputString;

  font.style.fontSize = `${fontSize}px`;
  font.style.color = fontColor;


  if(fontWeights[0].checked == true){
    font.style.fontWeight = "normal";
  }else if(fontWeights[1].checked == true){
    font.style.fontWeight = "bold";
  }

  if(rowAligns[0].checked == true){
    box.style.justifyContent = "flex-start";
  }else if(rowAligns[1].checked == true){
    box.style.justifyContent = "center";
  }else if(rowAligns[2].checked == true){
    box.style.justifyContent = "flex-end";
  }

  if(colAligns[0].checked == true){
    box.style.alignItems = "flex-start";
  }else if(colAligns[1].checked == true){
    box.style.alignItems = "center";
  }else if(colAligns[2].checked == true){
    box.style.alignItems = "flex-end";
  }


})