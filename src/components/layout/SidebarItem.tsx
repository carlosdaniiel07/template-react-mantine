import { UnstyledButton, createStyles } from '@mantine/core';
import { Icon } from 'tabler-icons-react';
import { Link } from 'react-router-dom';

type SidebarItemProps = {
  icon: Icon;
  route?: string;
  active?: boolean;
  onClick?(): void;
};

export function SidebarItem({
  icon,
  route,
  active,
  onClick,
}: SidebarItemProps) {
  return route ? (
    <Link to={route}>
      <Button onClick={onClick} active={active} icon={icon} />
    </Link>
  ) : (
    <Button onClick={onClick} active={active} icon={icon} />
  );
}

type ButtonProps = {
  icon: Icon;
  active?: boolean;
  onClick?(): void;
};

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
    },
  },
}));

function Button({ onClick, icon: Icon, active }: ButtonProps) {
  const { classes, cx } = useStyles();

  return (
    <UnstyledButton
      onClick={onClick}
      className={cx(classes.link, { [classes.active]: active })}
    >
      <Icon />
    </UnstyledButton>
  );
}
