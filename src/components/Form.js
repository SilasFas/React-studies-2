import { useState } from "react"

export const Form = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const cadastraUsuario = (event) => {
        event.preventDefault()
        console.log('cadastrou o usuário')
        console.log(`Usuario: ${name} e senha: ${password}`)
    }

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastraUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        type="text"
                        placeholder="Digite o seu nome"
                        name="name"
                        id="name"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input
                        type="password"
                        placeholder="Digite o seu nome"
                        name="password"
                        id="password"
                        onChange={(event) => setPassword(event.target.value)}
                    />

                </div>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    )
} 