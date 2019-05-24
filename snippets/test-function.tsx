import {GoodParent} from "./function-component";

describe("test when prop is missing", () => {
  it("confuses typecheck", () => {
    <GoodParent>Test</GoodParent>;
  });
});
