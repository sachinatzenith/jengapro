import {
  FETCH_TAGS_REQUEST, FETCH_TAGS_SUCCESS, FETCH_TAGS_FAILURE,
  FETCH_TEDS_BY_TAG_FAILURE,FETCH_TEDS_BY_TAG_SUCCESS,FETCH_TEDS_BY_TAG_REQUEST,
  FETCH_RROD_REQUEST,FETCH_RROD_SUCCESS,FETCH_RROD_FAILURE
} from '../actions/ted';

export default function ted(state = {
  isFetching: false,
}, action) {
  switch (action.type) {
    case FETCH_TAGS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_TAGS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        tags: action.tags
      });
    case FETCH_TAGS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.message,
      });
      case FETCH_TEDS_BY_TAG_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_TEDS_BY_TAG_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        teds: action.teds
      });
    case FETCH_TEDS_BY_TAG_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.message,
      });
    case FETCH_RROD_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_RROD_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        prod: action.prod
      });
    case FETCH_RROD_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.message,
      });
    default:
      return state;
  }
}
 