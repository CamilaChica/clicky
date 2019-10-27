import React,{Component} from 'react';
import Card from '../../components/Card';
import {randomizeArray,showMessage} from '../../utils/utils';

class Game extends Component
{

    cards=[
        {
        id:"Cocoa",
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
            cards:this.cards,
            clickedCards:[],
            score:0,
            highestScore:0
        }
    }

    cardClicked=(card)=>{
        if(this.state.clickedCards.includes(card.id))
        {
            showMessage("You lose!");
            this.setState({
                clickedCards:[],
                score:0,
                cards:randomizeArray(this.state.cards)
            })
        }
        else
        {
            this.setState({cards:randomizeArray(this.state.cards),clickedCards:[...this.state.clickedCards,card.id],score:this.state.score+1,highestScore:Math.max(this.state.score+1,this.state.highestScore)})
        }
    }

    render()
    {
        console.log(this.state.clickedCards)
        return <div>
        <h1><b>Tasty Ice Cream</b></h1>
        <div className="row">
            <div className="col-6">
            <h2><b>Your Score: {this.state.score}</b></h2>
            </div>
            <div className="col-6">
            <h2>Your Highest Score: {this.state.highestScore}</h2>
            </div>
        </div>
        <div className="row">
        {this.state.cards.map((card,index)=><Card key={index} onClick={()=>this.cardClicked(card)} image={card.image} />)}
        </div>
        </div>
    }
}

export default Game;