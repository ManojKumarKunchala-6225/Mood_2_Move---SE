import "@testing-library/jest-dom";
import React from "react";

jest.mock("framer-motion", () => {
  return {
    motion: {
      div: ({ children }) => <div>{children}</div>,
      h2: ({ children }) => <h2>{children}</h2>,
      img: ({ children, ...rest }) => <img {...rest}>{children}</img>,
    },
  };
});
