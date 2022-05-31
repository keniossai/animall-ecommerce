import React, { Component } from 'react'
import styled from 'styled-components'

class SideAccount extends Component {
  render() {
    return (
      <AccountMain>
        <AccountWrap>
            <Account>
                <Avatar>
                    <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" />
                </Avatar>
                <WelcomeHead>Welcome To Animall</WelcomeHead>
            </Account>
        </AccountWrap>
      </AccountMain>
    )
  }
}

export default SideAccount

const AccountMain = styled.div`
    position: absolute;
    top: -0px;
    right: 0;
    width: 240px;
    overflow: hidden;
`

const AccountWrap = styled.div`
    background-image: url('https://ae01.alicdn.com/kf/He1ffbc1d340f4be8a0a6d07641c58180t.png_.webp');
    
    width: 240px;
    height: 476px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 8px;
    background-size: 240px 101px;
    background-repeat: no-repeat;
    background-color: #fff;
    overflow: hidden;
`

const Account = styled.div`
    width: 210px;
    height: 76px;
    position: relative;

`

const Avatar = styled.div`
    width: 48px;
    height: 48px;
    position: relative;
    display: block;
    margin: 0 auto;
    cursor: pointer;

    img{
        width: 48px;
        height: 48px;
        border-radius: 8px;
        vertical-align: middle;
        border: 0;
        margin: 0;
        padding: 0;
    }

`

const WelcomeHead = styled.div`
    position: absolute;
    top: 58px;
    width: 100%;
    height: 18px;
    line-height: 18px;
    font-size: 15px;
    font-weight: 700;
    color: #000;
    text-align: center;
    cursor: pointer;
`