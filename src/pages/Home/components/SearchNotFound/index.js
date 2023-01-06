import magnifierQuestion from '../../../../assets/images/magnifier-question.svg';
import { Container } from './styles';

export default function SearchNotFound({ searchTerm }) {
  return (
    <Container>
      <img src={magnifierQuestion} alt="Não encontrado" />

      <span>
        Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>.
      </span>
    </Container>
  );
}
