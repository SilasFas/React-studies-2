import PropTypes from 'prop-types'

export const Item = ({ marca, ano_lancamento }) => {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.proptype = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}