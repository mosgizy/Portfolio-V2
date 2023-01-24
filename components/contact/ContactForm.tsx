import { useRef, useReducer } from 'react';
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
import emailjs from '@emailjs/browser';

const reducer = (state: any, action: any) => {
	return { ...state, ...action };
};

const initialState: formData = {
	name: '',
	email: '',
	message: '',
};

const ContactForm = (apiKey: { apiKey: any }): JSX.Element => {
	const formRef = useRef<any>();
	const [formData, setFormData] = useReducer(reducer, initialState);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const sendEmail = () => {
		formRef.current &&
			emailjs
				.sendForm(
					'default_service',
					'hasterisk',
					formRef?.current,
					'fuIcQY8uP3X-KbV9F'
				)
				.then(
					(result) => {
						console.log(result);
						setFormData({
							name: '',
							email: '',
							message: '',
						});
					},
					(error) => {
						console.log(error);
					}
				);
	};

	return (
		<Wrapper>
			<FormGroup ref={formRef} onSubmit={handleSubmit(sendEmail)}>
				<Inputwrapper>
					<InputContainer>
						<input
							{...register('user_name', { required: true })}
							placeholder="Enter your name"
							id="name"
							value={formData.name}
							onChange={(e) => setFormData({ name: e.target.value })}
						/>
						<label htmlFor="name">
							<FontAwesomeIcon icon={faUser} />
						</label>
					</InputContainer>
					{errors.name && <p>name is required.</p>}
				</Inputwrapper>
				<Inputwrapper>
					<InputContainer>
						<input
							{...register('user_email', {
								pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
								required: true,
							})}
							value={formData.email}
							onChange={(e) => setFormData({ email: e.target.value })}
							placeholder="Enter your email"
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
							placeholder="Enter your message..."
							value={formData.message}
							onChange={(e) => setFormData({ message: e.target.value })}
						/>
						<label htmlFor="message">
							<FontAwesomeIcon icon={faEnvelope} />
						</label>
					</InputContainer>
					{errors.comment && <p>Please leave a comment.</p>}
				</Inputwrapper>
				<BtnWrapper>
					<SubmitBtn type="submit">Drop in the mail</SubmitBtn>
				</BtnWrapper>
			</FormGroup>
		</Wrapper>
	);
};

export default ContactForm;
