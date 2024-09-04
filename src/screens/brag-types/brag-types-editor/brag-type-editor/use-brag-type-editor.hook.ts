import { required, useBragTypes, useForm } from "@/common";
import { BragType, BragTypeMetric } from "@/core";
import { createBragTypeMetric } from "@/core/models/brag-type/create-brag-type";

interface Form {
  readonly title: string;
  readonly keychar: string;
  readonly metrics: readonly BragTypeMetric[];
}

export function useBragTypeEditor(bragType: BragType) {
  const { updateBragType } = useBragTypes();

  const { form, fields, invalid, dirty, setDirty, setFieldValue } =
    useForm<Form>({
      initialForm: bragType,
      validators: {
        title: required,
        keychar: required,
      },
    });

  function handleClickSave() {
    if (!dirty || invalid) {
      return;
    }

    updateBragType({
      ...bragType,
      ...form,
    });

    setDirty(false);
  }

  function handleAddMetric(title: string) {
    const metric = createBragTypeMetric({ title });

    const currentMetrics = bragType.metrics;

    const metrics = [...currentMetrics, metric];

    setFieldValue(metrics, "metrics");
  }

  function handleChangeMetricTitle(bragTypeMetricId: string, title: string) {
    const metrics = bragType.metrics.map((metric) => ({
      ...metric,
      title: metric.id === bragTypeMetricId ? title : metric.title,
    }));

    setFieldValue(metrics, "metrics");
  }

  return {
    dirty,
    fields,
    invalid,
    form,
    setFieldValue,
    handleAddMetric,
    handleChangeMetricTitle,
    handleClickSave,
  };
}
