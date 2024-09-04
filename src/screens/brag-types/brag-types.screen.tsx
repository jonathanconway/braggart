import { Layout, Screen, ScreenHeader } from "@/common";

import { BragTypesEditor } from "./brag-types-editor";

export function BragTypesScreen() {
  return (
    <Screen>
      <Layout direction="column" gap="1rem">
        <ScreenHeader>
          &gt;<h2>Manage brag types</h2>
        </ScreenHeader>

        <main>
          <BragTypesEditor />
        </main>
      </Layout>
    </Screen>
  );
}
