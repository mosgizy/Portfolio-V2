import type { NextPage } from 'next';
import { useState } from 'react';
import Card from '../../components/history/Card';
import Modal from '../../components/history/Modal';
import { ContactWrapper } from '../../styles/Contact.styles';
import {
	CardContainer,
	HistoryContainer,
	HistoryWrapper,
} from '../../styles/History.styles';

const History: NextPage = (): JSX.Element => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [index, setIndex] = useState<number>(0);
	const [cardType, setCardType] = useState<string>('');

	return (
		<ContactWrapper>
			<HistoryWrapper>
				<HistoryContainer>
					<h4>education</h4>
					<CardContainer>
						<Card
							place="university of toronto"
							title="student"
							date="jan 2021 - may 2022"
							info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
				temporibus quis reprehenderit nihil aut atque reiciendis corrupti
				commodi dignissimos at?"
							linkText="Diploma"
							setShowModal={setShowModal}
							setIndex={setIndex}
							index={0}
							cardType="certificate"
							setCardType={setCardType}
						/>
						<Card
							place="university of toronto"
							title="student"
							date="jan 2021 - may 2022"
							info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
				temporibus quis reprehenderit nihil aut atque reiciendis corrupti
				commodi dignissimos at?"
							linkText="Diploma"
							setShowModal={setShowModal}
							setIndex={setIndex}
							index={1}
							cardType="certificate"
							setCardType={setCardType}
						/>
					</CardContainer>
				</HistoryContainer>
				<HistoryContainer>
					<h4>work history</h4>
					<CardContainer>
						<Card
							place="university of toronto"
							title="student"
							date="jan 2021 - may 2022"
							info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
				temporibus quis reprehenderit nihil aut atque reiciendis corrupti
				commodi dignissimos at?"
							linkText="Diploma"
							setShowModal={setShowModal}
							setIndex={setIndex}
							index={2}
							cardType="history"
							setCardType={setCardType}
						/>
						<Card
							place="university of toronto"
							title="student"
							date="jan 2021 - may 2022"
							info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
				temporibus quis reprehenderit nihil aut atque reiciendis corrupti
				commodi dignissimos at?"
							linkText="Diploma"
							setShowModal={setShowModal}
							setIndex={setIndex}
							index={3}
							cardType="history"
							setCardType={setCardType}
						/>
						<Card
							place="university of toronto"
							title="student"
							date="jan 2021 - may 2022"
							info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
				temporibus quis reprehenderit nihil aut atque reiciendis corrupti
				commodi dignissimos at?"
							linkText="Diploma"
							setShowModal={setShowModal}
							setIndex={setIndex}
							index={4}
							cardType="history"
							setCardType={setCardType}
						/>
					</CardContainer>
				</HistoryContainer>
			</HistoryWrapper>
			{showModal && <Modal cardType={cardType} setShowModal={setShowModal} />}
		</ContactWrapper>
	);
};

export default History;
