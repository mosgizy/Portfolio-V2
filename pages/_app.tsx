import type { AppProps } from 'next/app';
import GlobalStyle, { SectionContainer } from '../styles/Global.styles';
import Navbar from '../components/navbar/Navbar';
import { SectionBackground, SectionWrapper } from '../styles/Global.styles';
import { useState } from 'react';
import { store } from '../store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
	const [active, setActive] = useState<boolean>(false);

	return (
		<Provider store={store}>
			<GlobalStyle />
			<Navbar setSlide={setActive} />
			<SectionWrapper active={active}>
				<SectionBackground>
					<div className="overlay"></div>
				</SectionBackground>
				<SectionContainer>
					<Component {...pageProps} />
				</SectionContainer>
			</SectionWrapper>
		</Provider>
	);
}

export default MyApp;
