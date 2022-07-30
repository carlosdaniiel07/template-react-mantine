import { Button, Center, Container, Group, Text } from '@mantine/core';
import { useCountStore } from '~/context';

export default function () {
  const count = useCountStore(({ count }) => count);
  const incrementCounter = useCountStore(({ increment }) => increment);
  const resetCounter = useCountStore(({ reset }) => reset);

  return (
    <Container>
      <Text color='dimmed' size='xl'>
        Contagem: {count}
      </Text>

      <Center>
        <Group spacing='xs'>
          <Button onClick={incrementCounter}>Incrementar</Button>
          <Button onClick={resetCounter} variant='outline'>
            Resetar
          </Button>
        </Group>
      </Center>
    </Container>
  );
}
