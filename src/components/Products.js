import React from "react"

class Products extends React.Component {
    state= {
        filter: ""
    }
    
    onChangeFilter = (event) => {
        this.setState({
            filter: event.target.value
        })
    }


    render () {
        return (
            <div className={"products-container"}>
                
                <select value={this.state.filter} onChange={this.onChangeFilter} >
                    <option value="">Nenhum</option>
                    <option value="lowestprice">Menor preço</option>
                    <option value="biggestprice">Maior preço</option>
                </select>




            </div>




        ) //fechamento return 
    } //fechamento render
}// fechamento class