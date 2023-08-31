// CSS
import './Video.css';

// React Router
import { Link } from 'react-router-dom';

// Paths
import { routes } from '../assets/data/routes.js';

const Video = () => {
	return (
		<div className="video">
			<Link to={`${routes[2].path}`} id="link-video">
				Vídeo
			</Link>
		</div>
	);
};

export default Video;
