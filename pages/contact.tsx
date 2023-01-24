import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import { ContactInfoWrapper, ContactWrapper } from '../styles/Contact.styles';

const url = 'https://my-json-server.typicode.com/mosgizy/portfolio-api-V2/';

const Contact = ({
	...key
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
	return (
		<ContactWrapper className="animate">
			{/* <h4>contact information</h4>
			<ContactInfoWrapper>
				<ContactInfo />
				<ContactInfo />
				<ContactInfo />
			</ContactInfoWrapper> */}
			<h4>get in touch</h4>
			<ContactForm apiKey={key.data} />
		</ContactWrapper>
	);
};

export const getServerSideProps: GetServerSideProps<{
	data: string;
}> = async () => {
	const res = await fetch(url + 'api_key');
	const data: string = await res.json();

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

export default Contact;
