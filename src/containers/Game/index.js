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
        {
        id:"Coffee",
        image:"https://popsypops.com/wp-content/uploads/chocoloco_compressed.jpg"
        },
        {
        id:"Tres Leches",
        image:"https://www.melskitchencafe.com/wp-content/uploads/tres-leches-cupcakes6-480x360.jpg"
        },
        {
        id:"Morellia",
        image:"https://www.capannaris.com/wp-content/uploads/2016/02/blackberry-chocolate-ice-cream.jpg"
        },
        {
        id:"Sundae",
        image:"https://checkplease.wttw.com/sites/default/files/blog-images/Filini-gelato.jpg"
        }

    ]


    constructor(props)
    {
        super(props);
        this.state={
            cards:this.cards,
            clickedCards:[],
            score:0,
            highestScore:0,
            wins:0,
            loses:0
        }
    }

    cardClicked=(card)=>{
        
        if(this.state.clickedCards.includes(card.id))
        {
            showMessage("You lost!!");
            this.setState({
                clickedCards:[],
                wins:this.state.loses+1,
                score:0,
                cards:randomizeArray(this.state.cards)
            })
        }
        else if((this.state.clickedCards.length+1)===this.state.cards.length)
        {
            showMessage("You won!!");
            this.setState({
                clickedCards:[],
                wins:this.state.wins+1,
                score:0,
                highestScore:this.state.cards.length,
                cards:randomizeArray(this.state.cards)
        })
        }

        else
        {
            this.setState({
                cards:randomizeArray(this.state.cards),
                clickedCards:[...this.state.clickedCards,card.id],
                score:this.state.score+1,
                highestScore:Math.max(this.state.score+1,this.state.highestScore)})
        }
    }

    render()
    {
        console.log(this.state.clickedCards)
        return <div className="bg">
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
        <div className="col-6">
        <h3><b>Wins: {this.state.wins}</b></h3>
        </div>
        <div className="col-6">
        <h3>Loses: {this.state.loses}</h3>
        </div>
    </div>
        <div className="row">
        {this.state.cards.map((card,index)=><Card key={index} onClick={()=>this.cardClicked(card)} image={card.image} />)}
        </div>
        </div>
    }
}

export default Game;