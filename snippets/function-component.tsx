import React from "react";

type ParentProps = {className: string};

export function BadParent(props: ParentProps) {
  const {className, children} = props;
  return <div className={className}>{children}</div>;
}

export const BadParent2 = (props: ParentProps) => {
  const {className, children} = props;
  return <div className={className}>{children}</div>;
};

export const GoodParent: React.FunctionComponent<
  ParentProps
> = props => {
  const {className, children} = props;
  return <div className={className}>{children}</div>;
};
