// CSS
import './JanelaModal.css';

// PropTypes
import PropTypes from 'prop-types';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Icon
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const JanelaModal = ({ show, fechaModal }) => {
  const sendMessageWpp = (e) => {
    const apiWpp = 'https://api.whatsapp.com/send?phone=';
    const phoneNumber = e.target.textContent.replace(/\D/g, '');
    window.open(`${apiWpp}${phoneNumber}`);
  };

  const email = 'tucaboelsums@gmail.com';

  const sendEmail = () => {
    const url = `mailto:${email}?`;
    window.open(url, '_blank');
  };

  return (
    <div className="janela-modal">
      <Modal
        show={show}
        onHide={fechaModal}
        centered={true}
        size="sm"
        animation={true}
        fullscreen="sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Contatos:
            <p>Clique no whatsapp ou e-mail</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="wpp">
            <a href="#" id="wpp1" onClick={sendMessageWpp}>
              <FaWhatsapp className="fa-wpp" /> (31) 99855-1707
            </a>
            <a href="#" id="wpp2" onClick={sendEmail}>
              <MdOutlineMail className="fa-wpp" /> tucaboelsums
            </a>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
					<Button variant="secondary" onClick={fechaModal}>
						Botão de fechar
					</Button>
					<Button variant="primary" onClick={fechaModal}>
						Botão de salvar
					</Button>
				</Modal.Footer> */}
      </Modal>
    </div>
  );
};

JanelaModal.propTypes = {
  fechaModal: PropTypes.func,
  show: PropTypes.bool,
};

export default JanelaModal;
