import { useState } from 'react';
import {
	BtnWrapper,
	FormGroup,
	InputContainer,
	Inputwrapper,
	SubmitBtn,
	Wrapper,
} from '../../styles/Contact.styles';
import { useForm } from 'react-hook-form';
import { formData } from '../../resources/interface/formInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactForm = (): JSX.Element => {
	const [formData, setFormData] = useState<formData>();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<Wrapper>
			<FormGroup
				onSubmit={handleSubmit((data) =>
					setFormData({
						name: data?.name,
						email: data?.email,
						message: data?.message,
					})
				)}
			>
				<Inputwrapper>
					<InputContainer>
						<input {...register('name')} placeholder="name" id="name" />
						<label htmlFor="name">
							<FontAwesomeIcon icon={faUser} />
						</label>
					</InputContainer>
					{errors.name && <p>name is required.</p>}
				</Inputwrapper>
				<Inputwrapper>
					<InputContainer>
						<input
							{...register('email', {
								pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
								required: true,
							})}
							placeholder="email"
							id="email"
						/>
						<label htmlFor="email">
							<FontAwesomeIcon icon={faAt} />
						</label>
					</InputContainer>
					{errors.email && <p>email is required.</p>}
				</Inputwrapper>
				<Inputwrapper>
					<InputContainer>
						<textarea
							{...register('message', { required: true })}
							id="comment"
							placeholder="message"
						/>
						<label htmlFor="message">
							<FontAwesomeIcon icon={faEnvelope} />
						</label>
					</InputContainer>
					{errors.comment && <p>Please leave a comment.</p>}
				</Inputwrapper>
				<BtnWrapper>
					<SubmitBtn type="submit">send message</SubmitBtn>
				</BtnWrapper>
			</FormGroup>
		</Wrapper>
	);
};

export default ContactForm;
