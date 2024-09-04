import { DeleteIcon as ChakraDeleteIcon } from "@chakra-ui/icons";
import { useRef } from "react";

import { BragTypeMetric, BragTypeMetricId } from "@/core";
import { mapClickHandler, mapInputChangeHandler } from "@/utils";

import { Box } from "../box";
import { Button } from "../button";
import { Field } from "../fields/field";
import { IconButton } from "../icon-button";
import { InlineField } from "../inline-field";
import { Layout } from "../layout";
import { Text } from "../text";
import { TextBox } from "../text-box";

import { BragTypeMetricsEditorProps } from "./brag-type-metrics-editor.types";
import { useBragTypeMetricsEditor } from "./use-brag-type-metrics-editor.hook";

export function BragTypeMetricsEditor(props: BragTypeMetricsEditorProps) {
  const {
    metrics,
    getMetricHasSavedValue,

    addMetricTitle,
    addMetricTitleButtonDisabled,
    setAddMetricTitleValue,

    setUpdateMetricTitleValue,

    form,
    fields,

    addMetric,
    removeMetric,

    submitUpdateMetricTitle,
    clearFieldValue,
  } = useBragTypeMetricsEditor(props);

  const addMetricTitleRef = useRef<HTMLInputElement>(null);

  function handleChangeAddMetricTitle(value: string) {
    setAddMetricTitleValue(value);
  }

  function handleAddMetricClick() {
    addMetric();
    setTimeout(() => {
      addMetricTitleRef.current?.focus();
    });
  }

  function handleRemoveMetric(metric: BragTypeMetric) {
    return () => removeMetric(metric);
  }

  function handleChangeMetricTitle(metric: BragTypeMetric) {
    return (value?: string) => {
      setUpdateMetricTitleValue(metric.id, value ?? "");
    };
  }

  function handleEditUpdateMetricTitle(metric: BragTypeMetric) {
    return () => {
      setUpdateMetricTitleValue(metric.id, metric.title);
    };
  }

  function handleSubmitUpdatedMetricTitle() {
    submitUpdateMetricTitle();
  }

  function getEditMetricTitleValue() {
    return form.updateMetricTitle?.value;
  }

  return (
    <Layout direction="column" gap="0.5rem">
      <Layout direction="row" gap="0.5rem">
        <Field errorText={fields.addMetricTitle.error}>
          <Layout direction="row" gap="0.5rem">
            <TextBox
              placeholder="Metric title"
              value={addMetricTitle?.value ?? ""}
              ref={addMetricTitleRef}
              isInvalid={Boolean(fields.addMetricTitle.error)}
              onChange={mapInputChangeHandler(handleChangeAddMetricTitle)}
            />
            <Button
              isDisabled={addMetricTitleButtonDisabled}
              onClick={handleAddMetricClick}
            >
              Add
            </Button>
          </Layout>
        </Field>
      </Layout>

      <Box borderWidth="1px" borderRadius="lg" p="2" minHeight="6rem">
        <Layout direction="column" gap="0.5rem">
          {metrics.map((metric) => (
            <InlineField
              key={metric.id}
              viewer={metric.title}
              editor={
                <Field errorText={fields.updateMetricTitle?.error}>
                  <TextBox
                    value={getEditMetricTitleValue()}
                    size="small"
                    onChange={mapInputChangeHandler(
                      handleChangeMetricTitle(metric),
                    )}
                  />
                </Field>
              }
              controls={
                <IconButton
                  label={
                    getMetricHasSavedValue(metric)
                      ? "You cannot remove this metric, as some values have already been recorded for it."
                      : "Remove"
                  }
                  icon={<ChakraDeleteIcon />}
                  size="sm"
                  isDisabled={getMetricHasSavedValue(metric)}
                  onClick={handleRemoveMetric(metric)}
                />
              }
              canSubmit={!fields.updateMetricTitle?.error}
              onEdit={handleEditUpdateMetricTitle(metric)}
              onSubmit={handleSubmitUpdatedMetricTitle}
              onCancel={mapClickHandler(clearFieldValue, "updateMetricTitle")}
            />
          ))}

          {metrics.length === 0 && (
            <Text color="InactiveCaptionText" p="1rem" textAlign="center">
              No metrics defined for this brag type.
              <br />
              Why not add one? :)
            </Text>
          )}
        </Layout>
      </Box>
    </Layout>
  );
}
