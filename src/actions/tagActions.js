import * as types from '../constants/actionTypes'

export function ToggleTag(tag) {
    return {
        type: types.TOGGLE_TAG,
        tag: tag
    }
}

export function SelectAll() {
    return {
        type: types.SELECT_ALL_TAGS,
        select: true
    }
}

export function SelectNone() {
    return {
        type: types.SELECT_ALL_TAGS,
        select: false
    }
}

export function RandomSelect() {
    return {
        type: types.RANDOMIZE_TAGS
    }
}

export function RandomCountChange(num) {
    return {
        type: types.RANDOM_COUNTER_CHANGE,
        count: num
    }
}