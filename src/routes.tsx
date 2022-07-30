import { Route, Routes } from 'react-router-dom';
import { Layout } from '~/components';

import Home from '~/pages/home';

export default function () {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  );
}
