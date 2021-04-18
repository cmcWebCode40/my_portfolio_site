import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { myWorks } from './data';

const ProjectDetails = ({ match }) => {
	const [project, setProject] = useState('');
	const [items] = useState(myWorks);

	const getProject = (id, data) => {
		data.filter(state => (state.title === id ? setProject(state) : null));
	};
	useEffect(() => {
		getProject(match.params.id, items);
	}, [match.params.id, items]);
	return (
		<div className='project-wrap'>
			<div className='project-details'>
				<h3>{project.title}</h3>
				<img src={project.img} alt='project shot' />
				<div className='project-details-body'>
					<p className='para'>
						{' '}
						<span role='img' aria-label='emoji'>
							👉
						</span>
						{project.description}
					</p>
					<div className='project-details-body-link'>
						<div>
							<FontAwesomeIcon
								style={{ marginRight: '0.7rem' }}
								icon={faGithub}
								size='1x'
								color='#f4f4f4'
							/>
							<a href={project.source} target='_blanck'>
								View Source
							</a>
						</div>
						<div>
							<span role='img' aria-label='emoji'>
								🚀
							</span>
							<a href={project.website} target='_blanck'>
								View Project
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
