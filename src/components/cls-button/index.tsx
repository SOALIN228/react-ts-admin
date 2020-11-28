import React from 'react';

interface IProps {
  color?: string;
  onClick?: React.MouseEventHandler;
}

interface IState {}

// React.FC 会自动添加children 属性
class FncButton extends React.Component<IProps, IState> {
  // 设置默认值
  static defaultProps = {
    color: '#ffb012',
  };

  render(): JSX.Element {
    return (
      <button
        style={{
          color: this.props.color,
        }}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default FncButton;
