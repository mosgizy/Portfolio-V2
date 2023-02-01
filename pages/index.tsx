import Head from 'next/head';
import HomePage from '../components/home/HomePage';
import { useEffect } from 'react';
import About from '../resources/interface/sideBar';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useAppDispatch } from '../helpers/hooks';
import { home } from '../store/slice/portfolioSlice';
import { URL } from '../resources/constants/url';
import { useAppSelector } from '../helpers/hooks';
import { LoaderAnimation, LoaderWrapper } from '../styles/Global.styles';

const Home = (data: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const dispatch = useAppDispatch();
	const loader = useAppSelector((state) => state.portfolio.loader);
	const { name } = useAppSelector((state) => state.portfolio.about.profile);

	useEffect(() => {
		const homePage = {
			info: data.data.profile.info,
			intro: data.data.profile.intro,
		};
		dispatch(home(homePage));
	}, []);

	useEffect(() => {
		console.log(loader);
	}, [loader]);

	return (
		<div>
			<Head>
				<title>Moshood Ope | Software Developer</title>
				<link rel="icon" href="/logo.jpg" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1,shrink-to-fit=no"
				/>
				<meta name="author" content="Moshood Ope" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="keywords"
					content="moshood ope portfolio search webdevelopment asterisk frontend front-end developer hasterisk"
				/>
				<meta
					name="description"
					content="I am a frontend developer, I love to solve problems whether it's finding the most elegant way to write lines of code or figuring out which code fits best into progression. I am committed to learning and self-development to achieve better results. I am always open to learning and constructive feedback.I create interactive and responsive websites and web apps on a daily basis in order me grow and learn a ton of new stuff as a developer my github kind of scream that. My current tech stack in HTML, CSS, JavaScript and React."
				/>
			</Head>

			{loader && (
				<LoaderWrapper>
					<p>{name}</p>
					<LoaderAnimation></LoaderAnimation>
				</LoaderWrapper>
			)}

			<HomePage />
		</div>
	);
};

export const getServerSideProps: GetServerSideProps<{
	data: About;
}> = async () => {
	const res = await fetch(URL + 'about');
	const data: About = await res.json();

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

export default Home;
