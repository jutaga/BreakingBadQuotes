import { useState, useEffect } from "react";
import { Frase } from "./components/Frase";

export interface Quote {
  quote: string;
  author: string;
}

export const App = () => {

  const [frase, setFrase] = useState<Quote[]>([{
    quote: '',
    author: '',
  }])

  useEffect(() => {    
    consultarApi();
  }, [])
  

  const consultarApi = async() => {

    const api: Response = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
    const frase: Quote[] = await api.json();

    setFrase(frase);

  }

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">

    {frase[0].quote !== '' && <Frase frase={frase} />}

      <button onClick={consultarApi} className="button">
        Quote <i className="bi bi-chat-quote"></i>
      </button>
    </div>
  )
}
