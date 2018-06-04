import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CategoryColumn from './categoryColumn'
import TagsColumn from './tagsColumn'
import {sortBy} from 'lodash'

const MainContainer = styled.div`
  display: flex;
`

class AdminPage extends React.Component {
  render() {
    return (
      <div className="">
        <h2>Categorize Tags</h2>
        <MainContainer>
          <CategoryColumn categories={this.props.categories} selected="Things" />
          <TagsColumn/>
        </MainContainer>
      </div>
    )
  }
}

AdminPage.propTypes = {
  categories: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
      tags: sortBy(state.tags.tags, ["name"]),
      categories: sortBy(state.tags.categorizedTags, ["categoryName"]).map((c) => c.categoryName)
  };
}

export default connect(mapStateToProps)(AdminPage)
