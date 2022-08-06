import { TransactionStatus, TransactionType } from '~/domain/enums';
import { BaseEntity } from './base.entity';

export type Transaction = BaseEntity & {
  description: string;
  type: TransactionType;
  value: number;
  date: Date;
  status: TransactionStatus;
};
