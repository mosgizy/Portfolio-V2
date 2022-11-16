import type { NextPage } from 'next';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import { ContactInfoWrapper, ContactWrapper } from '../styles/Contact.styles';

const Contact: NextPage = (): JSX.Element => {
	return (
		<ContactWrapper className="animate">
			<h4>contact information</h4>
			<ContactInfoWrapper>
				<ContactInfo />
				<ContactInfo />
				<ContactInfo />
			</ContactInfoWrapper>
			<h4>get in touch</h4>
			<ContactForm />
		</ContactWrapper>
	);
};

export default Contact;
