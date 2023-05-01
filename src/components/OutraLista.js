export const OutraLista = ({ itens }) => {

    return (
        <>
            <h2>Listas de Coisas Boas</h2>
            {itens.length > 0 ? (
                itens.map((item, key) => (
                    <p key={key}>{item}</p>
                ))): (
                    <p>Não há itens na lista</p>
                )}
        </>
    )
}