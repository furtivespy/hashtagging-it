import React from 'react'
import styled from 'styled-components'
import CategoryColumn from './categoryColumn'

const MainContainer = styled.div`
  display: flex;
`

const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
`

const AdminPage = () => {
  return (
    <div className="">
      <h2>Categorize Tags</h2>
      <MainContainer>
        <CategoryColumn categories={["Stuff","Things"]} selected="Things" />
        <ColumnTwo>
          <div>Tags</div>
        </ColumnTwo>
      </MainContainer>
    </div>
  )
}

export default AdminPage
