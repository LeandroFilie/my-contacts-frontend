import Spinner from '../Spinner';
import { StyledButton } from './styles';

export default function Button({
  type, disabled, children, isLoading, danger, onClick,
}) {
  return (
    <StyledButton type={type} disabled={disabled || isLoading} danger={danger} onClick={onClick}>
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}
