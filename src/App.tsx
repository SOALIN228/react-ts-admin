import React, { useEffect, useState } from 'react';
import { postTest, getTest } from './api/demo';
import { connect } from 'react-redux';
import { RootState, Dispatch } from './store';

/**
 * 获取store中的值
 * @param state
 */
const mapState = (state: RootState) => ({
  username: state.app,
});
/**
 * 调用store中的方法来修改state
 * @param dispatch
 */
const mapDispatch = (dispatch: Dispatch) => ({});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const App: React.FC<Props> = props => {
  useEffect(() => {
    // post 请求demo
    postTest().then(res => {
      if (res) console.log('res', res);
    });
    // get 请求demo
    // getTest({ id: 100, name: 'sss' }).then(res => {
    //   if (res) console.log('res', res);
    // });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>hello</h1>
    </div>
  );
};

export default connect(mapState, mapDispatch)(App);
