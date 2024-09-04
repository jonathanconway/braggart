export type BragTypesScreenRouteParams = {
  readonly bragTypeId?: string;
};

export const BRAG_TYPES_SCREEN_PATH_BASE = "/brag-types";

export const BRAG_TYPES_SCREEN_PATH = `/${BRAG_TYPES_SCREEN_PATH_BASE}/:bragTypeId?`;

export function createBragTypesScreenPath(bragTypeId?: string) {
  if (bragTypeId) {
    return `${BRAG_TYPES_SCREEN_PATH_BASE}/${bragTypeId}`;
  }
  return BRAG_TYPES_SCREEN_PATH_BASE;
}
