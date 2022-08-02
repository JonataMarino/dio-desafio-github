/* function soma(a: number, b: number){
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

//type IAnimal = {
//    nome: string;
//    tipo: 'terrestre' | 'aquático';
//    executarRugido(alturaEmDecibeis: number): void;
//}


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
} */

/* const input = document.getElementById('input') as HTMLInputElement;
//input.value
input.addEventListener('input', (event)=> {
const i = event.currentTarget as HTMLInputElement;
console.log(i.value)
    //console.log(event.currentTarget. );
}) */

//Generic types

/* function adicionaApendiceALista(array, valor){
    return array.map(item => item + valor);
}


adicionaApendiceALista([1, 2, 3], 1) */

/* function adicionaApendiceALista<NaoSei>(array: any[], valor: NaoSei){
    return array.map(item => item + valor);
}


adicionaApendiceALista([1, 2, 3], 1); */

/* function adicionaApendiceALista<T>(array: any[], valor: T){
    return array.map(item => item + valor);
}


adicionaApendiceALista(['A', 'B', 'C'], 'd'); */

/* function adicionaApendiceALista<T>(array: T[], valor: T){
    return array.map(() => valor);
}


adicionaApendiceALista(['A', 'B', 'C'], 'd'); */

/* interface IUsuario {
    id: string,
    email: string,
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor',
} 

function redirecione(usuario: IUsuario | IAdmin) {
if('cargo' in usuario) {
    //redirecionar para a área de administração

}

//redirecionar para a área de usuário
} */
/* 
function adicionaApendiceALista<T>(array: T[], valor: T){
    return array.map(() => valor);
} */


/* adicionaApendiceALista(['A', 'B', 'C'], 'd'); */

/* interface IUsuario {
    id: string,
    email: string,
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario',
}

function redirecione(usuario: IUsuario) {
if('cargo' in usuario) {
    //redirecionar para a área de administração

}

//redirecionar para a área de usuário
}   */

/* interface IUsuario {
    id: string,
    email: string,
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario',
}

function redirecione(usuario: IUsuario) {
if(usuario.cargo) {
//redirecionar(usuario.cargo)
}

//redirecionar para a área do usuário

}   */




/* interface ICachorro{
    nome: string,
    idade: number,
    parqueFavorito?: string,
}

type CachorroSomenteLeitura = {
    +readonly [K in keyof ICachorro]-?: ICachorro[K]
}


class  meuCachorro implements CachorroSomenteLeitura  {
    nome = 'Pandora';
    idade = 8;
    parqueFavorito = 'Lago';

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new meuCachorro('Padora', 8); */

/* import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('chamou nova função')
    }
});

$('body').novaFuncao(); */

//export const numero = 2;

interface IPessoa{
    nome: string,
    idade: number,
    nacionalidade: string;
}

interface IBrasileiro extends Omit<IPessoa, 'nacionalidade'>{


}

const Brasileiro: IBrasileiro {
    
}