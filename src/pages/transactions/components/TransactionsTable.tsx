import { memo } from 'react';
import {
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  useMantineTheme,
} from '@mantine/core';
import { Trash } from 'tabler-icons-react';
import { Transaction } from '~/domain/entities';
import { TransactionStatus, TransactionType } from '~/domain/enums';

type TransactionsTableProps = {
  data: Transaction[];
  onRemove(index: number): void;
};

function TransactionsTableComponent({
  data,
  onRemove,
}: TransactionsTableProps) {
  const theme = useMantineTheme();
  const rows = data.map((item, index) => (
    <tr key={String(index)}>
      <td>
        <Text size='sm'>{item.description}</Text>
      </td>
      <td>
        <Badge
          color={item.type === TransactionType.Input ? 'green' : 'red'}
          variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
        >
          {item.type === TransactionType.Input ? 'Entrada' : 'Saída'}
        </Badge>
      </td>
      <td>
        <Text size='sm' color='dimmed'>
          {item.date?.toLocaleDateString() ?? 'N/A'}
        </Text>
      </td>
      <td>
        <Text size='sm' color='dimmed'>
          {Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(item.value ?? 0)}
        </Text>
      </td>
      <td>
        {item.status === TransactionStatus.Pending && (
          <Badge
            color='red'
            variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
          >
            Pendente
          </Badge>
        )}
        {item.status === TransactionStatus.Scheduled && (
          <Badge
            color='yellow'
            variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
          >
            Agendado
          </Badge>
        )}
        {item.status === TransactionStatus.Completed && (
          <Badge
            color='green'
            variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
          >
            Efetivado
          </Badge>
        )}
      </td>
      <td>
        <Group spacing={0} position='right'>
          <ActionIcon color='red' onClick={() => onRemove(index)}>
            <Trash size={16} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Table sx={{ minWidth: 800 }} verticalSpacing='sm'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tipo</th>
          <th>Data</th>
          <th>Valor</th>
          <th>Status</th>
          <th />
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export const TransactionsTable = memo(TransactionsTableComponent);
