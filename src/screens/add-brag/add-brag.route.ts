export type AddBragScreenRouteParams = {
  readonly bragTypeId: string;
};

export function createAddBragScreenPath(bragTypeId: string) {
  return `/add-brag/${bragTypeId}`;
}

export const ADD_BRAG_SCREEN_PATH = "/add-brag/:bragTypeId";
