import { groupBy } from "lodash";

import { required, useForm } from "@/common";
import {
  BragTypeMetric,
  BragTypeMetricId,
  useBragTypeMetricsQueries,
} from "@/core";
import { createBragTypeMetric } from "@/core/models/brag-type/create-brag-type";
import { groupByFirst } from "@/utils/array.utils";

import { useBrags } from "../brags";

import { BragTypeMetricsEditorProps } from "./brag-type-metrics-editor.types";

interface BragTypeMetricsForm {
  readonly addMetricTitle: {
    readonly value: string;
  };
  readonly updateMetricTitle?: {
    readonly metricId: BragTypeMetricId;
    readonly value: string;
  };
}

const ErrorMessages = {
  SameTitleExists: "Metric with the same title already exists.",
  TitleRequired: "Title is required.",
};

export function useBragTypeMetricsEditor(props: BragTypeMetricsEditorProps) {
  const {
    form,
    fields,
    invalid,
    dirty,
    setFieldValue,
    clearFieldValue,
    setFieldError,
    clearFieldError,
  } = useForm<BragTypeMetricsForm>({
    initialForm: {
      addMetricTitle: { value: "" },
    },
    validators: {
      updateMetricTitle: required,
    },
  });

  const { value: metrics, onChange } = props;

  const { brags } = useBrags();
  const { getMetricHasSavedValue } = useBragTypeMetricsQueries({ brags });

  const metricsByTitle = groupByFirst(metrics, "title");

  const { addMetricTitle } = form;

  const canAddMetricTitle =
    Boolean(addMetricTitle?.value?.trim()) && !fields.addMetricTitle.error;

  const addMetricTitleButtonDisabled = !canAddMetricTitle;

  function addMetric() {
    if (!canAddMetricTitle) {
      return;
    }

    onChange([
      ...metrics,
      createBragTypeMetric({
        title: addMetricTitle.value,
      }),
    ]);

    clearFieldValue("addMetricTitle");
  }

  function getTitleWithSameName(value: string) {
    return metricsByTitle[value];
  }

  function getTitleWithSameNameDifferentId(value: string, metricId: string) {
    const matchingTitle = getTitleWithSameName(value);

    return matchingTitle?.id && matchingTitle.id !== metricId;
  }

  function setAddMetricTitleValue(value: string) {
    setFieldValue({ value }, "addMetricTitle");

    clearFieldError("addMetricTitle");

    if (value && getTitleWithSameName(value)) {
      setFieldError("addMetricTitle", ErrorMessages.SameTitleExists);
    }
  }

  function removeMetric(metricToRemove: BragTypeMetric) {
    if (getMetricHasSavedValue(metricToRemove)) {
      return;
    }

    onChange(metrics.filter((metric) => metric.id !== metricToRemove.id));
  }

  const { updateMetricTitle } = form;

  function setUpdateMetricTitleValue(
    metricId: BragTypeMetricId,
    value: string,
  ) {
    setFieldValue(
      value.trim()
        ? {
            metricId,
            value,
          }
        : undefined,
      "updateMetricTitle",
    );

    console.log(value, metricId);
    if (getTitleWithSameNameDifferentId(value, metricId)) {
      setFieldError("updateMetricTitle", ErrorMessages.SameTitleExists);
    }
  }

  function submitUpdateMetricTitle() {
    clearFieldError("updateMetricTitle");

    console.log("submitUpdateMetricTitle1", updateMetricTitle);

    if (!updateMetricTitle) {
      setFieldError("updateMetricTitle", ErrorMessages.TitleRequired);
      return;
    }
    console.log("submitUpdateMetricTitle2", fields.updateMetricTitle);

    if (fields.updateMetricTitle.error) {
      return;
    }
    console.log("submitUpdateMetricTitle3");

    onChange(
      metrics.map((metric) =>
        metric.id === updateMetricTitle.metricId
          ? {
              ...metric,
              title: updateMetricTitle.value,
            }
          : metric,
      ),
    );
  }

  return {
    metrics,

    getMetricHasSavedValue,

    addMetricTitle,
    addMetricTitleButtonDisabled,
    setAddMetricTitleValue,

    addMetric,
    removeMetric,

    updateMetricTitle,
    setUpdateMetricTitleValue,
    submitUpdateMetricTitle,

    fields,
    form,

    setFieldValue,
    clearFieldValue,

    invalid,
    dirty,
  };
}
