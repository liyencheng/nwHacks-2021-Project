import React from 'react';
import Button from '@material-ui/core/Button'

class Moods extends React.Component {
    
    render() {
        const Emoji = React.memo(({ className, label, symbol }) =>
            <span className={className} role="img" aria-label={label}>
                {String.fromCodePoint(symbol)}
            </span>)

        const moods = [
            'Sad', 
            'Angry', 
            'Stressed',
            'Demotivated',
            'Happy'
        ];

        var style = {
            backgroundColor: "#3c70dc",
            width: 500,
            height: 100,
            fontSize: 52,
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
                <br></br>
                <div className='Demotivated'>
                    <Button variant='contained' style={style} onClick={() => this.props.onClick(3)}>
                        <Emoji symbol={0x1F61E} />
                        {moods[3]}
                    </Button>
                </div>
                <br></br>
                <div className='Happy'>
                    <Button variant='contained' style={style} onClick={() => this.props.onClick(4)}>
                        <Emoji symbol={0x1F642} />
                        {moods[4]}
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
            isClicked: false
        }
    };

    handleClick(i) {
        if (i === 0) {

        } else if (i === 1) {

        } else if (i === 2) {

        }
        this.setState({
            isClicked: true
        })
    }

    render() {
        return (
            <div>
                {
                this.state.isClicked ?
                    null :
                    <div>
                        <h1 style={{ color: 'white'}}>HOW ARE YOU FEELING?</h1>
                    </div>
                }
                {
                this.state.isClicked ?
                    null :
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