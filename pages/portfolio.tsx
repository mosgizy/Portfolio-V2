import {
	NavWrapper,
	PortfolioContainer,
	PortfolioWrapper,
} from '../styles/Portfolio.styles';
import Nav from '../components/portfolio/Nav';
import Project from '../components/portfolio/Project';
import portfolioImg from '../resources/images/portfolio.jpg';

const Portfolio = (): JSX.Element => {
	const navItems = ['all categories', 'landing page', 'javascript', 'react'];
	return (
		<PortfolioWrapper className="animate">
			<NavWrapper>
				{navItems.map((navItem, index) => (
					<Nav key={index} title={navItem} />
				))}
			</NavWrapper>

			<PortfolioContainer>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
				<Project
					title={'my portfolio'}
					img={portfolioImg}
					link={'hasterisk.vercel.app'}
					code={''}
					about={''}
				/>
			</PortfolioContainer>
		</PortfolioWrapper>
	);
};

export default Portfolio;
