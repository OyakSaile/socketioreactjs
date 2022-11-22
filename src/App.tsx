import { useEffect, useState } from "react";
import { ModalCreateUser } from "./components/modalCreateUser";
import { LoadingProvider } from "./hooks/useLoading";

import { DashBoard } from "./pages/dashboard";

export function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isUserNameFilled = window.localStorage.getItem("userName");

    if (!isUserNameFilled) {
      setIsOpen(true);
    }
  }, []);
  return (
    <LoadingProvider>
      <ModalCreateUser setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
      <DashBoard />
    </LoadingProvider>
  );
}

export default App;
