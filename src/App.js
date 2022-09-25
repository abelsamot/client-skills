import {Outlet} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Candidates from "./pages/Candidates";
import Settings from "./pages/Settings";
import Tests from "./pages/Tests";
import User from "./pages/User";
import Quiz from "./pages/Quiz"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ConstructorFragment } from "@ethersproject/abi";
import CodingTest from "./pages/CodingTest";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/user/:handle" element={<User />} />
          <Route path="/quiz/:quizID/user/:userID" element={<Quiz />} />
          <Route path="/codingTest/:quizID/user/:userID" element={<CodingTest />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App