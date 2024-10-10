import parse from "html-react-parser";

const renderHTML = (__html) => {
  return <>{parse(__html ? __html : " ")}</>;
};

export default renderHTML;
