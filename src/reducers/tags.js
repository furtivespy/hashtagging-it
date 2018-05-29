import * as types from '../constants/actionTypes'
import initialState from './initialState';
import { findIndex, filter, shuffle, take, join } from 'lodash'

const select = (tag) => { return Object.assign({}, tag, {selected: true})}
const unselect = (tag) => { return Object.assign({}, tag, {selected: false})}

export default function tagsReducer(state = initialState, action) {

  switch (action.type) {
    case types.RANDOMIZE_TAGS:
      var selected = filter(state.tags, 'selected')
      var shuffledList = shuffle(selected)
      var snipped = take(shuffledList, state.randomCount).map(a => a.name)
      var text = "#" + join(snipped, " #")
      return Object.assign({}, state, { randomList: text })
    case types.TOGGLE_TAG:
      var ind = findIndex(state.tags, ["name", action.tag] )
      if (ind === -1) { return state }
      return Object.assign({}, state, {tags:
       [
          ...state.tags.slice(0, ind),
          Object.assign({}, state.tags[ind], {selected: !state.tags[ind].selected}) ,
          ...state.tags.slice(ind+1)
        ]})
    case types.SELECT_ALL_TAGS:
      if (action.select) {
        return Object.assign({}, state, {tags: state.tags.map(s => select(s))})
      } else {
        return Object.assign({}, state, {tags: state.tags.map(s => unselect(s))})
      }
    case types.RANDOM_COUNTER_CHANGE:
      return Object.assign({}, state, {randomCount: action.count})
    default:
      return state
  }
}