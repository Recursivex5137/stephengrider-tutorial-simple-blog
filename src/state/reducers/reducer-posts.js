import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      const data = action.payload.data;
      console.log(data);
      const mappedData = _.mapKeys(data, 'id');
      console.log(mappedData);
      return mappedData;
    default:
      return state;
  }
}