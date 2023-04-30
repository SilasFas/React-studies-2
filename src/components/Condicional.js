import { useState } from "react"



export const Condicional = () => {

    const [email, setEmail] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const eviarEmail = (event) => {
        event.preventDefault()
        setUserEmail(email)
    }

    const limparEmail = () => {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre seu e-mail: </h2>
            <form>
                <input type="email" name="email" id="email" onChange={(event) => setEmail(event.target.value)} />
                <button type="submit" onClick={eviarEmail} >Enviar email</button>
            </form>
            {userEmail && (
                <div>
                    <p>O e-mail: do usuário é: {userEmail} </p>
                    <button onClick={limparEmail} >Limpar e-mail</button>
                </div>
            )}
        </div>
    )
}