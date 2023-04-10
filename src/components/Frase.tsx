import { Quote } from "../App"

interface PropsFrase {
    frase: Quote[]
}

export const Frase = ({ frase }: PropsFrase) => {
    return (
        <div className="contenedor container bg-light p-3 rounded-2 ">
            <blockquote className="blockquote">
                <p className="display-4 fw-bold ">"{frase[0].quote}"</p>
            </blockquote>
            <figcaption> 
                <cite className="float-end fw-lighter">- {frase[0].author}</cite>
            </figcaption>
        </div>
    )
}
