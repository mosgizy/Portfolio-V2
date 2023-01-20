import {
	CurrentPage,
	NavContainer,
	NavContent,
	NavContentHeader,
	NavContentWrapper,
	NavIcon,
	NavItem,
	NavItemWrapper,
	NavWrapper,
} from '../../styles/Navbar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faEllipsisVertical,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Overlay } from '../../styles/Global.styles';
import Sidebar from '../sidebar/Sidebar';
import { useRouter } from 'next/router';
interface NavInterface {
	setSlide: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setSlide }: NavInterface): JSX.Element => {
	const [active, setActive] = useState<boolean>(true);
	const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);
	const [currentPage, setCurrentPage] = useState<string>('');
	const { pathname } = useRouter();

	const handleToggle = () => {
		setActive((prev) => !prev);
		setSlide(active);
	};

	useEffect(() => {
		setCurrentPage(pathname === '/' ? 'home' : pathname.slice(1));
	}, [pathname]);

	return (
		<NavContainer>
			<NavWrapper>
				<NavIcon
					active={toggleSidebar}
					translateX="200"
					onClick={() => setToggleSidebar((prev) => !prev)}
				>
					<FontAwesomeIcon icon={faEllipsisVertical} />
				</NavIcon>
				<NavIcon active={active} translateX="" onClick={handleToggle}>
					<FontAwesomeIcon icon={faBars} />
				</NavIcon>
			</NavWrapper>
			<NavContentWrapper>
				<Overlay onClick={handleToggle} active={active}></Overlay>
				<NavContent
					active={active}
					width="230"
					right="0"
					left="unset"
					translateX="230"
					nav
				>
					<NavContentHeader>
						<NavIcon onClick={handleToggle}>
							{active ? (
								<FontAwesomeIcon icon={faBars} />
							) : (
								<FontAwesomeIcon icon={faXmark} />
							)}
						</NavIcon>
					</NavContentHeader>
					<CurrentPage active={active}>{currentPage}</CurrentPage>
					<NavItemWrapper active={active}>
						<NavItem
							onClick={handleToggle}
							className={`${currentPage === 'home' ? 'active' : ''}`}
						>
							<Link href="/">home</Link>
						</NavItem>
						<NavItem
							onClick={handleToggle}
							className={`${currentPage === 'portfolio' ? 'active' : ''}`}
						>
							<Link href="/portfolio">portfolio</Link>
						</NavItem>
						<NavItem
							onClick={handleToggle}
							className={`${currentPage === 'history' ? 'active' : ''}`}
						>
							<Link href="/history">history</Link>
						</NavItem>
						<NavItem
							onClick={handleToggle}
							className={`${currentPage === 'contact' ? 'active' : ''}`}
						>
							<Link href="/contact">contact</Link>
						</NavItem>
					</NavItemWrapper>
				</NavContent>
			</NavContentWrapper>
			<Sidebar active={toggleSidebar} setActive={setToggleSidebar} />
		</NavContainer>
	);
};

export default Navbar;
