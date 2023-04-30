import { Item } from "./Item"

export const List = () => {
    return (
        <>
            <h1>minha Lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1985} />
                <Item marca='Fiat' ano_lancamento={1964} />
                <Item marca='Renault' />
                <Item marca='Chevrolet' ano_lancamento={2002} />
                <Item />
            </ul>
        </>
    )
}