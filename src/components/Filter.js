import React from "react"
import styled from "styled-components"

const FilterContainer = styled.div`
    border: 1px solid black;
    padding: 8px;
`

const InputContainer = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
`

class Filter extends React.Component {
    render() {
        return (
            <FilterContainer>
                 <h3>Filtros</h3>
                <InputContainer>
                    Valor Mínimo:
                    <input type='number' value={this.props.minFilter} />
                </InputContainer>
                
                <InputContainer>
                    Valor Máximo:
                    <input type='number' value={this.props.maxFilter} />
                    </InputContainer>
                <InputContainer>
                        Buscar Produto:
                        <input type='text' value={this.props.nameFilter} />
                </InputContainer>
            </FilterContainer>
        )
    }
}
export default Filter