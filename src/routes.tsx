import { Route, Routes } from 'react-router-dom';
import { Layout } from '~/components';

import Home from '~/pages/home';
import Transactions from '~/pages/transactions';
import Users from '~/pages/users';

export default function () {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='transactions' element={<Transactions />} />
        <Route path='users' element={<Users />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  );
}
