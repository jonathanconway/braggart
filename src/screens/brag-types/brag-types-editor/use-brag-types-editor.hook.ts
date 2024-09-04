import { useNavigate, useParams } from "react-router-dom";

import { useBragTypes } from "@/common";
import { BragTypeId } from "@/core";

import {
  BragTypesScreenRouteParams,
  createBragTypesScreenPath,
} from "../brag-types.route";

export function useBragTypesEditor() {
  const { bragTypeId } = useParams<BragTypesScreenRouteParams>();

  const navigateTo = useNavigate();

  const { bragTypes, bragTypesById, loaded } = useBragTypes();

  const selectedBragType =
    loaded && bragTypeId ? bragTypesById[bragTypeId as BragTypeId] : undefined;

  function clearBragType() {
    return navigateTo(createBragTypesScreenPath());
  }

  return { bragTypes, selectedBragType, clearBragType };
}
