import { AppShell } from '@mantine/core';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <AppShell
      padding='xl'
      fixed
      navbar={<Sidebar />}
      footer={<Footer />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
}
