import React from "react";

type Props = {className: string};

function PoorlyTypedParent(props: Props) {
  const {className, children} = props;
  return <div className={className}>{children}</div>;
}

const ProperlyTypedParent: React.FunctionComponent<Props> = props => {
  const {className, children} = props;
  return <div className={className}>{children}</div>;
};

type SimpleFunctionComponent<P> = P & {
  children: React.ReactNode;
}

type FinalPropTypes = {
  className: string;
  children: React.ReactNode
}