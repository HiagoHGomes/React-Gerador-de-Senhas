import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState("Copiar")

  function generate(){
    let characters = "'123456789/*-+qwertyuiop´[]~çlkjhgfdsa\zxcvbnm,.;|?'"
    const length = 12;
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomPosition = Math.floor(Math.random() * characters.length)
      newPassword+=characters[randomPosition]
    }
    setPassword(newPassword)
    setCopy("Copiar")
  }
  
 //Para copiar para a área de transferencia 
function copyFunction(){
  setCopy("Copiado")
  window.navigator.clipboard.writeText(password)
}

  return (
    <>
      <h1>Gerador de senhas</h1>
      <button onClick={generate}>Gerar!</button>
      <button onClick={copyFunction}>{copy}</button>
      <div>{password}</div>
    </>
  )
}

export default App
