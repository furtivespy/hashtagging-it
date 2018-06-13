import { findIndex, find } from 'lodash'
import {reset} from 'redux-form';
import * as types from './actionTypes'

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

export function SelectCategory(category){
    return{
        type: types.SELECT_TAG_CATEGORY,
        newCategory: category
    }
}

export function AddCategory(formData){
    return function (dispatch, getState) {
        var existing = getState().tags.categorizedTags
        var ind = findIndex(existing, ["categoryName", formData.itemInput])
        if (ind === -1 && formData.itemInput && formData.itemInput.trim().length > 0){
            dispatch({
                type: types.TAGS_ADD_CATEGORY,
                newCategory: formData.itemInput
            })
            dispatch(reset("addCategory"))
        }
    }
}

export function AddCategoryTag(tagForm){
    return function (dispatch, getState) {
        var selectedCategory = getState().tags.selectedCategory
        if (selectedCategory === undefined || selectedCategory.trim().length < 1) return
        var existing = find(getState().tags.categorizedTags,["categoryName", selectedCategory]).tags
        var ind = findIndex(existing, ["categoryName", tagForm.itemInput])
        if (ind === -1 && tagForm.itemInput && tagForm.itemInput.trim().length > 0){
            dispatch({
                type: types.TAGS_ADD_CATEGORY_TAG,
                newTag: tagForm.itemInput
            })
            dispatch(reset("addTags"))
        }
    }
}

export function RemoveCategoryTag(tag){
    return{
        type: types.TAGS_REMOVE_CATEGORY_TAG,
        tag: tag
    }
}