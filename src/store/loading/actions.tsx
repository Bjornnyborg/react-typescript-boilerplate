import { createActionCreator } from "deox";
import { LoadingType } from "./types";

const PREFIX = "LOADING";

export const LoadingActions = {
  START: createActionCreator(`${PREFIX}/START`, (resolve) => (type: LoadingType) =>
    resolve({
      type,
    }),
  ),
  STOP: createActionCreator(`${PREFIX}/STOP`, (resolve) => (type: LoadingType) =>
    resolve({
      type,
    }),
  ),
};
