import  Checkbox from "./components/Checkbox/Checkbox"
import LogoDarkTheme from "./assets/svg/LogoDarkTheme"
import LogoLightTheme from "./assets/svg/LogoLightTheme"
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher"
import Input from "./components/Input/Input"
import Textarea from "./components/Textarea/Textarea"

function App() {


  return (
    <>
    <LogoDarkTheme />
    <LogoLightTheme />
      <ThemeSwitcher />
      <Checkbox />
      <Input name="name" label="Name" type="text" placeholder="Enter your name" isError={false} hint="This is a hint" />
      <Textarea name="name" label="Name" type="text" placeholder="Enter your name" isError={false} hint="This is a hint" />
    </>
  )
}

export default App
