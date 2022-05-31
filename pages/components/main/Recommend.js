import React from 'react'
import styled from 'styled-components'

const Recommend = () => {
  return (
    <SuperDeal>
        <SuperdealContainer>
            <SuperDealWrap>
                <a href="">
                    <DealDiv>
                        <DealBody>
                            <img src="https://ae01.alicdn.com/kf/H6a103b65f0b64afdaf4fa405254b44few/368x55.png_250x250.png_.webp" alt="" />
                            <TopDeal>Top products, Incredible price</TopDeal>
                        </DealBody>
                    </DealDiv>
                </a>
            </SuperDealWrap>
        </SuperdealContainer>
    </SuperDeal>
  )
}

export default Recommend


const SuperDeal = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding-left: 0;
    padding-right: 0;
    width: 1200px;
    position: relative;
`

const SuperdealContainer = styled.div`
    /* margin-top: 10px; */
    background: #fff;
    padding: 12px;
    border-radius: 8px;
    width: 100%;
`

const SuperDealWrap = styled.div`
    margin-bottom: 12px;

    a{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        text-decoration: none;
    }
`

const DealDiv = styled.div`
    display: flex;
    align-items: center;

`

const DealBody = styled.div`
    display: flex;
    text-align: center;

    img{
        height: 34px;
        margin-left: 8px;
        border: 0;
        margin: 0;
        padding: 0;
    }
`

const TopDeal = styled.span`
    color: #999;
    font-size: 18px;
    margin-right: 20px;
`