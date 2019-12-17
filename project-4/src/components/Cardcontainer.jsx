import React, {Component} from 'react'
import Card from './shared/Card'
// import recipes from '../data/recipes.json'

class Cardcontainer extends Component {
    constructor(props) {
        super(props)
        this.state = { 
        }
    }
    renderCards = () => {
        if(this.props.recipes.length) {
            return this.props.recipes.map((recipe, index) => {
                return <Card key={ index } recipe={ recipe } />
            })
        }
    }

    render() {
        return (
            <>
            { this.renderCards() }
            </>
        )
    }
}
export default Cardcontainer
