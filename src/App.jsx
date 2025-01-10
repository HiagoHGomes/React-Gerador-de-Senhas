import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [copy, setCopy] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState();

  function generate(){
    let characters = "'123456789/*-+qwertyuiop´[]~çlkjhgfdsa\zxcvbnm,.;|?'"
    const length = passwordSize;
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
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <input 
          type="number" 
          id="passwordSize"
          placeholder="Quantidade de caracteres da senha" 
          min={1}
          value={passwordSize}
          onChange={(ev)=> setPasswordSize(ev.target.value)}
        />

      </div>
      <button onClick={generate}>Gerar!</button>
      <button onClick={copyFunction}>{copy}</button>
      <div>{password}</div>
    </>
  )
}

export default App
