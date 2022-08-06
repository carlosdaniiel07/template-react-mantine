import { useCallback, useState } from 'react';
import { Button, Container, Space } from '@mantine/core';
import { Plus } from 'tabler-icons-react';
import { AddTransactionModal, TransactionsTable } from './components';
import { Transaction } from '~/domain/entities';
import { delay, showSuccess } from '~/helpers/';
import { useTransactionStore } from '~/context';

export default function () {
  const [showAddModal, setShowAddModal] = useState(false);
  const { data, add, remove } = useTransactionStore();

  const handleAddTransaction = useCallback((transaction: Transaction): void => {
    setShowAddModal(false);
    add(transaction);

    delay(300).then(() =>
      showSuccess('Sucesso', 'Transação criada com sucesso')
    );
  }, []);

  const handleRemoveTransaction = useCallback((index: number): void => {
    remove(index);
    showSuccess('Sucesso', 'Transação removida com sucesso');
  }, []);

  return (
    <Container pt='xl'>
      <Button
        leftIcon={<Plus size={14} />}
        onClick={() => setShowAddModal(true)}
      >
        Novo
      </Button>
      <Space h='xs' />
      <TransactionsTable
        data={data}
        onRemove={handleRemoveTransaction}
      />

      <AddTransactionModal
        opened={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddTransaction}
      />
    </Container>
  );
}
