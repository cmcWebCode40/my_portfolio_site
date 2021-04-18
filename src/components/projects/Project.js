import React, { useState } from 'react';
import ProjectList from './ProjectList';
import projectImg from '../../images/projects.png';
import { myWorks } from './data';
const Project = () => {
	const [items] = useState(myWorks);
	return (
		<div className='project'>
			<h2>
				<img src={projectImg} height='200' width='200' alt='about me' />
			</h2>
			<div className='grid'>
				{items.map(item => (
					<div key={item.id}>
						<ProjectList
							title={item.title}
							description={item.description}
							img={item.img}
							source={item.source}
							website={item.website}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Project;
