import {
  Box,
  Button,
  Group,
  Modal,
  NumberInput,
  Radio,
  Select,
  SimpleGrid,
  TextInput,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { Transaction } from '~/domain/entities';
import { TransactionStatus, TransactionType } from '~/domain/enums';

type AddTransactionModalProps = {
  opened: boolean;
  onClose(): void;
  onSubmit(transaction: Transaction): void;
};

export function AddTransactionModal({
  opened,
  onClose,
  onSubmit,
}: AddTransactionModalProps) {
  const form = useForm<Transaction>({
    initialValues: {
      description: '',
      type: TransactionType.Input,
      value: 0,
      date: new Date(),
      status: TransactionStatus.Pending,
    },
    validate: {
      description: (value) =>
        value?.length === 0 ? 'Descrição é obrigatória' : null,
    },
  });

  const handleSubmit = (): void => {
    const validation = form.validate();

    if (validation.hasErrors) {
      return;
    }

    onSubmit(form.values);
    form.reset();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title='Nova transação'
      centered
      size='md'
    >
      <Box>
        <TextInput
          label='Descrição'
          required
          {...form.getInputProps('description')}
        />
        <Radio.Group
          label='Entrada / Saída'
          required
          my='md'
          {...form.getInputProps('type')}
        >
          <Radio value={TransactionType.Input} label='Entrada' />
          <Radio value={TransactionType.Output} label='Saída' />
        </Radio.Group>
        <SimpleGrid cols={2}>
          <div>
            <NumberInput
              label='Valor (R$)'
              required
              hideControls
              {...form.getInputProps('value')}
            />
          </div>
          <div>
            <DatePicker
              label='Data'
              inputFormat='DD/MM/YYYY'
              required
              {...form.getInputProps('date')}
            />
          </div>
        </SimpleGrid>
        <Select
          label='Status'
          data={[
            {
              label: 'Pendente',
              value: TransactionStatus.Pending,
            },
            {
              label: 'Agendado',
              value: TransactionStatus.Scheduled,
            },
            {
              label: 'Efetivado',
              value: TransactionStatus.Completed,
            },
          ]}
          required
          mt='md'
          {...form.getInputProps('status')}
        />
      </Box>

      <Group position='center' mt='xl'>
        <Button variant='outline' onClick={() => handleSubmit()}>
          Confirmar
        </Button>
      </Group>
    </Modal>
  );
}
