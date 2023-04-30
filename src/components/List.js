import { Item } from "./Item"

export const List = () => {
    return (
        <>
            <h1>minha Lista</h1>
            <ul>
                <Item marca='Ferrari'/>
                <Item marca='Fiat'/>
                <Item marca='Renault'/>
            </ul>
        </>
    )
}