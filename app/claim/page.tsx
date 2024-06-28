"use client";

import { Icon } from "@iconify/react";
import {
  Button,
  Container,
  Flex,
  Grid,
  Stack,
  Text,
  Title,
  Image,
  Alert,
  Group,
} from "@mantine/core";
import Link from "next/link";
import { Notification } from "@mantine/core";
import { Disclaimer } from "./components/disclaimer";

const instructions = [
  {
    title: "We all buy a lot on Amazon",
    description:
      "From your monthly subscriptions to your one off electronics orders, your amazon data is valuable.",
  },
  {
    title: "Take action",
    description:
      "But should they really be the only ones who reap the benefits of our purchase data?",
  },
  {
    title: "Minimum requirements",
    description:
      "In order to ensure the value of our collective dataset, we require: US-based accounts at least 1 year old with 5 or more orders.",
  },
];

export default function Page() {
  return (
    <Container>
      <Grid>
        <Grid.Col span={{ sm: 12, md: 6 }}>
          <Stack align="stretch" justify="center" gap="lg">
            <Title order={4}>
              Convert your Amazon purchases into $AMZDAT
            </Title>
            {instructions.map((instruction, i) => (
              <Stack gap="sm" key={i}>
                <Title order={6} c="brand-2">
                  {instruction.title}
                </Title>
                <Text fw="500">{instruction.description}</Text>
              </Stack>
            ))}
            <Flex justify="flex-end">
              <Link href="/claim/upload">
                <Button color="brand-3">Get started</Button>
              </Link>
            </Flex>
          </Stack>
        </Grid.Col>
        <Grid.Col span={5} offset={1} visibleFrom="md">
          <Image radius="md" src="/images/amazon_box.jpeg" />
          <Disclaimer />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
