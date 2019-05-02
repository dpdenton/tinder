import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';


class TinderDraggable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            decision: null,
            startX: null,
            confidence: 0,
        };

        this.handleDrag = this.handleDrag.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleStart = this.handleStart.bind(this);
    }

    handleStart(e) {
        // doesn't provide any useful info
        // console.log({e})
    }

    handleDrag(e) {

        if (this.state.startX === null) {
            this.setState({
                startX: e.x
            });
            return;
        }

        let decision = null;

        if (e.x > this.state.startX + 100) {
            decision = true
        }

        if (e.x < this.state.startX - 100) {
            decision = false
        }

        const confidence = (e.x - this.state.startX) / 100;

        this.setState({
            confidence,
            decision,
        })
    }

    handleStop(e) {

        if (this.state.decision === null) {
            this.setState({
                startX: null,
                confidence: 0,
            });
            return;
        }

        this.props.onDecision({decision: this.state.decision});
    }

    render() {

        return (
            <Draggable
                axis="x"
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={{x: 0, y: 0}}
                onDrag={this.state.stopped ? () => {
                } : this.handleDrag}
                onStop={this.state.stopped ? () => {
                } : this.handleStop}
            >
                <div className="handle">
                    {this.props.children(
                        {
                            decision: this.state.decision,
                            confidence: this.state.confidence
                        }
                    )}
                </div>
            </Draggable>
        )

    }
}

TinderDraggable.propTypes = {
    onDecision: PropTypes.func.isRequired,
};

export default TinderDraggable;