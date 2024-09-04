import { Layout, Screen, ScreenHeader } from "@/common";

import { AddBragForm } from "./add-brag-form";

export function AddBragScreen() {
  return (
    <Screen>
      <Layout direction="column" gap="1rem">
        <ScreenHeader>
          &gt;<h2>Add brag</h2>
        </ScreenHeader>

        <main>
          <AddBragForm />
        </main>
      </Layout>
    </Screen>
  );
}
