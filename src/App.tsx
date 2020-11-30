import React, { useEffect, useState } from 'react';
import { getTest } from './api/demo';
import { connect } from 'react-redux';
import { RootState, Dispatch } from './store';

/**
 * 获取store中的值
 * @param state
 */
const mapState = (state: RootState) => ({
  username: state.app.username,
});
/**
 * 调用store中的方法来修改state
 * @param dispatch
 */
const mapDispatch = (dispatch: Dispatch) => ({
  onLogin: (payload: { username: string }) => dispatch.app.onLogin(payload),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const App: React.FC<Props> = props => {
  useEffect(() => {
    // get 请求demo
    // getTest({ id: 100, name: 'sss' }).then(res => {
    //   if (res) console.log('res', res);
    // });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>username: {props.username}</h1>
      <button onClick={() => props.onLogin({ username: 'admin' })}>
        点击发送store
      </button>
    </div>
  );
};

export default connect(mapState, mapDispatch)(App);
