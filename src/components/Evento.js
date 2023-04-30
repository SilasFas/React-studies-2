import { Button } from "./evento/Button"

export const Evento = () => {

    const meuEvento = () => {
        console.log(`Ativando primeiro evento!`)        
    }

    // const segundoEvento = () => {
    //     console.log('Ativando o segundo evento')
    // }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text='Primeiro evento' />
            <Button event={() => console.log('Ativando o segundo evento')} text='Segundo evento evento' />
        </div>
    )
}