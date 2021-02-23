import { useState } from 'react';

interface ButtonProps {
    color: string;
    children: string; // o texto do botão
}

export function Button(props: ButtonProps) { // componente
    const [counter, setCounter] = useState(1) // estado

    // contador
    function increment() {
        setCounter(counter + 1);
    }

    return (
        <button 
        type='button' 
        style={{ backgroundColor: props.color}} // propriedade
        onClick={increment}
        > 
            {props.children} <strong>{counter}</strong>
        </button>
    );
}