import React from 'react';
import {connect} from "react-redux";

class WorkerData extends React.Component {

    render() {
        return this.props.children({workers: this.props.workers})
    }
}

const mapState = (state) => {

    return {
        workers: state.entity.workers.filter(worker => worker.decision === null),
    }
};

export default connect(mapState)(WorkerData);