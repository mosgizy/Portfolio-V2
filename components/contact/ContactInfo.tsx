import { Info, InfoContainer, Wrapper } from '../../styles/Contact.styles';

const ContactInfo = (): JSX.Element => {
	return (
		<Wrapper>
			<InfoContainer>
				<Info>
					<h6>country</h6>
					<span>canada</span>
				</Info>
				<Info>
					<h6>city</h6>
					<span>lagos</span>
				</Info>
				<Info>
					<h6>street</h6>
					<span>wastab adugo odogwu lane</span>
				</Info>
			</InfoContainer>
		</Wrapper>
	);
};

export default ContactInfo;
