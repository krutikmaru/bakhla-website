import React from "react";
import parse, { domToReact } from "html-react-parser";

// Custom heading component that accepts attributes like className
const CustomHeading = ({ children, className }) => (
  <h1 className={`text-4xl font-bold text-custom-color mt-4 ${className}`}>
    {children}
  </h1>
);

const CustomParagraph = ({ children, className }) => (
  <p className={`text-base  leading-relaxed my-4 ${className}`}>{children}</p>
);

const CustomLink = ({ href, children, className }) => (
  <a href={href} className={`text-blue-500 hover:underline ${className}`}>
    {children}
  </a>
);

export const mapHtmlToReact = (htmlContent) => {
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
