import expect from "expect";

import sinon from "sinon";
import * as taxService from "./taxService";
import { formatPrice } from "./problem";

descrive("가격 표시", () => {
  let taxStub;

  beforeEach(() => {
    taxStub = sinon.stub(taxService, "getTaxInformation"); // <label id="test.stub"/>
  });

  afterEach(() => {
    taxStub.restore(); // <label id="test.resotre"/>
  });
});
