import React, { useCallback, useState } from "react";
import Form from "react-bootstrap/Form";

import { interfaceIdFromABI } from "../../utils";
import { Container, Content } from "./styles";

const Home = () => {
  const [invalidABI, setInvalidABI] = useState(false);
  const [interfaceId, setInterfaceId] = useState("");

  const onChange = useCallback((e) => {
    setInvalidABI(false);
    try {
      JSON.parse(e.target.value);
    } catch (e) {
      setInvalidABI(true);
    }
    const interfaceABI = interfaceIdFromABI(JSON.parse(e.target.value));
    setInterfaceId(interfaceABI);
  }, []);

  return (
    <Container>
      <Content>
        <h1>Convert ABI to interfaceId</h1>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
          onChange={onChange}
        />
        <h2>
          {!invalidABI
            ? `InterfaceID: ${interfaceId}`
            : "InterfaceID: invalid ABI"}
        </h2>
      </Content>
    </Container>
  );
};

export default Home;
