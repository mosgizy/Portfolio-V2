import {
	ModalContent,
	ModalElement,
	ModalWrapper,
} from '../../styles/History.styles';
import cert from '../../resources/images/certificate.jpg';
import Image from 'next/image';
import Carousel from 'nuka-carousel';

interface prop {
	// children: JSX.Element;
	index?: number;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	cardType: string;
	dataSource?: any;
}

const Modal = ({ index, setShowModal, cardType }: prop): JSX.Element => {
	const datas = [cert, cert, cert, cert];

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<ModalWrapper onClick={() => closeModal()}>
			<ModalElement>
				<Carousel
					wrapAround={true}
					animation={'zoom'}
					// scrollMode={page}
					swiping={true}
					dragging={true}
					dragThreshold={0}
					enableKeyboardControls={true}
				>
					{datas.map((data, index) => {
						return (
							<ModalContent key={index} onClick={(e) => e.stopPropagation()}>
								{cardType === 'certificate' && <Image src={data} alt="cert" />}
							</ModalContent>
						);
					})}
				</Carousel>
			</ModalElement>
		</ModalWrapper>
	);
};

export default Modal;
