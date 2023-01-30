import { useState } from 'react';
import { NavElement } from '../../styles/Portfolio.styles';

interface portfolioProp {
	title: string;
	selectedCategory: (arg0: string) => void;
}

const Nav = ({ title, selectedCategory }: portfolioProp): JSX.Element => {
	const [handleActive, setHandleActive] = useState<string>('all categories');

	const handleClick = (e: any) => {
		e.preventDefault();
		setHandleActive(e.target.innerHTML);
		selectedCategory(title);
	};

	return (
		<NavElement active={handleActive === title} onClick={handleClick}>
			{title}
		</NavElement>
	);
};

export default Nav;
