export const SET_WORK_DECISION = 'SET_WORK_DECISION';

export const setWorkerDecision = (id, decision) => {
    return {
        type: SET_WORK_DECISION,
        id,
        decision,
    }
};
