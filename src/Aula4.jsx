import React, { useState, useEffect } from 'react'

export default function Aula4() {
  const [nome, setNome] = useState('')

  useEffect(() => {
    document.title = 'Olá, ' + nome
  }, [nome])

  return (
    <main>
      <p className="etiqueta">Desafio 2 · React</p>
      <h1>Título da aba com o nome</h1>
      <label htmlFor="nome">Seu nome</label>
      <input
        id="nome"
        type="text"
        placeholder="Digite seu nome"
        aria-describedby="dica"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
      />
      <p id="dica">Observe o título da aba enquanto você digita.</p>
    </main>
  )
}
