import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { mainTheme } from "./styles/themes/main";

export function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
    </ThemeProvider>
  )
}