import React from 'react'
import {Tag} from '@blueprintjs/core'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TagHolder = styled.span`
    margin: 2px;
    margin-bottom: 3px;
`

const FlexDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class TagList extends React.Component {
    render() {
        return (
            <FlexDiv>
                {this.props.tags.map((tag) => {
                    return(<TagHolder key={tag.name}><Tag interactive={true} intent={tag.selected ? 'Success' : 'None'} onClick={() => this.props.click(tag.name)} >{tag.name}</Tag></TagHolder>)
                })}
            </FlexDiv>
        );
    }
}

TagList.propTypes = {
    tags: PropTypes.array.isRequired,
    click: PropTypes.func
}

export default TagList;
