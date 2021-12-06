import React from 'react';

const logErrorToMyService = (error: Error, info: any) => {
  // eslint-disable-next-line no-console
  console.log(error, info);
};

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // 你同样可以将错误日志上报给服务器
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>页面发生错误</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
