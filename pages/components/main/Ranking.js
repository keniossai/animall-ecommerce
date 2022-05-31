import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export class Ranking extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
      <RankinMain>
            <DescRanking>
                <BgRanking>
                    <DescDiv>
                        <Description>
                            <h1>Welcome to Animall</h1>
                            <p>Get up to 70% off or get a coupon</p>
                        </Description>
                        <RankinAmount>
                            <h3>NGN 1,668,00</h3>
                            <PaGraph></PaGraph>
                        </RankinAmount>
                    </DescDiv>
                    <RankingProduct>
                        <ProductRow>
                            <Products>
                                <Slider {...settings}>
                                    <WelcomeSlide>
                                        <Product>
                                            <ProductFeature>
                                                <ProductMain>
                                                    <img src="https://ae04.alicdn.com/kf/S494311fa2e854e2ab094101242d20d5ap.jpg_120x120Q90.jpg_.webp" alt="" />
                                                </ProductMain>
                                            </ProductFeature>
                                        </Product>
                                    </WelcomeSlide>
                                </Slider>
                            </Products>
                        </ProductRow>
                    </RankingProduct>
                </BgRanking>
            </DescRanking>
      </RankinMain>
    )
  }
}

export default Ranking


const RankinMain = styled.div`
    width: 100%;
`

const DescRanking = styled.div`
    width: 100%;
    height: 190px;
    min-height: 169px;
    cursor: pointer;
`

const BgRanking = styled.div`
    background: url('https://ae01.alicdn.com/kf/H863bb19ae5de49a8bd6074a3d81599d9z.jpg_Q90.jpg_.webp');
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 16px 12px;
    overflow: hidden;
    border-radius: 8px;
`

const DescDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 204px;
    padding-right: 12px;
`

const Description = styled.div`
    h1{
        margin: 4px 0;
        color: #fff;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
    }

    p{
        margin: 0;
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        padding: 0;
    }
`
const RankinAmount = styled.div`
    background-position: 0px 0px;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-image: url("https://ae01.alicdn.com/kf/S2180cc9004f84c01869e8c5c09d14bc1W/384x108.png_.webp");
    background-size: contain;
    background-origin: padding-box;
    background-clip: border-box;

    width: 192px;
    height: 55px;
    padding: 0 45px 0 14px;
    overflow: hidden;

    h3{
        margin: 18px 0 4px;
        color: #000;
        font-size: 20px;
        line-height: 17px;
        font-weight: 400;
    }
`

const PaGraph = styled.p`
    width: 100%;
    margin: 0;
    overflow: hidden;
    color: #000;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const RankingProduct = styled.div`
    display: flex;
    flex: 1 1;
    justify-content: flex-end;
`

const ProductRow = styled.div`
    width: 100%;
`

const Products = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

    .slick-slider{
        width: 113px;
    }
`


const WelcomeSlide = styled.div`
    height: 145px;
    padding: 0 2px;
    overflow: hidden;
    text-align: center;
    border-radius: 8px;
`

const Product = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 4px;
    background-color: #fff;
`

const ProductFeature = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 4px;
`

const ProductMain = styled.div`
    height: 102;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`