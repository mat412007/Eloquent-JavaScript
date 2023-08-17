function countChar(palabra, letra) {
    let counter = 0;
    for(let i = 0; i < palabra.length; i++){
      if(palabra[i] == letra){
        counter += 1;
      }    
    }
    return counter;
  }
  
  console.log(countChar("BBCCB", "C"));