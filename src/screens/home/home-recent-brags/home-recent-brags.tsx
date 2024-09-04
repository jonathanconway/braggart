import { Heading, Layout, useBrags } from "@/common";
import { formatDateTime } from "@/utils";

export function HomeRecentBrags() {
  const { recentBrags } = useBrags();

  return (
    <Layout direction="column" gap="1rem">
      <Heading as="h3">Recent brags</Heading>

      <table>
        {recentBrags.map((brag) => (
          <tr>
            <td>{brag.bragType.title}</td>
            <td>{formatDateTime(brag.created)}</td>
          </tr>
        ))}
      </table>
    </Layout>
  );
}
