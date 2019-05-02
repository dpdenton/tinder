import React, {Component} from 'react';
import {connect} from "react-redux";
import WorkerData from "./container/WorkerData";
import TinderDraggable from "./container/TinderDraggable";
import {setWorkerDecision} from "./action/entity";
import Profile from "./component/Profile";

import './style/App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.renderWorker = this.renderWorker.bind(this);
        this.renderWorkers = this.renderWorkers.bind(this);
    }

    renderWorker(worker, index) {

        if (index === 0) {
            return (
                <TinderDraggable
                    key={worker.id}
                    onDecision={({decision}) => {
                        this.props.setWorkerDecision(worker.id, decision)
                    }}
                >{({decision, confidence}) => {
                    return (
                        <Profile
                            {...worker}
                            confidence={confidence}
                            decision={decision}
                        />
                    )
                }}
                </TinderDraggable>
            )
        }

        return (
            <Profile
                key={worker.id}
                {...worker}
            />
        )
    }

    renderWorkers(workers) {
        return workers.map(this.renderWorker);
    }

    render() {

        return (
            <div className="App">
                <div className='cards'>
                    <WorkerData>
                        {({workers}) => {
                            return this.renderWorkers(workers)
                        }}
                    </WorkerData>
                </div>
            </div>
        )
    }
}

const mapDispatch = dispatch => {

    return {
        setWorkerDecision: (id, decision) => dispatch(setWorkerDecision(id, decision))
    }
};

export default connect(undefined, mapDispatch)(App);
