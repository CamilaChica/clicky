import React,{Component} from 'react';
import Card from '../../components/Card';

class Game extends Component
{

    cards=[
        {
        id:"choclate",
        image:"https://www.modernhoney.com/wp-content/uploads/2018/08/Homemade-Chocolate-Ice-Cream-1.jpg"
        },
        {
        id:"Tiramisu",
        image:"http://assets.wholefoodsmarket.com/recipes/3503/2048/1536/3503-5.jpg"
        },
        {
        id:"Berries",
        image:"https://static.abc.es/media/summum/2018/05/04/frutos-rojos-kTs--1190x800@abc.jpg"
        },
        {
        id:"Cookies and cream",
        image:"https://www.simplyrecipes.com/wp-content/uploads/2018/02/Vegan-Mint-Chocolate-Chip-Ice-Cream-6-HORIZONTAL-LEAD.jpg"
        },
    ]


    constructor(props)
    {
        super(props);
        this.state={
            cards:this.cards
        }
    }

    cardClicked=(card)=>{
        alert(card+" card clicked!")
    }

    render()
    {
        return <div>
        <h1>This is the clicky game</h1>
        <div className="row">
        {this.state.cards.map((card,index)=><Card key={index} onClick={()=>this.cardClicked(card)} image={card.image} />)}
        </div>
        </div>
    }
}

export default Game;