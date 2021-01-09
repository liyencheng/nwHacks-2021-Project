import React from 'react';

class Moods extends React.Component {
    render() {
        const moods = [
            'Sad', 
            'Angry', 
            'Stressed'
        ];

        return (
            <div>
                <div className='Mood0'>
                    <button className='Mood0' onClick={() => this.props.onClick()}>
                        {moods[0]}
                    </button>
                </div>
                <div className='Mood1'>
                    <button className='Mood1' onClick={() => this.props.onClick()}>
                        {moods[1]}
                    </button>
                </div>
                <div className='Mood2'>
                    <button className='Mood2' onClick={() => this.props.onClick()}>
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