import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 30px;
    margin-top: 15px;
    background: #f5f5f5;
`
const Item = styled.div`
`

const UserInfo = ({user}) => (
    <Wrap>
        <Item>
            Author : {user.username}
        </Item>
        <Item>
            Name : {user.name}
        </Item>
        <Item>
            Company : {user.company.name}
        </Item>
    </Wrap>
);

export default UserInfo