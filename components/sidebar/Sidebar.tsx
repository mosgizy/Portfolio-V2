import { NavContent, NavIcon } from '../../styles/Navbar.styles';
import {
	SidebarContentWrapper,
	SidebarHeader,
	SidebarHeaderAvatart,
	SidebarHeaderInfo,
	SidebarHeaderWrapper,
	SideBarSections,
	SidebarSectionWrapper,
	SocialMediaLinks,
} from '../../styles/Sidebar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEllipsisVertical,
	faCheck,
	faDownload,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Overlay } from '../../styles/Global.styles';
import Link from 'next/link';
import { useLayoutEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../helpers/hooks';
import { fetchSidebar } from '../../store/slice/portfolioSlice';
interface sideBarInterface {
	active: boolean;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ active, setActive }: sideBarInterface): JSX.Element => {
	const handleToggle = () => {
		setActive((prev) => !prev);
	};

	const { image, name, email, developer, country, city } = useAppSelector(
		(state) => state.portfolio.about.profile
	);
	const { skills, socialMedia } = useAppSelector(
		(state) => state.portfolio.about
	);
	const dispatch = useAppDispatch();

	const socialIcons = [TwitterIcon, GithubIcon, LinkedinIcon, MediumIcon];

	useLayoutEffect(() => {
		dispatch(fetchSidebar());
	}, []);

	return (
		<SidebarContentWrapper>
			<Overlay onClick={handleToggle} active={active}></Overlay>
			<NavContent
				active={active}
				width="290"
				left="0"
				right="unset"
				translateX="-290"
			>
				<SidebarHeader>
					<div className="toggle">
						<NavIcon onClick={handleToggle}>
							<FontAwesomeIcon icon={faEllipsisVertical} />
						</NavIcon>
					</div>
					<SidebarHeaderWrapper>
						<SidebarHeaderAvatart>
							<Image layout="fill" src={image} alt="Avatar" />
						</SidebarHeaderAvatart>
						<SidebarHeaderInfo>
							<h5>{name}</h5>
							<p>{email}</p>
							<p>{developer}</p>
						</SidebarHeaderInfo>
					</SidebarHeaderWrapper>
				</SidebarHeader>
				<SidebarSectionWrapper>
					<SideBarSections>
						<ul>
							<li>
								<h6>residence:</h6>
								<p>{country}</p>
							</li>
							<li>
								<h6>city:</h6>
								<p>{city}</p>
							</li>
						</ul>
					</SideBarSections>
					<SideBarSections>
						<ul className="skills">
							{Object.entries(skills.main).map((skill, index) => {
								return (
									<li key={index}>
										<h6>{skill[0]}</h6>
										<Image src={skill[1]} width={3} height={3} alt={skill[0]} />
									</li>
								);
							})}
						</ul>
					</SideBarSections>
					<SideBarSections>
						<ul className="knowledge">
							{skills.others.map((skill, index) => {
								return (
									<li>
										<FontAwesomeIcon icon={faCheck} />
										<p>
											{skill[0]}, {skill[1]}
										</p>
									</li>
								);
							})}
						</ul>
					</SideBarSections>
					<div className="download">
						<Link
							href="https://rxresu.me/hasterisk/moshood-opeyemi-odugbesan"
							target="_blank"
						>
							download cv
						</Link>
						<FontAwesomeIcon icon={faDownload} />
					</div>
				</SidebarSectionWrapper>
				<SocialMediaLinks>
					<ul>
						{Object.entries(socialMedia).map((socialIcon, index) => {
							const icon = socialIcons[index];
							return (
								<li key={index}>
									<Link href={socialIcon[1].link}>
										<span>{icon}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</SocialMediaLinks>
			</NavContent>
		</SidebarContentWrapper>
	);
};

export default Sidebar;

const FacebookIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path
			d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
			fill="currentColor"
		/>
	</svg>
);

const GithubIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
		<path
			d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
			fill="currentColor"
		/>
	</svg>
);

const TwitterIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path
			d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
			fill="currentColor"
		/>
	</svg>
);

const LinkedinIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
		<path
			d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
			fill="currentColor"
		/>
	</svg>
);

const MediumIcon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
		<path
			d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"
			fill="currentColor"
		/>
	</svg>
);
