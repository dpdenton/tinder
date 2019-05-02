import {SET_WORK_DECISION} from "../action/entity";

const initialState = {

    workers: [
        {
            id: 1,
            decision: null,
            name: 'Tem Cruise',
            image: 'https://pixel.nymag.com/imgs/daily/vulture/2017/06/14/14-tom-cruise.w700.h700.jpg'
        },
        {
            id: 2,
            decision: null,
            name: 'Tam Cruise',
            image: 'https://pixel.nymag.com/imgs/daily/vulture/2017/06/14/14-tom-cruise.w700.h700.jpg'
        },
        {
            id: 3,
            decision: null,
            name: 'Tor Cruise',
            image: 'https://pixel.nymag.com/imgs/daily/vulture/2017/06/14/14-tom-cruise.w700.h700.jpg'
        },
        {
            id: 4,
            decision: null,
            name: 'Tir Cruise',
            image: 'https://pixel.nymag.com/imgs/daily/vulture/2017/06/14/14-tom-cruise.w700.h700.jpg'
        }
    ]
};

export const entity = (state = initialState, action) => {

    switch (action.type) {

        case SET_WORK_DECISION:
            const workers = state.workers.slice();
            const worker = workers.find(worker => worker.id === action.id);
            if (worker) {
                worker.decision = action.decision;
            }
            return {
                ...state,
                workers,
            };

        default:
            return state;
    }

};