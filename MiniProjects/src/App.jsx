import { Content } from "./components/index";
import { SunnyProvider } from "./config/SunnyContext.jsx";

function App() {

  return (
    <>
      <SunnyProvider>
        <Content />
      </SunnyProvider>
    </>
  )
}

export default App
