export const Pessoa = ({ nome, idade, profissao, foto }) => {
    return (
        <div>

            <h2>Nome: {nome} </h2>
            <p>Idade: {idade} </p>
            <p>Profissão: {profissao} </p>
            <img src={foto} alt={nome} />
        </div>
    )
}

// export const Pessoa = (props) => {
//     return (
//         <div>

//             <h2>Nome: {props.nome} </h2>
//             <p>Idade: {props.idade} </p>
//             <p>Profissão: {props.profissao} </p>
//             <img src={props.foto} alt={props.nome} />
//         </div>
//     )
// }