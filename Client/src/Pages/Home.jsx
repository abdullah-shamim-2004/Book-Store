import React from "react";
import useBooks from "../Hooks/useBooks";

const Home = () => {
  const { books } = useBooks();
  console.log(books);

  return <div>home</div>;
};

export default Home;
