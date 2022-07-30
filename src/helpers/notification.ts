import { showNotification } from '@mantine/notifications';

export const showSuccess = (title: string, message: string): void => {
  showNotification({
    title,
    message,
    color: 'lime',
  });
};

export const showError = (title: string, message: string): void => {
  showNotification({
    title,
    message,
    color: 'red',
  });
};

export default {
  showSuccess,
  showError,
};
