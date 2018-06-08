import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button} from '@blueprintjs/core'

const FullDiv = styled.div`
    width: 100%;
    margin-top:2px;
    padding: 2px;
`

const InputBar = styled.input`
    width: 125px;
`

const PaddedDiv = styled.span`
    padding: 2px;
`


const AddItem = () => {
    return (
        <FullDiv>
            <InputBar className="pt-input" placeholder="New Category" type="text" />
            <PaddedDiv> <Button >Add</Button></PaddedDiv>
        </FullDiv>
    )
}

AddItem.propTypes = {
    tags: PropTypes.array
}


export default AddItem