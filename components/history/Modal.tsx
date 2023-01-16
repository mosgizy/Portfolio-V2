import {
	ModalCard,
	ModalContent,
	ModalElement,
	ModalWrapper,
} from '../../styles/History.styles';
import cert from '../../resources/images/certificate.jpg';
import Image, { StaticImageData } from 'next/image';
import Carousel from 'nuka-carousel';

interface prop {
	// children: JSX.Element;
	index?: number;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	cardType: string;
	dataSource?: any;
}

const Modal = ({ index, setShowModal, cardType }: prop): JSX.Element => {
	const datas = [
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ex libero! Dolores laudantium ullam repudiandae asperiores perferendis beatae aliquid, sapiente sint molestiae nostrum obcaecati quod itaque illum praesentium nobis animi. Hic ipsum facere molestias repudiandae rerum ratione architecto est possimus, blanditiis minima. Porro cupiditate delectus laborum distinctio consectetur illo minima, ab iusto culpa, sunt dolor! Eligendi quisquam assumenda, possimus rem voluptatibus sapiente maiores numquam, porro obcaecati mollitia placeat quibusdam quos molestiae dolorum animi dolor ut nobis fugit ad, qui sit. Saepe voluptatibus eligendi, explicabo possimus delectus doloremque iusto placeat culpa deserunt alias quos beatae. Itaque sunt eos aperiam placeat quasi et possimus accusantium culpa nesciunt hic officiis nostrum, at ratione asperiores quo exercitationem delectus assumenda praesentium! Eos rem nihil tenetur. A aut quod nam deleniti suscipit ullam non iste vero eos fugit! Ab, sequi tenetur animi laudantium veniam ducimus nihil quod incidunt alias iusto commodi aspernatur deserunt voluptates? Quo tempora illum repudiandae, ab assumenda illo facilis earum modi libero voluptatum nobis saepe dignissimos quae, ducimus debitis harum amet consequuntur accusamus. Quibusdam mollitia expedita atque eius nulla magni quidem sunt praesentium tempore. Eos sunt maxime doloribus perferendis ipsa amet, commodi cupiditate voluptate officia eaque quos dolore excepturi voluptatum labore minus debitis!',
	];

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
					{datas?.map((data: string, index: number) => {
						return (
							<ModalContent key={index} onClick={(e) => e.stopPropagation()}>
								{cardType === 'certificate' && <ModalCard>{data}</ModalCard>}
							</ModalContent>
						);
					})}
				</Carousel>
			</ModalElement>
		</ModalWrapper>
	);
};

export default Modal;
