import test from "ava"
import sinon from "sinon"
import * as fakeDataProvider from "./fakeDataProvider"

test("should obtain data from provided storage", t => {
  const storage = {
    getItem: sinon.stub().returns("{\"test\":1}")
  }
  
  const result = fakeDataProvider.getData(storage)

  t.deepEqual(result, {test:1})
})

