import { useNavigate, useParams } from "react-router-dom";

import { useBragTypes, useBrags, useForm } from "@/common";
import { BragType, BragTypeMetricId, createBrag } from "@/core";

import { HOME_SCREEN_PATH } from "../../home";
import { AddBragScreenRouteParams } from "../add-brag.route";

interface AddBragForm {
  readonly title: string;
  readonly keychar: string;
  readonly notes: string;
  readonly bragTypeId: string;
  readonly metricValues: Record<BragTypeMetricId, number>;
  readonly links: readonly string[];
}

function createInitialForm(
  bragTypes: readonly BragType[],
  bragTypeId?: string,
): AddBragForm {
  return {
    title: "",
    notes: "",
    keychar: "",
    bragTypeId: bragTypeId ?? bragTypes[0].id,
    metricValues: {},
    links: [],
  };
}

export function useAddBragForm() {
  const { bragTypeId } = useParams<AddBragScreenRouteParams>();

  const { bragTypes, bragTypesById } = useBragTypes();
  const { addBrag } = useBrags();

  const navigate = useNavigate();

  const { form, setFieldValue } = useForm<AddBragForm>({
    initialForm: createInitialForm(bragTypes, bragTypeId),
  });

  console.log("useAddBragForm", { bragTypesById, bragTypes, form });
  const selectedBragType = bragTypesById[form.bragTypeId ?? bragTypeId];

  const onSubmit = () => {
    if (!bragTypeId) {
      return;
    }

    addBrag(createBrag(form));

    navigate(HOME_SCREEN_PATH);
  };

  return {
    bragTypes,
    selectedBragType,
    form,
    setFieldValue,
    onSubmit,
  };
}
