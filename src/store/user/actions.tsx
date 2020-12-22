import { createActionCreator } from "deox";
import { UserState } from "./types";

const PREFIX = "USER";

export const UserActions = {
  STORE: createActionCreator(`${PREFIX}/STORE`, (resolve) => (user: UserState) =>
    resolve({
      user,
    }),
  ),
  CLEAN: createActionCreator(`${PREFIX}/CLEAN`, (resolve) => () => resolve({})),
  LOGIN: createActionCreator(`${PREFIX}/LOGIN`, (resolve) => (email: string, password: string) =>
    resolve({
      email,
      password,
    }),
  ),
  LOGOUT: createActionCreator(`${PREFIX}/LOGOUT`, (resolve) => () => resolve({})),
};
