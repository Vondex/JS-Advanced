function solve() {
  let text = document.getElementById("text").value;
  let naming = document.getElementById("naming-convention").value;
  const resultContainer = document.getElementById("result");

  const splitted = text.split(" ");

  let resultString = "";

  if (naming == 'Pascal Case'){

    for (i = 0; i < splitted.length; i++){
      resultString += splitted[i][0].toUpperCase() + 
      splitted[i].slice(1, splitted[i].length).toLowerCase();

    }

  } else if (naming == 'Camel Case'){

    resultString += splitted[0][0].toLowerCase() + 
    splitted[0].slice(1, splitted[0].length).toLowerCase();

    for (i = 1; i < splitted.length; i++){
      
      resultString += splitted[i][0].toUpperCase() + 
      splitted[i].slice(1, splitted[i].length).toLowerCase();

    }

  } else {
    resultContainer.textContent = "Error!";
    return;

  }
  resultContainer.textContent = resultString;

  
}