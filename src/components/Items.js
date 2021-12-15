import React from "react";
import tw from "tailwind-styled-components";
import AddForm from "./AddForm";
import { useState } from "react";
const Items = () => {
  const [dataa, setdataa] = useState([
    {
      key: Math.random().toString(),
      user: "lnvestor",
      age: 20,
    },
  ]);

  const DeleteHadler = (key) => {
    const newlist = dataa.filter((x) => x.key !== key);
    setdataa(newlist);
  };
  

  const CopiedData = (data) => {
    setdataa((old) => {
      return [...data, ...old];
    });
  };

  return (
    <Wrapper>
      <AddForm copiedFunction={CopiedData} />
      <Container>
        {dataa.map((data) => {
          return (
            <Itemss onClick={() => DeleteHadler(data.key)}>
              {" "}
              <Item>
                {data.user}, {data.age} {"Years Old"}
              </Item>{" "}
            </Itemss>
          );
        })}
      </Container>
    </Wrapper>
  );
};
const Container = tw.div` ml-20 mr-20 mt-0  rounded-xl py-4 px-5 font-mono text-white text-2xl shadow-xl`;
const Itemss = tw.ul`mt-5 bg-green-400 py-6 px-4 rounded-xl`;
const Item = tw.li``;
const Wrapper = tw.div``;
export default Items;
