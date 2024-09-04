import { CloseIcon } from "@chakra-ui/icons";
import { Spacer } from "@chakra-ui/react";

import {
  Button,
  Field,
  Heading,
  IconButton,
  KeyBox,
  Layout,
  TextBox,
} from "@/common";
import { BragTypeMetricsEditor } from "@/common/brag-type-metrics-editor";
import { mapChangeHandler, mapInputChangeHandler } from "@/utils";

import { BragTypeEditorProps } from "./brag-type-editor.types";
import { useBragTypeEditor } from "./use-brag-type-editor.hook";

export function BragTypeEditor({ bragType, onClose }: BragTypeEditorProps) {
  const { form, dirty, fields, invalid, setFieldValue, handleClickSave } =
    useBragTypeEditor(bragType);

  return (
    <Layout direction="column" gap="1rem">
      <Layout direction="row">
        <Heading as="h3">Edit: {bragType.title}</Heading>
        <Spacer />
        <IconButton
          icon={<CloseIcon />}
          onClick={onClose}
          title="Close"
          aria-label="Close"
          size="sm"
        />
      </Layout>
      <Layout direction="column" gap="1rem">
        <Field label="Title" errorText={fields.title.error} isRequired>
          <TextBox
            autoFocus
            value={form.title}
            onChange={mapInputChangeHandler(setFieldValue, "title")}
          />
        </Field>
        <Field label="Shortcut key" errorText={fields.keychar.error} isRequired>
          <KeyBox
            value={form.keychar}
            onInput={mapInputChangeHandler(setFieldValue, "keychar")}
          />
        </Field>
        <Field label="Metrics">
          <BragTypeMetricsEditor
            value={form.metrics}
            onChange={mapChangeHandler(setFieldValue, "metrics")}
          />
        </Field>
      </Layout>
      <Layout justifyContent="end">
        <Button isDisabled={!dirty || invalid} onClick={handleClickSave}>
          Save
        </Button>
      </Layout>
    </Layout>
  );
}
