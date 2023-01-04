import Link from 'next/link';
import {
	BannerContent,
	BannerWrapper,
	Buttton,
	HomeContainer,
	HomeWrapper,
	Intro,
} from '../../styles/Home.styles';

interface homeI {
	about: string[];
	intro: string[];
}

const Home = ({ about, intro }: homeI): JSX.Element => {
	return (
		<HomeContainer>
			<HomeWrapper className="animate">
				<BannerWrapper>
					<div className="overlay"></div>
				</BannerWrapper>
				<BannerContent>
					<>
						<Intro>
							{intro.map((text, index) => {
								return <h1 key={index}>{text}</h1>;
							})}
						</Intro>
						<div>
							<p>
								{'<'}
								<i>code</i>
								{'>'}
							</p>

							{about.map((para, index) => {
								return <p key={index}>{para}</p>;
							})}

							<p>
								{'</'}
								<i>code</i>
								{'>'}
							</p>
						</div>
						<Buttton>
							<Link href="/portfolio">explore now</Link>
						</Buttton>
					</>
				</BannerContent>
			</HomeWrapper>
		</HomeContainer>
	);
};

export default Home;
