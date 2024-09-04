import { AddBragButton, Heading, Layout, useBragTypes } from "@/common";
import { createAddBragScreenPath } from "@/screens/add-brag";

import { useKeycharShortcuts } from "./use-keychar-shortcuts.hook";

export function HomeAddBrag() {
  const { bragTypes } = useBragTypes();

  useKeycharShortcuts(bragTypes);

  return (
    <Layout direction="column" gap="1rem">
      <Heading as="h3">Add brag</Heading>
      <Layout gap="0.5rem">
        {bragTypes.map(({ id, title, keychar: character }) => (
          <AddBragButton
            key={title}
            to={createAddBragScreenPath(id)}
            character={character}
            title={title}
          />
        ))}
      </Layout>
    </Layout>
  );
}
