import {
	CardContainerWrapper,
	CardContent,
	CardHeader,
	CardWrapper,
	Date,
	Place,
} from '../../styles/History.styles';

interface cardProps {
	place: string;
	title: string;
	date: string;
	info: string;
	linkText?: string;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	setIndex: React.Dispatch<React.SetStateAction<number>>;
	index: number;
	// cardType?: string;
	// setCardType?: React.Dispatch<React.SetStateAction<string>>;
}

const Card = ({
	place,
	title,
	date,
	info,
	linkText,
	setShowModal,
	setIndex,
	index,
}: cardProps): JSX.Element => {
	const modalPopup = () => {
		setShowModal((prev) => !prev);
		setIndex(index);
	};

	return (
		<CardContainerWrapper>
			<CardWrapper>
				<CardHeader>
					<Place>
						<h5>{place}</h5>
						<span>{title}</span>
					</Place>
					<Date>{date} </Date>
				</CardHeader>
				<CardContent>{info}</CardContent>
				{linkText && (
					<span className="link" onClick={modalPopup}>
						{linkText} <span className="arrow">{right}</span>
					</span>
				)}
				<div className="ring">
					<div className="beat"></div>
				</div>
			</CardWrapper>
		</CardContainerWrapper>
	);
};

export default Card;

const right = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
		<path
			d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
			fill="currentColor"
		/>
	</svg>
);
