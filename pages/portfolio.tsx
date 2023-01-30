import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import {
	NavWrapper,
	PortfolioContainer,
	PortfolioWrapper,
} from '../styles/Portfolio.styles';
import Nav from '../components/portfolio/Nav';
import Project from '../components/portfolio/Project';
import { ProjectsI } from '../resources/interface/project';
import { useState } from 'react';
import { URL } from '../resources/constants/url';

const Portfolio = ({
	...projects
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
	const [categories, setCategories] = useState<ProjectsI[]>(projects.data);

	const selectCategory = (categoryName: string) => {
		if (categoryName === 'all categories') {
			setCategories(projects.data);
			return;
		}

		const category = projects.data.filter((project) => {
			return project.category === categoryName;
		});

		setCategories(category);
	};

	const navItems = projects.data.reduce(
		(navItems: string[], navItem) => {
			if (!navItems.includes(navItem.category)) {
				navItems.push(navItem.category);
			}
			return navItems;
		},
		['all categories']
	);

	return (
		<PortfolioWrapper className="animate">
			<NavWrapper>
				{navItems.map((navItem, index) => (
					<Nav key={index} title={navItem} selectedCategory={selectCategory} />
				))}
			</NavWrapper>

			<PortfolioContainer>
				{categories.map((project) => {
					const { id, title, img, source, demo, description } = project;
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
	const res = await fetch(URL + 'projects');
	const data: ProjectsI[] = await res.json();

	console.log(data);

	if (!data) {
		return {
			redirect: {
				destination: '/',
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
