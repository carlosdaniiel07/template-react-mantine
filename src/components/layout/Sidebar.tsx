import {
  Navbar,
  Center,
  useMantineColorScheme,
  Stack,
} from '@mantine/core';
import {
  DeviceAnalytics,
  Home2,
  Icon,
  Logout,
  MoonStars,
  Sun,
} from 'tabler-icons-react';
import { useLocation } from 'react-router-dom';
import { LogoSmall } from '~/components/shared';
import { SidebarItem } from './SidebarItem';

type MenuItem = {
  route: string;
  icon: Icon;
};

const menuItems: MenuItem[] = [
  {
    route: '/',
    icon: Home2,
  },
  {
    route: '/dashboard',
    icon: DeviceAnalytics,
  },
];

export function Sidebar() {
  const location = useLocation();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Navbar width={{ base: 80 }} p='md'>
      <Center>
        <LogoSmall />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify='center' spacing={0}>
          {menuItems.map((item, index) => (
            <SidebarItem
              {...item}
              key={`sidebar-item-${index}`}
              active={item.route === location.pathname}
            />
          ))}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify='center' spacing={0}>
          <SidebarItem
            icon={colorScheme === 'dark' ? Sun : MoonStars}
            onClick={() => toggleColorScheme()}
          />
          <SidebarItem icon={Logout} />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
