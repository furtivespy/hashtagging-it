import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TagList from '../tagList/tagList'

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 4;
`

const PaddedDiv = styled.div`
    padding: 2px;
`

const TagsColumn = (props) => {
    return (
        <Column>
        <h4>Tags</h4>
        <PaddedDiv>
            <TagList tags={props.tags} canSelect={false} canRemove={true}/>
        </PaddedDiv>
        </Column>
    )
}

TagsColumn.propTypes = {
    tags: PropTypes.array
}


export default TagsColumn