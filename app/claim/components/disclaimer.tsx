import {
  Group,
  Notification,
  Text,
  Title
} from "@mantine/core";

export const Disclaimer = () => {
  return (
    <Notification
      title={
        <Group gap={4}>
          <Title order={6}>THIS IS A TESTNET</Title>
        </Group>
      }
      withCloseButton={false}
      color="orange"
      withBorder
      bg="gray.0"
    >
      <Text c="black">
        You will rewarded with <b>TESTNET $AZDAT</b> tokens.
      </Text>
    </Notification>
  );
};
