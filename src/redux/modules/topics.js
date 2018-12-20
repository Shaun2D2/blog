import { List } from 'immutable';

const initialState = List([]);

const ADD_TOPIC = 'ADD_TOPIC';
const ADD_COLLECTION = 'ADD_COLLECTION';

const addTopics = (topics) => ({
    type: ADD_COLLECTION,
    data: topics
});

export default function todos(state = initialState, action) {
    switch (action.type) {
      case ADD_COLLECTION:
        return state.concat([action.text])
      default:
        return state
    }
  }