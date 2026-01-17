import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { ProjectPage } from "./pages/ProjectPage"
import { IntroSplash } from "./components/intro/IntroSplash"
import { useState } from "react"

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <>
      <BrowserRouter>
        {!introComplete && (
          <IntroSplash onComplete={() => setIntroComplete(true)} />
        )}
        <div className={!introComplete ? "opacity-0 h-0 overflow-hidden" : "animate-fade-in"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:chain" element={<ProjectPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
