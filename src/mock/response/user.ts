import Mock from 'mockjs';

export const getUserInfo = () => {
  const Random = Mock.Random;

  const template = {
    'str|2-4': 'string',
    email: Mock.mock('@email'),
    date: Random.now('hour'),
  };

  return Mock.mock(template);
};

export const login = () => {
  return {
    code: 200,
    data: {
      token: 'xxx',
    },
    mes: '',
  };
};

export const authorization = () => {
  return {
    code: 200,
    data: {
      token: 'xxx',
      rules: {
        page: {
          home: true,
          home_index: true,
          about: true,
          count: true,
          menu_page: true,
          folder_tree: true,
          table_page: true,
          split: true,
        },
        component: {
          edit_button: true,
          publish_button: false,
        },
      },
    },
    mes: '',
  };
};
