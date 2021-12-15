import React from "react";
import tw from "tailwind-styled-components";
import { useState } from "react";

const AddForm = ({copiedFunction}) => {
  const [getuser, setuser] = useState("");
  const [getage, setage] = useState("");
  const [valid, setvalid] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (getage <= 0) {
      setvalid(true);
    } else {
      setvalid(false);
      const Data = [
        {
          key: Math.random().toString(),
          user: getuser,
          age: getage,
        },
      ];

      copiedFunction(Data)
    }

    setuser("");
    setage("");
  };

  const UseHandler = (e) => {
    setuser(e.target.value);
  };

  const AgeHandler = (e) => {
    setage(e.target.value);
  };

  const errorhandler = valid === true ? <ErrorSec>* Error! Check age it's must be > 0</ErrorSec> : <ErrorSec></ErrorSec>

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={submitHandler}>
          <Lable>Information</Lable>
          <Inputs>
            <Input
              type="text"
              placeholder="Enter User.."
              onChange={UseHandler}
              value={getuser}
              required
            />
            {}
            <Input
              type="number"
              placeholder="Enter Age.."
              onChange={AgeHandler}
              value={getage}
            />
            <ButtonB value="Submit">Submit</ButtonB>
          </Inputs>
          {errorhandler}
        </Form>
      </Container>
    </Wrapper>
  );
};
const ErrorSec = tw.div`text-red-600 py-3 text-lg font-mono`;
const ButtonB = tw.button`mt-2 bg-green-600 py-3 text-white font-momo`;
const Inputs = tw.div`flex flex-col mt-3 bg-green-300 rounded-xl py-6 px-3 font-mono outline-none`;
const Container = tw.div`flex justify-center flex-col mt-20 mb-4 mr-40 ml-40`;
const Form = tw.form`bg-green-400 py-7 px-5 shadow-xl`;
const Lable = tw.label`flex justify-center font-mono text-white`;
const Input = tw.input`py-3 mt-2 px-3 outline-none hover:bg-green-100 hover:text-black font-mono text-sm`;
const Wrapper = tw.div``;
export default AddForm;
