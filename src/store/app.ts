import { Dispatch, RootState } from './index';
import { postTest, UserInfo } from '../api/demo';

interface AppState {
  username: string;
}

export default {
  state: {
    username: 'noLogin',
  } as AppState,
  reducers: {
    setLoginInfo(state: AppState, payload: UserInfo) {
      return {
        ...state,
        username: payload.username,
      };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async onLogin(params: { username: string }) {
      const user = await postTest(params);
      if (user) {
        dispatch({
          type: 'app/setLoginInfo',
          payload: user,
        });
      }
    },
  }),
};
