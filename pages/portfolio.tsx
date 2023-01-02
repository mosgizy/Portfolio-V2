import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import {
	NavWrapper,
	PortfolioContainer,
	PortfolioWrapper,
} from '../styles/Portfolio.styles';
import Nav from '../components/portfolio/Nav';
import Project from '../components/portfolio/Project';
import portfolioImg from '../resources/images/portfolio.jpg';
import { useEffect, useState } from 'react';
import { ProjectsI } from '../helpers/interface';

const url = 'https://my-json-server.typicode.com/mosgizy/portfolio-api-V2/';

const Portfolio = ({
	...projects
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
	const navItems = projects.data.reduce(
		(navItems: string[], navItem) => {
			if (!navItems.includes(navItem.category)) {
				navItems.push(navItem.category);
			}
			return navItems;
		},
		['all categories']
	);

	useEffect(() => {
		console.log(projects.data);
		// console.log(navItems);
	}, []);

	return (
		<PortfolioWrapper className="animate">
			<NavWrapper>
				{navItems.map((navItem, index) => (
					<Nav key={index} title={navItem} />
				))}
			</NavWrapper>

			<PortfolioContainer>
				{projects.data.map((project) => {
					const { id, title, img, source, demo, description } = project;
					// console.log(project);
					return (
						<Project
							key={id}
							title={title}
							img={img}
							link={demo}
							code={source}
							about={description}
						/>
					);
				})}
			</PortfolioContainer>
		</PortfolioWrapper>
	);
};

export const getServerSideProps: GetServerSideProps<{
	data: ProjectsI[];
}> = async () => {
	const res = await fetch(url + 'projects');
	const data: ProjectsI[] = await res.json();

	if (!data) {
		return {
			redirect: {
				destination: '/portfolio',
				permanent: false,
			},
		};
	}

	return {
		props: {
			data,
		},
	};
};

export default Portfolio;
