import { Content } from "./components/content";
import { Header } from "./components/header";
import { LoadingProvider } from "./hooks/useLoading";

export function App() {
  return (
    <>
      <LoadingProvider>
        <Header />
        <Content />
      </LoadingProvider>
    </>
  );
}

export default App;
