function soma(a: number, b: number){
    return a+b;
}

// types
// interface


interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean,
   // executarRugido(alturaEmDecibeis: number): void;
}

/*type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;
}*/


interface IFelino extends IAnimal{
    visaoNoturna: boolean,
}

interface ICanino extends IAnimal{
     porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
   porte: 'medio',
    tipo: 'terrestre',
    visaoNoturna: false,    
}

// interface ICanino extends IAnimal{
//     porte: 'pequeno' | 'medio' | 'grande';
// }

// type IDomestico = IFelino & ICanino;

// const animal: IDomestico = {
//     domestico: true,
//     nome: 'cachorro',
//     porte: 'medio',
//     tipo: 'terrestre',
//     visaoNoturna: true,
    
// }

//const animal : IAnimal = {
  //  nome: 'Elefante',
 // tipo: 'terrestre',
 //   domestico: false,
   // executarRugido: (alturaEmDecibeis)=>(`${alturaEmDecibeis}dB`)

//}


const felino : IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    domestico: false,
    //executarRugido: (alturaEmDecibeis)=>(`${alturaEmDecibeis}dB`)
}

