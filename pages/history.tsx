import Card from '../components/history/Card';
import { ContactWrapper } from '../styles/Contact.styles';
import {
	CardContainer,
	CardWrapper,
	HistoryContainer,
	HistoryWrapper,
} from '../styles/History.styles';

const History = (): JSX.Element => {
	return (
		<ContactWrapper>
			<HistoryWrapper>
				<HistoryContainer>
					<h4>education</h4>
					<CardContainer>
						<Card />
						<Card />
					</CardContainer>
				</HistoryContainer>
				<HistoryContainer>
					<h4>work history</h4>
					<CardContainer>
						<Card />
						<Card />
						<Card />
						<Card />
					</CardContainer>
				</HistoryContainer>
			</HistoryWrapper>
		</ContactWrapper>
	);
};

export default History;
