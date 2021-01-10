import React from 'react';

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
            width: 300,
            height: 50,
        }

        return (
            <div>
                <div className='Sad'>
                    <button style={style} onClick={() => this.props.onClick(0)}>
                        <Emoji symbol={0x1F641} />
                        {moods[0]}
                    </button>
                </div>
                <div className='Angry'>
                    <button style={style} onClick={() => this.props.onClick(1)}>
                        <Emoji symbol={0x1F62B} />
                        {moods[1]}
                    </button>
                </div>
                <div className='Stressed'>
                    <button style={style} onClick={() => this.props.onClick(2)}>
                        <Emoji symbol={0x1F641} />
                        {moods[2]}
                    </button>
                </div>
            </div>
        )
    }
}

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen: null
        }
    };

    handleClick(i) {
        if (i === 0) {

        } else if (i === 1) {

        } else if (i === 2) {

        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>How are you feeling?</h1>
                </div>
                <div>
                    <Moods 
                    onClick={(i) => this.handleClick(i)}
                    />
                </div>
            </div>
        )
    }
}