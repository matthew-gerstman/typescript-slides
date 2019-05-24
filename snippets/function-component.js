import React from "react";

export function Parent(props) {
  const {className, children} = props;
  return <div className={className}>{children}</div>;
}
