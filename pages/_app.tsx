import type { AppProps } from 'next/app';
import GlobalStyle, { SectionContainer } from '../styles/Global.styles';
import Navbar from '../components/navbar/Navbar';
import { SectionBackground, SectionWrapper } from '../styles/Global.styles';
import gsap from 'gsap';
import { useRef, useLayoutEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	const app = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState<boolean>(false);

	useLayoutEffect(() => {
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
		<>
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
		</>
	);
}

export default MyApp;
