import { Container } from './styles';

export default function FormGroup({ children, error, isLoading }) {
  return (
    <Container>
      <div className="form-item">
        { children }

        {isLoading && <div className="loader" />}
      </div>
      { error && <small>{ error }</small>}
    </Container>
  );
}
