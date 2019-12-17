import React, { Component } from "react";

import { Transition } from "react-transition-group";

import { cx } from "Utils/classnames";

interface State {
  height: number;
}

interface Props {
  horizontal?: boolean;
  isOpen?: boolean;
  duration?: number;
}

export class Collapse extends Component<Props, State> {
  wrapper = React.createRef<HTMLDivElement>();

  constructor(props: Props) {
    super(props);

    this.state = {
      height: 100
    };
  }

  setDimensions = (node: HTMLElement) => {
    this.setState({ height: node.scrollHeight });
  };

  get renderContent() {
    const { height } = this.state;

    const { isOpen } = this.props;

    const style = { "--height": `${isOpen ? height : 0}px` } as any;

    return (
      <Transition
        appear
        mountOnEnter
        onEnter={this.setDimensions}
        timeout={300}
        in={isOpen}
      >
        {state => (
          <div
            style={style}
            ref={this.wrapper}
            className={cx("collapse", state)}
          >
            {this.props.children}
          </div>
        )}
      </Transition>
    );
  }

  render() {
    return this.renderContent;
  }
}
