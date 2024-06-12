import { returnNameOrAge } from "./returnNameOrAge";
// import { SomeModule } from "./someOtherFunctions"
import { someOtherFunction } from "./someOtherFunctions";

// const someModule = new SomeModule()

export const testVitest = () => {
  const dataFromSomeOtherFunction = someOtherFunction();
  // const dataFromSomeModule = someModule.returnTrueOrFalse()

  console.log("test mocking", dataFromSomeOtherFunction);
  // console.log(dataFromSomeModule)

  const dataFromReturnNameOrAge = returnNameOrAge(dataFromSomeOtherFunction);
  // const dataFromReturnNameOrAge = returnNameOrAge(dataFromSomeModule)

  return dataFromReturnNameOrAge;
};
