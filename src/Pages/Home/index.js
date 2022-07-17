import { Link } from 'react-router-dom';

import {
  Card,
  Container, InputSearchContainer, Header, ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Leandro Filié</strong>
            <small>instagram</small>
          </div>
          <span>leandro@email.com</span>
          <span>(16) 99999-99999</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>

          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Leandro Filié</strong>
            <small>instagram</small>
          </div>
          <span>leandro@email.com</span>
          <span>(16) 99999-99999</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>

          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Leandro Filié</strong>
            <small>instagram</small>
          </div>
          <span>leandro@email.com</span>
          <span>(16) 99999-99999</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>

          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

    </Container>
  );
}
