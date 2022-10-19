import React from 'react';
import { NavElement } from '../../styles/Portfolio.styles';

interface portfolioProp {
	title: string;
}

const Nav = ({ title }: portfolioProp): JSX.Element => {
	return <NavElement>{title}</NavElement>;
};

export default Nav;
