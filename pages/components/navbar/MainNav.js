import React from 'react'
import styled from 'styled-components'
import animall from '../../../public/logo.png'
import Image from 'next/image'
import TopNav from '../top-nav/TopNav'
import { BiCart } from 'react-icons/bi'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'


const MainNav = () => {
	return (
		<>
            <TopNav />
			<HeaderContainer>
				<HeaderWrap className='container'>
					<AniStore>
						<HeaderCategory></HeaderCategory>
						<SiteLogo>
							<a href=''>
								<Image className='site-logo' src={animall} alt='Logo' />
							</a>
						</SiteLogo>
					</AniStore>
                    <AniStoreLeft>
                        <HeaderRightContent>
                            <RightShoppingCart>
                                <a href="">
                                    <BiCart className='cart' />
                                    <span className="cart-number">0</span>
                                </a>
                            </RightShoppingCart>
                        </HeaderRightContent>
                    </AniStoreLeft>
                    <AniMiddle>
                        <form action="" className='searchbarForm'>
                            <SearchBar>
                                <SearchCategory>
                                    <SearchCatTitle>
                                        <SearchCatValue>All Categories</SearchCatValue>
                                    </SearchCatTitle>
                                    <select name="" id="">
                                        <option value="0">All Categories</option>
                                        <option value="2">Food</option>
                                        <option value="6">Fashion</option>
                                        <option value="7">Games</option>
                                    </select>
                                    <AiOutlineCaretDown className='CatIcon'/>
                                </SearchCategory>
                                <input className='search-button' type="submit" value="" />
                            </SearchBar>
                            <SearchKeyBox>
                                <input type="text" className='searchKey' placeholder='human hair wigs'/>
                            </SearchKeyBox>
                        </form>
                        <HotPicks>
                            <a href="">iPhone 11 Pro</a>
                            <a href="">Samsung S24</a>
                            <a href="">Infinix Note 9</a>
                            <a href="">Nikkon HD 7000</a>
                        </HotPicks>
                    </AniMiddle>
				</HeaderWrap>
			</HeaderContainer>
		</>
	)
}

export default MainNav

const HeaderContainer = styled.div`
	height: 96px;
	position: relative;
	width: 100%;
	background-color: #fff;
	z-index: 20;
`

const HeaderWrap = styled.div``

const AniStore = styled.div`
    position: relative;
    width: 256px;
    float: left;
    z-index: 11;
    padding-right: 16px;
`
const HeaderCategory = styled.div``

const SiteLogo = styled.div`
    float: left;
    padding: 6px 0 0;
    max-width: 182px;
    border-bottom: 0;
    text-align: center;

    .site-logo{
        display: block;
        width: 166px;
        height: 40px;
        /* text-index: -199em; */
        margin: 0 auto;
        overflow: hidden;
    }
`
const AniStoreLeft = styled.div`
    position: relative;
    float: right;
    font-size: 13px;
    padding-left: 20px;
    z-index: 11;
`

const HeaderRightContent = styled.div`
    width: 242px;
    height: 36px;
    margin-top: 24px;
`

const RightShoppingCart = styled.div`

    margin-left: 20px;
    position: relative;
    display: inline-block;

    .cart{
        width: 32px;
        height: 32px;
        display: inline-block;
        vertical-align: middle;
    }

    .cart-number{
        background: #0574b5;
        max-width: 25px;
        min-width: 20px;
        height: 20px;
        color: #fff;
        border-radius: 10px;
        position: absolute;
        top: -5px;
        left: 22px;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        padding: 0 2px;
    }
`

const AniMiddle = styled.div`

    position: relative;
    width: auto;
    padding-top: 23px;
    z-index: 10;

    .searchbarForm{
        position: relative;
        width: 100%;
    }
    
`

const SearchBar = styled.div`
    position: relative;
    float: right;
    padding-right: 40px;

    
`

const SearchCategory = styled.div`
    position: relative;
    height: 36px;
    border-top: 2px solid #0574b5;
    border-bottom: 2px solid #0574b5;

    select{
        top: 7px;
        height: 25px;
        position: absolute;
        left: 0;
        min-width: 130px;
        font-family: arial;
        opacity: 0;
        outline: 0 none;
        cursor: pointer;
        visibility: visible;
        z-index: 3;
    }

    .CatIcon{
        position: absolute;
        bottom: 14px;
        right: 15px;
        width: 10px;
        /* height: 8px; */
        overflow: hidden;
        z-index: 2;
    }

    option{
        padding: 3px 0 3px 5px;
    }

    
`

const SearchCatTitle = styled.div`
    height: 25px;
    line-height: 23px;
    position: relative;
    padding: 0 33px 0 15px;
    height: 38px;
    cursor: pointer;
    border-left: 1px solid #eee;
    overflow: hidden;
`
const SearchCatValue = styled.span`
    padding-top: 0;
    position: relative;
    display: block;
    width: 90px;
    overflow: hidden;
    font-size: 13px;
    color: #666;
    cursor: pointer;
    white-space: nowrap;
`

const SearchKeyBox = styled.div`
    position: relative;
    width: auto;
    overflow: hidden;
    height: 36px;
    padding: 0 0 0 16px;
    border: 2px solid #0574b5;
    border-right: 0;
    border-radius: 4px 0 0 4px; 
    

    .searchKey{
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        padding: 11px 10px 11px 0;
        line-height: 18px;
        font-size: 13px;
        border: 0;
        font-family: arial;
        
    }
`

const HotPicks = styled.div`
    height: 16px;
    margin-top: 4px;
    overflow: hidden;

    a{
        padding-left: 0;
        position: relative;
        float: left;
        line-height: 16px;
        font-size: 12px;
        padding: 0 8px;
        color: #666;
    }

    a::before{
        position: absolute;
        left: 0;
        top: 2px;
        content: "";
        display: inline-block;
        width: 1px;
        height: 14px;
        font-size: 0;
        overflow: hidden;
        background-color: #e9e9e9;
    }
`