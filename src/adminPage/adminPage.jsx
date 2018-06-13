import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {sortBy, find} from 'lodash'
import CategoryColumn from './categoryColumn'
import TagsColumn from './tagsColumn'
import {SelectCategory, AddCategory, AddCategoryTag, RemoveCategoryTag} from '../actions/tagActions.js'


const MainContainer = styled.div`
  display: flex;
`

class AdminPage extends React.Component {
  render() {
    return (
      <div className="">
        <h2>Categorize Tags</h2>
        <MainContainer>
          <CategoryColumn categories={this.props.categories} selected={this.props.selectedCat} onSelect={this.props.catClick} onAdd={this.props.addCategory} />
          <TagsColumn tags={this.props.tags} selected={this.props.selectedCat} onAdd={this.props.addTag} onRemove={this.props.removeTag} />
        </MainContainer>
      </div>
    )
  }
}

AdminPage.propTypes = {
  categories: PropTypes.array,
  tags: PropTypes.array,
  selectedCat: PropTypes.string,
  catClick: PropTypes.func,
  addCategory: PropTypes.func,
  addTag: PropTypes.func,
  removeTag: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
      tags: (state.tags.selectedCategory === "") ? [] :
        sortBy(find(state.tags.categorizedTags,["categoryName", state.tags.selectedCategory]).tags , ["name"]),
      categories: sortBy(state.tags.categorizedTags, ["categoryName"]).map((c) => c.categoryName),
      selectedCat: state.tags.selectedCategory
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      catClick: (cat) => dispatch(SelectCategory(cat)),
      addCategory: (data) => dispatch(AddCategory(data)),
      addTag: (data) => dispatch(AddCategoryTag(data)),
      removeTag: (tag) => dispatch(RemoveCategoryTag(tag))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)
