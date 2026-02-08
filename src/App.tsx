import  Checkbox from "./components/Checkbox/Checkbox"
import LogoDarkTheme from "./assets/svg/LogoDarkTheme"
import LogoLightTheme from "./assets/svg/LogoLightTheme"
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher"

function App() {


  return (
    <>
    <LogoDarkTheme />
    <LogoLightTheme />
      <ThemeSwitcher />
      <Checkbox />
    </>
  )
}

export default App
