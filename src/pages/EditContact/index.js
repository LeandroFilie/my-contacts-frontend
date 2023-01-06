import PageHeader from '../../components/PageHeader';
import Loader from '../../components/Loader';
import ContactForm from '../../components/ContactForm';
import useEditContact from './useEditContact';

export default function EditContact() {
  const {
    isLoading, contactName, contactFormRef, handleSubmit,
  } = useEditContact();

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title={isLoading ? 'Carregando...' : `Editar ${contactName}`} />
      <ContactForm buttonLabel="Salvar alterações" ref={contactFormRef} onSubmit={handleSubmit} />
    </>
  );
}
