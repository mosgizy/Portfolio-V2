import { useState } from 'react';
import Card from '../../components/history/Card';
import Modal from '../../components/history/Modal';
import { ContactWrapper } from '../../styles/Contact.styles';
import {
	CardContainer,
	HistoryContainer,
	HistoryWrapper,
} from '../../styles/History.styles';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { HistoryI, recommendationI } from '../../resources/interface/history';
import { useEffect, useReducer } from 'react';
import { URL } from '../../resources/constants/url';

const History = ({
	...data
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [index, setIndex] = useState<number>(0);

	const [prop, setProp] = useReducer(
		(state: any, action: any) => {
			return { ...state, ...action };
		},
		{ modal: false, index: 0, cardType: '', data: [] }
	);

	useEffect(() => {
		setProp({ data: data.data });
	}, []);

	return (
		<ContactWrapper>
			<HistoryWrapper>
				<HistoryContainer>
					<h4>education</h4>
					<CardContainer>
						{prop.data.map((dataSet: recommendationI, key: any) => {
							const { id, name, title, duration, intro, recommendation } =
								dataSet;

							return (
								<Card
									key={key}
									place={name}
									title={title}
									date={duration}
									info={intro}
									linkText="Check details"
									setShowModal={setShowModal}
									setIndex={setIndex}
									index={id}
								/>
							);
						})}
					</CardContainer>
				</HistoryContainer>
			</HistoryWrapper>
			{showModal && (
				<Modal
					setShowModal={setShowModal}
					index={index}
					dataSource={prop.data}
				/>
			)}
		</ContactWrapper>
	);
};

export const getServerSideProps: GetServerSideProps<{
	data: HistoryI;
}> = async () => {
	const res = await fetch(URL + 'history');
	const data: HistoryI = await res.json();

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

export default History;
