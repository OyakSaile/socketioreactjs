import { CommunicationSocket } from "./components/communicationSocket";
import { Content } from "./components/content";
import { Header } from "./components/header";
import { LoadingProvider } from "./hooks/useLoading";
import { Container } from "./styles";

export function App() {
  return (
    <LoadingProvider>
      <Header />
      <Container>
        <CommunicationSocket />
        <Content />
      </Container>
    </LoadingProvider>
  );
}

export default App;
