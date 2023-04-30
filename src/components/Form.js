export const Form = () => {

    const cadastraUsuario = (event) => {
        event.preventDefault()
        console.log('cadastrou o usuário')
    }

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastraUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )

} 