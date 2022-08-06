import create from 'zustand';
import { Transaction } from '~/domain/entities';

type TransactionStore = {
  data: Transaction[];
  add(item: Transaction): void;
  remove(index: number): void;
};

export const useTransactionStore = create<TransactionStore>((set) => ({
  data: [],
  add: (item) =>
    set((state) => ({
      data: [...state.data, item],
    })),
  remove: (index) =>
    set((state) => {
      const newData = [...state.data];
      newData.splice(index, 1);

      return {
        data: newData,
      };
    }),
}));
