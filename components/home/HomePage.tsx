import Link from 'next/link';
import {
	BannerContent,
	BannerWrapper,
	Buttton,
	HomeContainer,
	HomeWrapper,
	Intro,
} from '../../styles/Home.styles';
import { useAppSelector, useAppDispatch } from '../../helpers/hooks';
import { setLoader } from '../../store/slice/portfolioSlice';
import { useEffect } from 'react';

const Home = (): JSX.Element => {
	const { info, intro } = useAppSelector(
		(state) => state.portfolio.about.profile
	);

	const dispatch = useAppDispatch();

	useEffect(() => {
		info ? dispatch(setLoader(false)) : dispatch(setLoader(true));
	}, [info]);

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
								<span>
									{'<'}
									<i>code</i>
									{'>'}
								</span>
								{info.map((para, index) => {
									return <span key={index}>{para}</span>;
								})}
								<span>
									{'</'}
									<i>code</i>
									{'>'}
								</span>
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
