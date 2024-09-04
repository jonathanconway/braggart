import { FormLabel as ChakraFormLabel } from "@chakra-ui/react";
import { ChangeEvent } from "react";

import { TextBox } from "../text-box";

import { BragMetricsEditorProps } from "./metrics-editor.types";
import { useBragMetricsEditor } from "./use-brag-metrics-editor.hook";

export function BragMetricsEditor({
  metrics,
  ...restProps
}: BragMetricsEditorProps) {
  const { metricValues, setMetricValue } = useBragMetricsEditor({ metrics });

  function handleMetricValueChange(metricTypeId: string) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setMetricValue(metricTypeId, parseFloat(event.target.value));
    };
  }

  return (
    <table {...restProps}>
      <tbody>
        {metrics.map(({ id, title }) => (
          <tr key={id}>
            <th>
              <ChakraFormLabel>{title}</ChakraFormLabel>
            </th>
            <td>
              <TextBox
                width="5rem"
                value={metricValues[id]}
                onInput={handleMetricValueChange(id)}
                autoHighlight
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
