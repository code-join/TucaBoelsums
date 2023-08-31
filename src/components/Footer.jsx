// CSS
import './Footer.css';

const Footer = () => {
	const email = 'codejoin.dev@gmail.com';
	const subject = 'Agregador de Links';
	const msg = `Para criar seu agregador de links customizado, entre em contato com:
	(31) 99183-8573 / (21) 98016-7955`;

	const sendEmail = () => {
		const url = `mailto:${email}?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(msg)}`;
		window.open(url, '_blank');
	};

	return (
		<div className="footer">
			<p>
				Criado por
				<a href="#" rel="noreferrer" onClick={sendEmail}>
					{' '}
					CodeJoin
				</a>{' '}
				&copy;2023
			</p>
		</div>
	);
};

export default Footer;
