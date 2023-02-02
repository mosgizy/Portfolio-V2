import Link from 'next/link';
import { Buttton } from '../styles/Home.styles';
import { Error, ErrorPageWrapper } from '../styles/Global.styles';

const ErrorPage = () => {
	return (
		<ErrorPageWrapper>
			<h2>
				Oops! This is awkward... you're looking for something that doesn't
				actually exist
			</h2>
			<Error>
				<span>4</span>
				<span>0</span>
				<span>4</span>
			</Error>
			<Buttton>
				<Link href="/">Go back friend, go back</Link>
			</Buttton>
		</ErrorPageWrapper>
	);
};

export default ErrorPage;
