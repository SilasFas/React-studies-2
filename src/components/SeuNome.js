export const SeuNome = ({ setNome }) => {
    return (<div>
        <p>Digite seu nome:</p>
        <input
            type="text"
            placeholder="Qual é o seu nome?"
            onChange={(event) => setNome(event.target.value)}
        />
    </div>)
}