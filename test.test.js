import { it, expect, describe, vi } from "vitest";
import { testVitest } from ".";
import { SomeModule } from "./someOtherFunctions";

const mocks = vi.hoisted(() => ({
  someOtherFunction: vi.fn(),
}));

// const mocks = vi.hoisted(() => ({
//   SomeModule: vi.fn().mockReturnValue({
//     returnTrueOrFalse: vi.fn()
//   })
// }))

vi.mock("./someOtherFunctions.js", () => ({
  // someOtherFunction: vi.fn().mockReturnValue(true)
  someOtherFunction: mocks.someOtherFunction,
}));

// vi.mock('./someOtherFunctions.js', () => ({
//   // someOtherFunction: vi.fn().mockReturnValue(true)
//   SomeModule: mocks.SomeModule
// }))

// vi.mock('./someOtherFunctions.js', async (importActual) => {
//   const mod = await importActual()
//   const SomeModule = vi.fn().mockReturnValue({
//     returnTrueOrFalse: vi.fn()
//   })
//
//   return {
//     ...mod,
//     SomeModule
//   }
// })

describe("testVitest", () => {
  it("should return name", () => {
    // mock "someOtherFunction" or "dataFromSomeOtherFunction" in the index.js file to return false
    mocks.someOtherFunction.mockReturnValue(true);

    // mocks.SomeModule.mockReturnValue({
    //   returnTrueOrFalse: () => true
    // })

    // const mockedSomeModule = new SomeModule()
    //
    // vi.mocked(mockedSomeModule.returnTrueOrFalse).mockReturnValue(true)
    //
    const data = testVitest();

    expect(data).toBe("My Name is XYZ");
  });

  it("should return age", () => {
    // mock "someOtherFunction" or "dataFromSomeOtherFunction" in the index.js file to return false
    mocks.someOtherFunction.mockReturnValue(false);

    // mocks.SomeModule.mockReturnValue({
    //   returnTrueOrFalse: () => false
    // })

    // const mockedSomeModule = new SomeModule();
    //
    // vi.mocked(mockedSomeModule.returnTrueOrFalse).mockReturnValue(false);

    const data = testVitest();

    expect(data).toBe(25);
  });
});
