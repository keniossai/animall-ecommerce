import React from 'react'
import styled from 'styled-components'
import Category from './Category'
import Advertise from './Advertise'
import Ranking from './Ranking'

const Homepage = () => {
	return (
			<HomeFirstScreen>
				<Container>
					<HomeScreenMain>
						{/* <ChannelMain>
							<Zones>
								<DealZone>
									<a href=''>Summer OOTD</a>
									<a href=''>Super Deal</a>
									<a href=''>New User Zone</a>
								</DealZone>
							</Zones>
						</ChannelMain> */}
						<Category />
						<Advertise />
					</HomeScreenMain>
						<Ranking />
				</Container>
			</HomeFirstScreen>
	)
}

export default Homepage

const HomeFirstScreen = styled.div`
	position: relative;
`
const Container = styled.div`
	margin-right: auto;
	margin-left: auto;
	padding-left: 0;
	padding-right: 0;
	width: 1200px;
`
const HomeScreenMain = styled.div`
	position: relative;
	width: 100%;
	padding-left: 240px;
	margin-top: 16px;
`

const ChannelMain = styled.div`
	height: 40px;
`

const Zones = styled.div``

const DealZone = styled.div`
	height: 40px;
	overflow: hidden;

	a {
		position: relative;
		display: inline-block;
		line-height: 40px;
		padding: 0 15px;
		font-size: 16px;
		font-weight: 700;
		color: #222;
		text-decoration: none;
	}
`

