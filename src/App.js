import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Glossary from "./pages/Glossary"
import WhyCrypto from "./pages/WhyCrypto"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/glossary" element={<Glossary />} />
                <Route path="/whycrypto" element={<WhyCrypto />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App