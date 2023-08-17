function isEven(n) {
    if(n == 0){
        return true;
    } 
    else if(n == 1){
        return false;
    }  
    else if (n < 0){
       return isEven(-n); //Esto niega el negado al hacer - - = +
    } 
    else{
        return isEven(n - 2); //Esto hace un bucle hasta llegar al 1 o al 0(condiciones de arriba)
    } 
  }

  console.log(isEven(50));