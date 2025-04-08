import React from "react";
import { Provider } from "../../organisms/provider";
import { Header } from "../../organisms/header";
import { Container, Stack } from "react-bootstrap";

interface IProps {
  children: React.ReactNode;
}

export const BaseTemplate = ({ children }: IProps) => {
  return (
    <Provider>
      <Stack gap={4}>
        <div>
          <Header />
        </div>
        <Container>{children}</Container>
      </Stack>
    </Provider>
  );
};
