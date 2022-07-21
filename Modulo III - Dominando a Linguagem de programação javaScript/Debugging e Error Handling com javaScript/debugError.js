function validaArray(array, num){
    try{
        if(!array && !num) throw new ReferenceError('Envie os parâmetros!');
    
        if(typeof array != 'object') throw new TypeError ('Array precisa ser do tipo object');
    
        if(typeof num != 'number') throw new TypeError ('Num precisa ser do tipo number!');
    
        if (array.length !== num) throw new RangeError ('Tamanho inválido!');

        return array;
        }catch (e) {
        if (e instanceof ReferenceError) {
            console.log('parâmetros não enviados!');
            console.log(e.message);
        }else if (e instanceof TypeError){
            console.log('Tipos de parâmetros inválidos!');
            console.log(e.message);
        }else if (e instanceof RangeError){
            console.log('Erro na declaração do range do array!');
            console.log(e.message);
        }else{
            console.log("tipo de erro não esperado" + e);
        }
        }
}

console.log(validaArray([1, 2, 3, 4, 5], 5));