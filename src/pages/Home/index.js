import { Container } from './styles';

import Loader from '../../components/Loader';

import useHome from './useHome';
import InputSearch from './components/InputSearch';
import Header from './components/Header';
import ErrorStatus from './components/ErrorStatus';
import EmptyList from './components/EmptyList';
import SearchNotFound from './components/SearchNotFound';
import ContactsList from './components/ContactsList';
import Modal from '../../components/Modal';

export default function Home() {
  const {
    isLoading,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    isDeleteModalVisible,
    isLoadingDelete,
    contacts,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    filteredContacts,
    handleTryAgain,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}

      <Header
        hasError={hasError}
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

      {hasError && (<ErrorStatus onTryAgain={handleTryAgain} />)}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && <EmptyList />}

          {(contacts.length > 0 && filteredContacts < 1) && (
            <SearchNotFound searchTerm={searchTerm} />
          )}

          <ContactsList
            orderBy={orderBy}
            filteredContacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
            onToggleOrderBy={handleToggleOrderBy}
          />

          <Modal
            danger
            title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
            cancelLabel="Cancelar"
            confirmLabel="Deletar"
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
            visible={isDeleteModalVisible}
            isLoading={isLoadingDelete}
          >
            <p>Esta ação não poderá ser desfeita</p>
          </Modal>

        </>
      )}

    </Container>
  );
}
