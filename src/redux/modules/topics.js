import { List } from 'immutable';
import Prismic from 'prismic-javascript';

import api from '../../react/utils/api';

const initialState = List([]);

const ADD_TOPIC = 'ADD_TOPIC';
const ADD_COLLECTION = 'ADD_COLLECTION';

const addTopics = (topics) => ({
    type: ADD_COLLECTION,
    data: topics
});

export const fetchTopics = () => (
    async (dispatch) => {
        const client = await api();
        const response = await client.query(Prismic.Predicates.at('document.type', 'topic'));

        const topics = response.results.map(item => ({ id: item.id, ...item.data }));

        dispatch(addTopics(topics));
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