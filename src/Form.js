import React from 'react';
import Button from '@material-ui/core/Button';
import getActivitiesObject from './activity_selection.js';

class Moods extends React.Component {
    
    render() {
        const Emoji = React.memo(({ className, label, symbol }) =>
            <span className={className} role="img" aria-label={label}>
                {String.fromCodePoint(symbol)}
            </span>)

        const moods = [
            'Sad', 
            'Angry', 
            'Stressed'
        ];

        var style = {
            backgroundColor: "#3c70dc",
            width: 500,
            height: 100,
            fontSize: 30,
            color: 'white'
        }

        return (
            <div>
                <div className='Sad'>
                    <Button variant='contained' style={style} onClick={() => this.props.onClick(0)}>
                        <Emoji symbol={0x1F641} />
                        {moods[0]}
                    </Button>
                </div>
                <br></br>
                <div className='Angry'>
                    <Button variant='contained' style={style} onClick={() => this.props.onClick(1)}>
                        <Emoji symbol={0x1F620} />
                        {moods[1]}
                    </Button>
                </div>
                <br></br>
                <div className='Stressed'>
                    <Button variant='contained' style={style} onClick={() => this.props.onClick(2)}>
                        <Emoji symbol={0x1F62B} />
                        {moods[2]}
                    </Button>
                </div>
            </div>
        )
    }
}


class Activities extends React.Component {             //Moods component child.
    constructor(props) {
        super(props);

        this.acs=this.props.dataFromParent1;
        this.list=this.acs.suggestTopKActivities(this.props.dataFromParent2);
        this.list=this.acs.activitySelected(this.list[this.props.dataFromParent2][0],this.props.dataFromParent2); 
        
    };

    render(){

        
 
        var style = {
            backgroundColor: "#3c70dc",
            width: 500,
            height: 100,
            fontSize: 30,
            color: 'white'
        }

        return (
            <div>
                <div>
                    <Button variant='contained' style={style} onClick={() => this.props.onClick(this.list[0][0])} >
                        {this.list[0][1]}
                    </Button>
                </div>
                <br></br>
                <div>
                    <Button variant='contained' style={style} onClick={() => this.props.onClick(this.list[1][0])} >
                        {this.list[1][1]}
                    </Button>
                </div>
                <br></br>
                <div>
                    <Button variant='contained' style={style} onClick={() => this.props.onClick(this.list[2][0])}>
                        {this.list[2][1]}
                    </Button>
                </div>
                <br></br>
                <div>
                    <Button variant='contained' style={style} onClick={() => this.props.onClick(this.list[3][0])}>
                        {this.list[3][1]}
                    </Button>
                </div>
                <br></br>
                <div>
                    <Button variant='contained' style={style} onClick={() => this.props.onClick(this.list[4][0])}>
                        {this.list[4][1]}
                    </Button>
                </div>


            </div>
        )
    }
}





export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenInd: null,
            isClicked: false,
            activitySelectionObject:getActivitiesObject()
        }
    
    };

    handleClick(i) {
      


        this.setState({
            chosenInd:i,
            isClicked: true
        })
        
      
         
    }

     handleClickA(source){
        window.open(source, "_blank");
     
    }


    render() {


        return (
            <div>
                {
                this.state.isClicked ?
                <div>
                    <h1 style={{ color: 'white'}}>Choose an Activity</h1>
                </div>  :
                        
                <div>
                    <h1 style={{ color: 'white'}}>HOW ARE YOU FEELING?</h1>
                </div>
                }
                
                {
                this.state.isClicked ?
                <div>
                    <Activities 
                        onClick={(source) => this.handleClickA(source)}
                        dataFromParent1 = {this.state.activitySelectionObject} 
                        dataFromParent2 = {this.state.chosenInd}

                    />
                </div>   
                       :
                    <div>
                        <Moods 
                        onClick={(i) => this.handleClick(i)}
                        />
                    </div>
                }
            </div>
        )
    }
}