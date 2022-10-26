import {
	CardContent,
	CardHeader,
	CardWrapper,
	Date,
	Link,
	Place,
} from '../../styles/History.styles';

const Card = (): JSX.Element => {
	return (
		<CardWrapper>
			<CardHeader>
				<Place>
					<h5>university of toronto</h5>
					<span>student</span>
				</Place>
				<Date>jan 2021 - may 2022 </Date>
			</CardHeader>
			<CardContent>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
				temporibus quis reprehenderit nihil aut atque reiciendis corrupti
				commodi dignissimos at?
			</CardContent>
			<Link></Link>
			<div className="ring">
				<div className="beat"></div>
			</div>
		</CardWrapper>
	);
};

export default Card;
