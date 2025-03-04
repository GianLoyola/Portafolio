import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import { Home } from "./mainComponents/Home";
import { Dashboard } from "./mainComponents/Dashboard";
import { NotFound } from "./mainComponents/NotFound";
import { HeroUIProvider } from "@heroui/react";
import { GlobalProvider } from "./context/GlobalProvider";

function App() {
  return (
    <>
      <HeroUIProvider>
        <GlobalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />}>
                <Route index element={<Home />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </GlobalProvider>
      </HeroUIProvider>
    </>
  );
}

export default App;
