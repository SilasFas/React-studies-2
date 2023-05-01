export const Saudacao = ({ nome }) => {

    const gerarSaudacao = (algumNome) => {
        return `Olá ${algumNome}, tudo bem! `
    }

    return (
        <>
            {nome && <p> {gerarSaudacao(nome)}</p>}
        </>
    )
} 