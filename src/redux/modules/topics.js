import { List } from 'immutable';
import Prismic from 'prismic-javascript';

import api from '../../react/utils/api';

const initialState = List([]);

const processIcon = (icon) => {
    const parsedIcon = icon.split(', ');

    if(parsedIcon.length > 1) {
        return parsedIcon;
    }

    return parsedIcon[0];
}

const ADD_TOPIC = 'ADD_TOPIC';
const ADD_COLLECTION = 'ADD_COLLECTION';

const addTopics = (topics) => ({
    type: ADD_COLLECTION,
    data: topics
});

export const fetchTopics = () => (
    async (dispatch) => {
        try {
            const client = await api();
            const response = await client.query(Prismic.Predicates.at('document.type', 'topic'));
            const topics = response.results.map(item => ({ ...item.data, id: item.id, icon: processIcon(item.data.icon) }));
    
            dispatch(addTopics(topics));
    
            return Promise.resolve();
        } catch(e) {
            console.log(e);
            return Promise.reject();
        }
    }
)

export default function topics(state = initialState, action) {
    switch (action.type) {
      case ADD_COLLECTION:
        return state.merge(action.data)
      default:
        return state
    }
  }