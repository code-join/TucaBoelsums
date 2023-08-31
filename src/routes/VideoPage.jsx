// CSS
import 'video-react/dist/video-react.css';
import './VideoPage.css';

// React Router
import { Link } from 'react-router-dom';

// Paths
import { routes } from '../assets/data/routes.js';

// ReactAudio
import {
	Player,
	ControlBar,
	ReplayControl,
	ForwardControl,
	CurrentTimeDisplay,
	TimeDivider,
	PlaybackRateMenuButton,
	VolumeMenuButton,
} from 'video-react';

// Video
import video from '../assets/video/video.mp4';

const VideoPage = () => {
	return (
		<div className="video-page">
			<Player poster="/assets/poster.png">
				<source src={video} />

				<ControlBar>
					<ReplayControl seconds={5} order={1.1} />
					<ForwardControl seconds={5} order={1.2} />
					<CurrentTimeDisplay order={4.1} />
					<TimeDivider order={4.2} />
					<PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
					<VolumeMenuButton disabled />
				</ControlBar>
			</Player>
			<div id="div-voltar-video">
				<Link to={`${routes[0].path}`} id="link-voltar-video">
					Voltar
				</Link>
			</div>
		</div>
	);
};

export default VideoPage;
