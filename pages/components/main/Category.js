import React from 'react'
import styled from 'styled-components'

const Category = () => {
  return (
        <CategoryMain>
            <Categories>
                <NewCategoryMain>
                    <CategoryContent>
                        <a href=''>
                            <span>Categories</span>
                        </a>
                    </CategoryContent>
                    <CategoryListBox>
                        <dl className='cl-items-women'>
                            <dt className='cat-name'>
                                <span>
                                    <a href=''>Women's Fashion</a>
                                </span>
                            </dt>
                        </dl>
                        <dl className='cl-items-men'>
                            <dt className='cat-name'>
                                <span>
                                    <a href=''>Men's Fashion</a>
                                </span>
                            </dt>
                        </dl>
                        <dl className='cl-items-tech'>
                            <dt className='cat-name'>
                                <span>
                                    <a href=''>Phone & Accessories</a>
                                </span>
                            </dt>
                        </dl>
                        <dl className='cl-items-computer'>
                            <dt className='cat-name'>
                                <span>
                                    <a href=''>Computer & Tablets</a>
                                </span>
                            </dt>
                        </dl>
                        <dl className='cl-items-jewelry'>
                            <dt className='cat-name'>
                                <span>
                                    <a href=''>Jewelry & Watches</a>
                                </span>
                            </dt>
                        </dl>
                        <dl className='cl-items-electronic'>
                            <dt className='cat-name'>
                                <span>
                                    <a href=''>Electronics & Appliances</a>
                                </span>
                            </dt>
                        </dl>
                        <dl className='cl-items-bags'>
                            <dt className='cat-name'>
                                <span>
                                    <a href=''>Bags & Shoes</a>
                                </span>
                            </dt>
                        </dl>
                        <dl className='cl-items-beauty'>
                            <dt className='cat-name'>
                                <span>
                                    <a href=''>Beauty, Health & Hair</a>
                                </span>
                            </dt>
                        </dl>
                        <dl className='cl-items-kids'>
                            <dt className='cat-name'>
                                <span>
                                    <a href=''>Toys, Kids & Babies</a>
                                </span>
                            </dt>
                        </dl>
                        <dl className='cl-items-sport'>
                            <dt className='cat-name'>
                                <span>
                                    <a href=''>Sports & Fun</a>
                                </span>
                            </dt>
                        </dl>
                        <dl className='cl-items-kitchen'>
                            <dt className='cat-name'>
                                <span>
                                    <a href=''>Home & Kitchen</a>
                                </span>
                            </dt>
                        </dl>
                    </CategoryListBox>
                </NewCategoryMain>
            </Categories>
        </CategoryMain>
  )
}

export default Category




// Category Styles
const CategoryMain = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 240px;
	height: 400px;
	border-radius: 8px;
	background-color: #fff;
	border: none;
    font-size: 13px;
`

const Categories = styled.div`
	position: absolute;
	top: -1px;
	left: 0;
	width: 240px;
	border-radius: 8px;
`

const NewCategoryMain = styled.div``

const CategoryContent = styled.div`
	height: 40px;
	line-height: 40px;
	padding-left: 40px;
	font-size: 14px;
	background-color: #fff;
	position: relative;
	overflow: hidden;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;

	&::before{
		content: "";
		position: absolute;
		left: 16px;
		top: 14px;
		background-image: url('https://ae01.alicdn.com/kf/HTB12uSfbzzuK1Rjy0Fp761EpFXap.png');
		width: 15px;
		height: 13px;
		background-size: 100% 100%;
	}
	
`
const CategoryListBox = styled.div`
    .cat-name{
        position: relative;
    }

    span{
        /* height: 43px; */
        padding-top: 5px;
        padding-left: 40px;
        position: relative;
        /* line-height: 30px; */

        /* position: relative;
        cursor: pointer;
        border-color: transparent;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        word-break: break-all; */
    }

    span::before{
        content: "";
        position: absolute;
        left: 10px;
        width: 24px;
        height: 24px;
        display: block;

        background-image: url('https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png');
        background-position: 0 -3780px;
        background-repeat: no-repeat;
    }

    .cl-items-men span::before{
        content: "";
        position: absolute;
        left: 10px;
        width: 24px;
        height: 24px;
        display: block;

        background-image: url('https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png');
        background-position: 0 -2807px;
        background-repeat: no-repeat;
    }

    .cl-items-tech span::before{
        content: "";
        position: absolute;
        left: 10px;
        width: 24px;
        height: 24px;
        display: block;

        background-image: url('https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png');
        background-position: 0 -2999px;
        background-repeat: no-repeat;
    }
    .cl-items-computer  span::before{
        content: "";
        position: absolute;
        left: 10px;
        width: 24px;
        height: 24px;
        display: block;

        background-image: url('https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png');
        background-position: 0 -675px;
        background-repeat: no-repeat;
    }
    .cl-items-jewelry  span::before{
        content: "";
        position: absolute;
        left: 10px;
        width: 24px;
        height: 24px;
        display: block;

        background-image: url('https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png');
        background-position: 0 -1697px;
        background-repeat: no-repeat;
    }
    .cl-items-electronic  span::before{
        content: "";
        position: absolute;
        left: 10px;
        width: 24px;
        height: 24px;
        display: block;

        background-image: url('https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png');
        background-position: 0 -763px;
        background-repeat: no-repeat;
    }
    .cl-items-bags  span::before{
        content: "";
        position: absolute;
        left: 10px;
        width: 24px;
        height: 24px;
        display: block;

        background-image: url('https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png');
        background-position: 0 -399px;
        background-repeat: no-repeat;
    }
    .cl-items-beauty  span::before{
        content: "";
        position: absolute;
        left: 10px;
        width: 24px;
        height: 24px;
        display: block;

        background-image: url('https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png');
        background-position: 0 -487px;
        background-repeat: no-repeat;
    }
    .cl-items-kids  span::before{
        content: "";
        position: absolute;
        left: 10px;
        width: 24px;
        height: 24px;
        display: block;

        background-image: url('https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png');
        background-position: 0 -1785px;
        background-repeat: no-repeat;
    }
    .cl-items-sport  span::before{
        content: "";
        position: absolute;
        left: 10px;
        width: 24px;
        height: 24px;
        display: block;

        background-image: url('https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png');
        background-position: 0 -3504px;
        background-repeat: no-repeat;
    }
    .cl-items-kitchen  span::before{
        content: "";
        position: absolute;
        left: 10px;
        width: 24px;
        height: 24px;
        display: block;

        background-image: url('https://ae01.alicdn.com/kf/Hef9c4bcb621f4b1ebc69160e597897edU.png');
        background-position: 0 -1571px;
        background-repeat: no-repeat;
    }

    a{
        padding: 0;
        margin: 0;
    }
`