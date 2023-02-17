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

const Project = ({
	title,
	img,
	link,
	code,
	about,
}: projectInterface): JSX.Element => {
	return (
		<Projectcard>
			<Link href={code} target="_blank">
				<Image src={img} layout="fill" alt={title} />
			</Link>
			<ProjectInfo>
				<h5>{title}</h5>
				<p>{about}</p>
				<Link href={link} target="_blank">
					check demo
				</Link>
			</ProjectInfo>
		</Projectcard>
	);
};

export default Project;
