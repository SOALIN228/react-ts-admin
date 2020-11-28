import React from 'react';

interface IProps {
  color?: string;
  onClick?: React.MouseEventHandler;
}

// React.FC 会自动添加children 属性
const FncButton: React.FC<IProps> = props => {
  return (
    <button
      style={{
        color: props.color,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

// 设置props 默认属性
FncButton.defaultProps = {
  color: '#ffb012',
};

export default FncButton;
