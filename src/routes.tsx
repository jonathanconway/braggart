import { ADD_BRAG_SCREEN_PATH, AddBragScreen } from "./screens/add-brag";
import { BRAG_TYPES_SCREEN_PATH, BragTypesScreen } from "./screens/brag-types";
import { HomeScreen } from "./screens/home";

export const routes = [
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: ADD_BRAG_SCREEN_PATH,
    element: <AddBragScreen />,
  },
  {
    path: BRAG_TYPES_SCREEN_PATH,
    element: <BragTypesScreen />,
  },
];
