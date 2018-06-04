import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
`

const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1
`

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 4
`

// Since this component is simple and static, there's no parent container for it.
const AdminPage = () => {
  return (
    <div className="">
      <h2>Categorize Tags</h2>
      <MainContainer>
        <ColumnOne><div>List of Categories</div><div>a</div><div>b</div></ColumnOne>
        <ColumnTwo>Two</ColumnTwo>
      </MainContainer>
    </div>
  )
}

export default AdminPage
