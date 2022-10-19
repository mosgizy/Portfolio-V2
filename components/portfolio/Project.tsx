import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Projectcard, ProjectInfo } from '../../styles/Portfolio.styles';

interface projectInterface {
	title: string;
	img: StaticImageData;
	link: string;
	code: string;
	about: string;
}

const Project = ({ title, img, link, code }: projectInterface): JSX.Element => {
	return (
		<Link href="#">
			<Projectcard>
				<Image src={img} alt={title} />
				<ProjectInfo>
					<h5>{title}</h5>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
						aliquam.
					</p>
					<Link href="#">read more</Link>
				</ProjectInfo>
			</Projectcard>
		</Link>
	);
};

export default Project;
