import React, { useState } from 'react';
import ProjectList from './ProjectList';
import projectImg from '../../images/projects.png';
const Project = () => {
	const [items] = useState([
		{
			id: 1,
			title: 'La More Collections Website',
			description: `An E-commerce Progressive Web Application(PWA) built for selling shoes and bags. I built this web app using MongoDB,Express,Reactjs,Node(MERN)`,
			img: 'https://res.cloudinary.com/cmcwebcode/image/upload/v1590182980/onlineshop_k7vpng.png',
			source: 'https://github.com/cmcWebCode40/online_store_website',
			website: 'https://lamorecollectionstore.web.app/'
		},
		{
			id: 2,
			title: 'Editorial Community Service Website',
			description: `A Web Application  basically built for updating our host communities about all events happening around them organized by corps member (A service group). I fully developed the UI (Frontend) and also consumed the different api (REST) endpoints developed by the backend engineer
        This app was built with HTML,CSS/SASS & REACTjs`,
			img: 'https://res.cloudinary.com/cmcwebcode/image/upload/v1587170307/soft3_xaapbw.png',
			source: 'https://github.com/cmcWebCode40/Editorial_fullStack',
			website: 'http://editorialcdsgroup.live/'
		},
		{
			id: 3,
			title: 'Soft Soundz Music Zone',
			description: `A Web App built for music  downloads and updates on current celebrity news world wide developer built with HTML5,CSS3/SASS REACTjs,TYPEDSCRIPT & GRAPHQL NB:"the admin dashboard is still in progress"`,
			img: 'https://res.cloudinary.com/cmcwebcode/image/upload/v1587170296/soft1_jiv0id.png',
			source: 'https://github.com/cmcWebCode40/musical_crew_website/',
			website: 'https://soft-soundz.netlify.app/'
		},
		{
			id: 4,
			title: 'My Portfolio Website',
			description:
				'A Web App just to display all my works and coming up blog posts built with Reactjs ',
			img: 'https://res.cloudinary.com/cmcwebcode/image/upload/v1587170282/soft4_su7dkv.png',
			source: 'https://github.com/cmcWebCode40/my_portfolio_site',
			website: 'https://chinweikemichael.tech'
		},
		{
			id: 5,
			title: 'Developers Quiz App ',
			description: `A Progressive Web App (PWA) Built for that a user take a quick HTML quiz just for fun. This app was an internship task from (investa Ng) , built with HTML5, CSS3, JAVASCRIPT and workbox for the PWA `,
			img: 'https://res.cloudinary.com/cmcwebcode/image/upload/v1587170269/soft2_k9saon.png',
			source: 'https://github.com/cmcWebCode40/simple_todo_list',
			website: 'https://cmcwebcode40.github.io/Quiz_app_investa_task/'
		}
	]);
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
