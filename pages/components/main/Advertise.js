import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Advertise extends Component {
  render(){
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
      };
    return (
        <MainAdvertise>
            <MainBanner>
                <DivSlide>
                <Slider {...settings} className="slickSlider">
                    <a href="">
                        <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1653397945/contentservice/products.gif_SJWatIcw5.gif" alt="" />
                    </a>
                    <a href="">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1653050109/contentservice/Bannner.png_rJNZjWrv5.png" alt="" />
                    </a>
                    <a href="">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1653638490/contentservice/KIDS.png_ry-PHZ0D9.png" alt="" />
                    </a>
                    <a href="">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1653062264/contentservice/elec.gif_H12u5ESv9.gif" alt="" />
                    </a>
                    <a href="">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1652434131/contentservice/Muoka%20WEB.jpg_SkOANooIc.jpg" alt="" />
                    </a>
                    <a href="">
                    <img src="https://ae01.alicdn.com/kf/S69254482e88d46c6adeafb79753c543dR.jpg_Q90.jpg_.webp" alt="" />
                    </a>
                </Slider>
                </DivSlide>
            </MainBanner>
        </MainAdvertise>
      )
  }
}

export default Advertise

const MainAdvertise = styled.div`
    position: relative;
    width: 100%;
    /* height: 476px; */
    /* padding-right: 240px; */
    overflow: hidden;
`

const MainBanner = styled.div`
    width: 100%;
    padding: 0 15px 16px;
`

const DivSlide = styled.div`
    width: 100%;
    height: 400px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;

    .slick-slider{
        position: relative;
        display: block;
    }

    .slick-prev{
        display: block;
        z-index: 10;
        left: 0;
        padding: 0;
        position: absolute;
        width: 30px;
        height: 50px;
        /* background-color: #000; */
        transform: translateY(-50%);
        cursor: pointer;
        border: none;
        transition: all .4s ease-in-out;
        overflow: hidden;
    }

    img{
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .slick-next{
        right: 0;
        width: 30px;
        height: 50px;
        color: #000;
    }

    .slick-dots{
        display: block;
        bottom: 0;
        width: 100%;
        margin: 0;
        padding-bottom: 13px;
        list-style: none;
        text-align: center;
        position: absolute;
        padding: 0;
        z-index: unset;
    }

`
