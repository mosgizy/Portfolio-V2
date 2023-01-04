import type { AppProps } from 'next/app';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import GlobalStyle, { SectionContainer } from '../styles/Global.styles';
import Navbar from '../components/navbar/Navbar';
import { SectionBackground, SectionWrapper } from '../styles/Global.styles';
import gsap from 'gsap';
import { useRef, useEffect, useState } from 'react';
import About from '../resources/interface/sideBar';

const url = 'https://my-json-server.typicode.com/mosgizy/portfolio-api-V2/';

function MyApp({ Component, pageProps }: AppProps) {
	const app = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState<boolean>(false);
	const [sidebarProps, setSidebarProps] = useState<About>();

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(
				'.animate',
				{
					transform: `scale(0.95)`,
					opacity: 0,
				},
				{
					transform: `scale(1)`,
					opacity: 1,
					duration: 1,
					stagger: 2,
				}
			);
		}, app);
		return () => ctx.revert();
	});

	useEffect(() => {
		if (pageProps.data?.profile) {
			setSidebarProps(pageProps.data);
		}
		console.log(pageProps.data.profile);
	}, []);

	return (
		<>
			<GlobalStyle />
			{sidebarProps && <Navbar setSlide={setActive} data={sidebarProps} />}
			<SectionWrapper active={active}>
				<SectionBackground>
					<div className="overlay"></div>
				</SectionBackground>
				<SectionContainer ref={app}>
					<Component {...pageProps} />
				</SectionContainer>
			</SectionWrapper>
		</>
	);
}

export default MyApp;
