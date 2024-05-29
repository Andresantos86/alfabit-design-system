import { useEffect, useRef, useState } from "react";

export const ForcaSenha = () => {
  const [senha, setSenha] = useState("")
  const indicatorRef = useRef<HTMLDivElement>(null);
  const indicatorTextRef = useRef<HTMLParagraphElement>(null);

  const textsIndicator = {
    0: "Muito Fraca",
    1: "Fraca",
    2: "Moderada",
    3: "Forte",
    4: "Muito Forte"
  }

  const teste = () => {
    const indicator = indicatorRef.current;
    const indicatorText = indicatorTextRef.current;

    let score = 0;

    if (senha && senha.length >= 8) score++
    if (senha.match(/[a-z]/)) score++
    if (senha.match(/[A-Z]/)) score++
    if (senha.match(/[0-9]/)) score++
    if (senha.match(/[[^A-Za-z0-9]]/)) score++

    switch (score) {
      case 1:
        if (indicator) indicator.style.backgroundColor = "#e70b0b"
        break;
      case 2:
        if (indicator) indicator.style.backgroundColor = "#ffb74d"
        break;
      case 3:
        if (indicator) indicator.style.backgroundColor = "#fff176"
        break;
      case 4:
        if (indicator) indicator.style.backgroundColor = "#81c784"
        break;
      default:
        if (indicator) indicator.style.backgroundColor = "trasparent"
        break;
    }

    const width = (score / 4) * 100;
    if (indicator) {
      indicator.style.width = width + "%";
    }
    if (senha.length > 0 && indicatorText) {
      indicatorText.innerHTML = `Força: ${textsIndicator[score as keyof typeof textsIndicator]}`
    } else {
      if (indicatorText) {
        indicatorText.innerHTML = ""
      }
    }
  }
  useEffect(() => {
    teste()
  }, [senha])

  return (
    <>
      <div className="bg-white p-4 border rounded-md shadow text-center w-[400px]">
        <h2 className="text-2xl">Verificador de senha</h2>
        <p>Insira senha para verificar a força</p>
        <input className="w-full p-1 border-gray-300 border-2 rounded-md my-2"
          type="password"
          id="passwordInput"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)} />
        <div className="w-full h-4 bg-gray-300 rounded-sm shadow-inner overflow-hidden" id="indicator-bar">
          <div ref={indicatorRef} id="indicator" className="h-full w-0 bg-red-600 transition-all duration-500 ease-in-out delay-300 "></div>
        </div>
        <p ref={indicatorTextRef} id="indicator-text" className="text-gray-400 text-xs">Senha fraca</p>
        <p id="tip" className="italic text-gray-400 text-xs w-[70%] m-auto"> Sua senha precisa conter letras maiusculas e minusculas, numeros e caracteres especiais</p>
      </div>
    </>
  )
}

export default ForcaSenha;

