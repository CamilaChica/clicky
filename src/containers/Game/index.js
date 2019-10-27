import React,{Component} from 'react';
import Card from '../../components/Card';

class Game extends Component
{
    cards=[
        
    ]


    cardClicked=(card)=>{
        alert(card+" card clicked!")
    }

    render()
    {
        return <div>
        <h1>This is the clicky game</h1>
        <div className="row">
            <Card onClick={()=>this.cardClicked("First")} image="https://www.modernhoney.com/wp-content/uploads/2018/08/Homemade-Chocolate-Ice-Cream-1.jpg" />
            <Card onClick={()=>this.cardClicked("Second")} image="http://assets.wholefoodsmarket.com/recipes/3503/2048/1536/3503-5.jpg" />
            <Card onClick={()=>this.cardClicked("Third")} image="https://static.abc.es/media/summum/2018/05/04/frutos-rojos-kTs--1190x800@abc.jpg" />
            <Card onClick={()=>this.cardClicked("Fourth")} image="https://www.simplyrecipes.com/wp-content/uploads/2018/02/Vegan-Mint-Chocolate-Chip-Ice-Cream-6-HORIZONTAL-LEAD.jpg" />
        </div>
        </div>
    }
}

export default Game;