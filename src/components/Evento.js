export const Evento = ({ numero }) => {

    const meuEvento = () => {
        console.log(`Número ${numero} foi ativado`)
    }


    return (
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento} >Ativar!</button>
        </div>
    )
}