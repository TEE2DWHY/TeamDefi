import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Glossary from "./pages/Glossary"
import WhyCrypto from "./pages/WhyCrypto"
import CryptoBasic from "./pages/CryptoBasic"
import About from "./pages/About"
import Tools from "./pages/Tools"
import Blog from "./pages/Blog"
import OurCourses from "./pages/Academy"
import KnowledgeBase from "./pages/KnowledgeBase"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/glossary" element={<Glossary />} />
                <Route path="/whycrypto" element={<WhyCrypto />} />
                <Route path="/crypto-basics" element={<CryptoBasic />} />
                <Route path="/about" element={<About />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/academy" element={<OurCourses />} />
                <Route path="/knowledgeBase/" element={<KnowledgeBase />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App