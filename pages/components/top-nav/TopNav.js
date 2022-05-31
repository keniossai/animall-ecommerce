import React, {useState} from 'react'
import styled from 'styled-components'
import { BsFillCaretDownFill, BsTablet, BsSuitHeart, BsPerson } from 'react-icons/bs'

const TopNav = () => {
    const [isShown, setIsShown] = useState(false);
  return (
    <LightHouse>
        <LightHouseWrap className='container'>
            <NavGlobal>
                <NavItemWrap>
                    <NavItemSub>
                        <SellerTitle>
                            <a href=''>
                                Sell on Animall <BsFillCaretDownFill className='downIcon' />
                            </a> 
                        </SellerTitle>
                        <SellerLogin>
                            <li>Seller Login</li>
                        </SellerLogin>
                    </NavItemSub>
                </NavItemWrap>
                <NavItemWrap>
                    <HelpItemSub>
                        <HelpTitle>
                            <a href=''>
                                Help <BsFillCaretDownFill style={{color: "#333"}} />
                            </a>
                        </HelpTitle>
                        <HelpSub>
                            <li><a href="">Customer Service</a></li>
                            <li><a href="">Dispute & Report</a></li>
                            <li><a href="">Live Chat</a></li>
                        </HelpSub>
                    </HelpItemSub>
                    <BuyerProtection>
                            <a href=''>
                                Buyer Protection
                            </a>
                    </BuyerProtection>
                    <MobileApp>
                            <a href=''>
                                <BsTablet /> App
                            </a>
                    </MobileApp>
                </NavItemWrap>
                <PersonalInfo>
                    <WishList>
                        <a href=""><BsSuitHeart /> 
                            <span className='text'>Whish List</span>
                        </a>
                    </WishList>
                    <UserAccount>
                        <UserAccountPort onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                            <a><BsPerson style={{color: "#333", fontSize: "20px", alignItems: "center"}} /> 
                                <span className='text'>Account</span> <BsFillCaretDownFill style={{color: "#333"}} />
                            </a>
                        </UserAccountPort>
                        {isShown && (<UserAccountMain>
                            <UserSignIn>
                                <p className='welcomeWrap'>Welcome to Animall!</p>
                                <JoinButton>
                                    <a href="" className='joinButton'>Join</a>
                                    <a href="" className='signInButton'>Sign in</a>
                                </JoinButton>
                                <i className="Line"></i>
                                <QuickEntry>
                                    <li><a href="">My Order</a></li>
                                    <li><a href="">Message Center</a></li>
                                    <li><a href="">Wish List</a></li>
                                    <li><a href="">My Favorite Store</a></li>
                                    <li><a href="">My Coupon</a></li>
                                </QuickEntry>
                            </UserSignIn>
                        </UserAccountMain>)}
                    </UserAccount>
                </PersonalInfo>
            </NavGlobal>
        </LightHouseWrap>
    </LightHouse>
  )
}

export default TopNav

const LightHouse = styled.div`
    position: relative;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    background-color: #fafafa;
    z-index: 22;
    font-size: 12px;

`

const LightHouseWrap = styled.div`
    
`

const NavGlobal = styled.div `
    position: absolute;
    right: 0;
    top: 0;
`

const NavItemWrap = styled.div `
    float: left;
    position: relative;
    padding: 0 4px;

    ::after{
        content: "";
        position: absolute;
        width: 1px;
        height: 16px;
        overflow: hidden;
        top: 11px;
        right: 0;
        border-right: 1px solid #ccc;

    }

`

const NavItemSub  = styled.div `
    position: relative;
    float: left;
    height: 39px;
    line-height: 39px;

`

const SellerTitle = styled.span`
    position: relative;
    display: block;
    padding: 0 24px 0 10px;
    color: #333;
    cursor: pointer;
    line-height: 39px;
    font-size: 12px;

`

const SellerLogin = styled.ul`
    display: none;
    position: absolute;
    top: 33px;
    left: -1px;
    background-color: #fff;
    z-index: 2;
    list-style: none;
    width: auto;
`

// Help Items
const HelpItemSub = styled.div`
    position: relative;
    float: left;
    height: 39px;
    line-height: 39px;
`

const HelpTitle = styled.span`
    position: relative;
    display: block;
    padding: 0 24px 0 10px;
    color: #333;
    cursor: pointer;
    line-height: 39px;
    font-size: 12px;
    
`

const HelpSub = styled.ul`
    display: none;
    position: absolute;
    top: 33px;
    left: -1px;
    background-color: #fff;
    z-index: 2;
    width: auto;

    li{
        list-style: none;
        margin-left: 0;
    }

    a{
        display: block;
        padding:0 10px;
        line-height: 35px;
        white-space: nowrap;
        height: 35px;
    }
`

const BuyerProtection = styled.div`
    position: relative;
    float: left;
    height: 39px;
    line-height: 39px;
    padding: 0 8px;

    a{
        margin: 0;
        padding: 0;
        color: #333;
        cursor: pointer;
    }
`

const MobileApp = styled.div`
    padding: 0 8px;
    position: relative;
    float: left;
    height: 39px;
    line-height: 39px;
`

const BuyerTitle = styled.span`

`

const PersonalInfo = styled.div`
    float: left;
    padding: 0 4px;
    position: relative;
`

const WishList = styled.div`
    position: relative;
    padding: 0 8px;
    float: left;
    height: 39px;
    line-height: 39px;

    .text{
        margin-left: 4px;
    }
`

const UserAccount = styled.div`
    position: relative;
    float: left;
    line-height: 39px;
    height: 39px;

    .text{
        margin-left: 4px;
    }

    &:hover{
        background-color: #fff;
        margin: -1px -1px 0;
        height: 35px;
        border: 1px solid #e8e8e8;
        border-bottom: 0;
        z-index: 33;
        box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, .04);
    }
`



const UserAccountPort = styled.div`
    display: inline-block;
    position: relative;
    padding: 0 8px;
`

const UserAccountMain = styled.div`
    position: absolute;
    font-size: 13px;
    display: block;
    background-color: #fff;
    top: 33px;
    right: -1px;
    padding-top: 15px;
    width: 242px;
    border: 1px solid #e8e8e8;
    color: #656565;
    z-index: 12;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .1);

    a{
        cursor: pointer;
    }
`


const UserSignIn = styled.div`
    display: block;
    padding: 0 16px;

    .welcomeWrap{
        line-height: 20px;
        display: block;
        font-weight: 400;
        font-size: 14px;
    }

    .Line{
        border-bottom: 1px solid #f2f2f2;
        display: block;
        margin: 10px 16px 0;
        height: 0;
    }
`

const JoinButton = styled.p`
    display: block;
    margin-top: 10px;
    font-weight: 400;

    .joinButton{
        background-color: #0574b5;
        color: #fff;
        border-radius: 2px;
        width: 100px;
        text-align: center;
        display: inline-block;
        font-weight: 700;
        padding: 6px 0;
        line-height: 20px;

    }

    .signInButton{
        background-color: #fff1f1;
        color: #0574b5;
        margin-left: 4px;

        border-radius: 2px;
        font-weight: 700;
        padding: 6px 0;
        width: 100px;
        text-align: center;
        display: inline-block;
        line-height: 20px;
    }
`
const QuickEntry = styled.ul`
    margin-bottom: 8px;
    padding: 0;

    li{
        list-style: none;
        margin-left: 0;

    }

    a{
        display: block;
        line-height: 32px;
        height: 32px;
        white-space: nowrap;
        position: relative;
        color: #333;
        cursor: pointer;
    }

`