import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
    border: 1px solid black;
`

class Filter extends React.Component {
    render() {
        return (
            <FilterContainer>
                ESSE É O FILTRO
            </FilterContainer>
        )
    }
}

export default Filter