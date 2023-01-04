import React from 'react';
import { NavElement } from '../../styles/Portfolio.styles';

interface portfolioProp {
	title: string;
	selectedCategory: (arg0: string) => void;
}

const Nav = ({ title, selectedCategory }: portfolioProp): JSX.Element => {
	return (
		<NavElement onClick={() => selectedCategory(title)}>{title}</NavElement>
	);
};

export default Nav;
