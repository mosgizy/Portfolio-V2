import {
	ModalContent,
	ModalElement,
	ModalWrapper,
} from '../../styles/History.styles';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { recommendationI } from '../../resources/interface/history';

interface prop {
	index?: number;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	cardType?: string;
	dataSource?: any;
}

const Modal = ({ index, setShowModal, dataSource }: prop): JSX.Element => {
	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<ModalWrapper onClick={() => closeModal()}>
			<ModalElement>
				<Carousel
					wrapAround={true}
					animation={'zoom'}
					// scrollMode={remainder}
					swiping={true}
					dragging={true}
					dragThreshold={0}
					// goToSlide={(index) => return index}
					slideIndex={index}
					enableKeyboardControls={true}
				>
					{dataSource?.map((data: recommendationI, index: number) => {
						return (
							<ModalContent key={index} onClick={(e) => e.stopPropagation()}>
								<Image
									src={data.recommendation}
									alt={data.name}
									layout="fill"
								/>
							</ModalContent>
						);
					})}
				</Carousel>
			</ModalElement>
		</ModalWrapper>
	);
};

export default Modal;
