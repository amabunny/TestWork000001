import { ThemeProvider } from "react-bootstrap";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: IProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
