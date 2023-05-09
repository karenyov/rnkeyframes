import { useState } from "react";

import { View, Button } from "react-native";

import { styles } from "./styles";
import { Message } from "./src/components/Message";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      {show && <Message />}

      <Button
        title={show ? "Fechar Mensagem" : "Exibir Mensagem"}
        onPress={() => setShow((prevState) => !prevState)}
      />
    </View>
  );
}
