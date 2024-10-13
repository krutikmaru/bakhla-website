"use client";
import parse, { domToReact } from "html-react-parser";

// Custom heading component that accepts attributes like className
const CustomHeading = ({ children, className }) => (
  <h1 className={`text-4xl font-bold text-custom-color mt-4 ${className}`}>
    {children}
  </h1>
);

const CustomParagraph = ({ children, className }) => (
  <p className={`text-lg text-gray-700 leading-relaxed my-4 ${className}`}>
    {children}
  </p>
);

const CustomLink = ({ href, children, className }) => (
  <a href={href} className={`text-blue-500 hover:underline ${className}`}>
    {children}
  </a>
);

const mapHtmlToReact = (htmlContent) => {
  if (typeof htmlContent !== "string") {
    console.error(
      "Expected HTML content to be a string, but got:",
      typeof htmlContent
    );
    return null;
  }

  const options = {
    replace: (domNode) => {
      if (domNode.type === "text") {
        return domNode.data;
      }

      if (domNode.name === "h1") {
        return (
          <CustomHeading className={domNode.attribs.classname || ""}>
            {domToReact(domNode.children, options)}
          </CustomHeading>
        );
      }

      if (domNode.name === "p") {
        return (
          <CustomParagraph className={domNode.attribs.classname || ""}>
            {domToReact(domNode.children, options)}
          </CustomParagraph>
        );
      }

      if (domNode.name === "a") {
        return (
          <CustomLink
            href={domNode.attribs.href}
            className={domNode.attribs.classname || ""}
          >
            {domToReact(domNode.children, options)}
          </CustomLink>
        );
      }

      if (domNode.name === "ul") {
        return (
          <ul
            className={`list-disc pl-5 my-4 ${domNode.attribs.classname || ""}`}
          >
            {domToReact(domNode.children, options)}
          </ul>
        );
      }

      if (domNode.name === "li") {
        return (
          <li className={`my-2 list-disc ${domNode.attribs.classname || ""}`}>
            {domToReact(domNode.children, options)}
          </li>
        );
      }

      if (domNode.name === "b") {
        return (
          <span className={`font-bold ${domNode.attribs.classname || ""}  `}>
            {domToReact(domNode.children, options)}
          </span>
        );
      }
    },
  };

  return parse(htmlContent, options);
};

export default function Blog() {
  const content = `<div>
    <h1 className="text-pink-500">Hey <b>Meera<b/></h1>
    <p>
      This is an introductory paragraph for the blog. <b>Meera</b>
      You can <a href="https://www.meeraharia.com">click here</a> to see what are you missing upon.
    </p>

    <h2>21st is what??</h2>
    <p>
      Here is some more information about the date. It's your 
      <a href="https://another-example.com">BIRTHDAYYYY</a> YAYYYA.
    </p>

    <p>
      Here's a list of what I want from you:
    </p>
    <ul>
      <li>love <a href="https://krutikmaru.framer.website">ofc</a></li>
      <li>Love</li>
    </ul>

    <p>
      Finally, here's a paragraph with multiple nested elements like 
      <a href="https://nested-link.com">this link</a> and 
      another <a href="https://second-link.com">second link</a> for reference.
    </p>
  </div>`;

  return <div className="blog-container mt-52">{mapHtmlToReact(content)}</div>;
}
