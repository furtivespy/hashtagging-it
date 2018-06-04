import React from 'react'
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

const TagsColumn = () => {
    return (
        <Column>
        <div>Tags</div>
        <PaddedDiv>
            <TagList tags={[{
                "media_count": 1,
                "name": "whatimade",
                "selected": false
                },
                {
                "media_count": 1,
                "name": "handmadeisbetter",
                "selected": false
                }]}/>
        </PaddedDiv>
        </Column>
    )
}


export default TagsColumn