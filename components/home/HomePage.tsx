import Link from 'next/link';
import {
	BannerContent,
	BannerWrapper,
	Buttton,
	HomeContainer,
	HomeWrapper,
} from '../../styles/Home.styles';

const Home = (): JSX.Element => {
	return (
		<HomeContainer>
			<HomeWrapper className="animate">
				<BannerWrapper>
					<div className="overlay"></div>
				</BannerWrapper>
				<BannerContent>
					<h1>Discover my Amazing Art Space!</h1>
					<p>
						{'<'}
						<i>code</i>
						{'>'}

						<span>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Deleniti, aperiam.
						</span>

						{'</'}
						<i>code</i>
						{'>'}
					</p>
					<Buttton>
						<Link href="/portfolio">explore now</Link>
					</Buttton>
				</BannerContent>
			</HomeWrapper>
		</HomeContainer>
	);
};

export default Home;
