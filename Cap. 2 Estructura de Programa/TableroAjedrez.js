let fila = '';
let tamaño = 8;
for(let i = 0; i < tamaño/2; i++){
    fila += '# ';
}
for(let j = 0; j < tamaño; j++){
    if(j % 2 == 0){
        console.log(' ' + fila);
    }
    else{
        console.log(fila);
    }
}