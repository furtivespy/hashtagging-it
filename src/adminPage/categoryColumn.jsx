import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Tag} from '@blueprintjs/core'
import AddItem from './addItem'

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    border-right-style:solid;
    margin-right: 15px;
`

const PaddedDiv = styled.div`
    padding: 2px;
`

const CategoryColumn = (props) => {
    return (
        <Column>
        <h4>Categories</h4>
        {props.categories.map((cat) => { return(<PaddedDiv key={cat}><Tag large={true} interactive={true} onClick={props.onSelect.bind(this, cat)} intent={(cat === props.selected) ? "Success" : "None"}>{cat}</Tag></PaddedDiv>)})}
        <AddItem form="addCategory" placeholder="Add Category" onSubmit={props.onAdd}/>
        </Column>
    )
}

CategoryColumn.defaultProps = {
    onSelect: () => {},
    onAdd: () => {}
}

CategoryColumn.propTypes = {
    categories: PropTypes.array.isRequired,
    selected: PropTypes.string,
    onSelect: PropTypes.func,
    onAdd: PropTypes.func
}

export default CategoryColumn