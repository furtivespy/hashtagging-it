import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {sortBy, find} from 'lodash'
import CategoryColumn from './categoryColumn'
import TagsColumn from './tagsColumn'
import {SelectCategory} from '../actions/tagActions.js'


const MainContainer = styled.div`
  display: flex;
`

class AdminPage extends React.Component {
  render() {
    return (
      <div className="">
        <h2>Categorize Tags</h2>
        <MainContainer>
          <CategoryColumn categories={this.props.categories} selected={this.props.selectedCat} onSelect={this.props.catClick} />
          <TagsColumn tags={this.props.tags}/>
        </MainContainer>
      </div>
    )
  }
}

AdminPage.propTypes = {
  categories: PropTypes.array,
  tags: PropTypes.array,
  selectedCat: PropTypes.string,
  catClick: PropTypes.func
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
      catClick: (cat) => dispatch(SelectCategory(cat))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)
