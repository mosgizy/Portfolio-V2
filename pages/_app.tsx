import type { AppProps } from 'next/app';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import GlobalStyle, { SectionContainer } from '../styles/Global.styles';
import Navbar from '../components/navbar/Navbar';
import { SectionBackground, SectionWrapper } from '../styles/Global.styles';
import gsap from 'gsap';
import { useRef, useEffect, useState } from 'react';
import { store } from '../store/store';
import { Provider } from 'react-redux';

const url = 'https://my-json-server.typicode.com/mosgizy/portfolio-api-V2/';

function MyApp({ Component, pageProps }: AppProps) {
	const app = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState<boolean>(false);

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

	return (
		<Provider store={store}>
			<GlobalStyle />
			<Navbar setSlide={setActive} />
			<SectionWrapper active={active}>
				<SectionBackground>
					<div className="overlay"></div>
				</SectionBackground>
				<SectionContainer ref={app}>
					<Component {...pageProps} />
				</SectionContainer>
			</SectionWrapper>
		</Provider>
	);
}

export default MyApp;
