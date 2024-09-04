import { Flex } from "@chakra-ui/react";
import { FormEventHandler, ModifierKey } from "react";

import {
  BragMetricsEditor,
  Button,
  Dropdown,
  Field,
  KeyLabel,
  Layout,
  ModifierKeys,
  Text,
  TextArea,
  useKeyboardShortcut,
} from "@/common";
import { BragLinksEditor } from "@/common/brag-links-editor";
import { mapInputChangeHandler } from "@/utils";

import { useAddBragForm } from "./use-add-brag-form.hook";

export function AddBragForm() {
  const { bragTypes, selectedBragType, form, setFieldValue, onSubmit } =
    useAddBragForm();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit();
  };

  useKeyboardShortcut({
    shortcuts: {
      [ModifierKeys.Control]: {
        a: () => onSubmit() as unknown as VoidFunction,
      },
    } as any,
  });

  if (!selectedBragType) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Layout direction="column" gap="1rem">
        <Field label="Type">
          <Dropdown
            onChange={mapInputChangeHandler(setFieldValue, "bragTypeId")}
          >
            {bragTypes.map((bragType) => (
              <option
                key={bragType.id}
                value={bragType.id}
                selected={bragType.id === form.bragTypeId}
              >
                {bragType.title}
              </option>
            ))}
          </Dropdown>
        </Field>
        <Field label="Notes">
          <TextArea
            value={form.notes}
            autoFocus
            onChange={mapInputChangeHandler(setFieldValue, "notes")}
          />
        </Field>

        <Flex direction="row" gap="1rem">
          <Field label="Metrics">
            {selectedBragType.metrics.length > 0 ? (
              <BragMetricsEditor metrics={selectedBragType.metrics} />
            ) : (
              <Text color="InactiveCaptionText">
                No metrics defined for this brag type
              </Text>
            )}
          </Field>
          <Field label="Links">
            <BragLinksEditor links={form.links} />
          </Field>
        </Flex>

        <Layout justifyContent="end">
          <Button size="lg" type="submit">
            Add brag
            <KeyLabel>CTRL+A</KeyLabel>
          </Button>
        </Layout>
      </Layout>
    </form>
  );
}
