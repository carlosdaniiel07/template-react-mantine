import { BaseEntity } from '~/domain/entities';
import http from '~/infra/http';

const path = 'v1/samples';

const findAll = async (): Promise<BaseEntity[]> => {
  return await http.get<BaseEntity[]>(path);
};

export default {
  findAll,
};
