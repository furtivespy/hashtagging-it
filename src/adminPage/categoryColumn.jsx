import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Tag} from '@blueprintjs/core'

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

const PaddedDiv = styled.div`
    padding: 2px;
`

const CategoryColumn = (props) => {
    return (
        <Column>
        <div>List of Categories</div>
        {props.categories.map((cat) => { return(<PaddedDiv key={cat}><Tag large={true} interactive={true} intent={(cat === props.selected) ? "Success" : "None"}>{cat}</Tag></PaddedDiv>)})}
        </Column>
    )
}

CategoryColumn.propTypes = {
    categories: PropTypes.array.isRequired,
    selected: PropTypes.string
}

export default CategoryColumn