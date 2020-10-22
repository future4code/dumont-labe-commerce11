import React from 'react';
import styled from 'styled-components';

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
                <div>
                    <label>
                        Valor Mínimo:
                        <input type='number' />
                </label>
                </div>
                <div>
                    <label>
                        Valor Máximo:
                        <input type='number' />
                    </label>
                </div>
                <div>
                    <label>
                        Buscar Produto:
                        <input type='text' />
                </label>
                </div>
            </FilterContainer>
        )
    }
}

export default Filter