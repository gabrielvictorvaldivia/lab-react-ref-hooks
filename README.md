# Desafio — `useRef`

> **Categoria:** Referência  
> **Função principal:** Mantém valores entre renders sem disparar novo render.

---

## 📋 Contexto

Você vai construir um **cronômetro** com as funções iniciar, pausar e resetar. O desafio exige que você use `useRef` para guardar o ID do intervalo — sem causar re-renders desnecessários — e também para dar **foco automático** no botão "Iniciar" quando o componente montar.

![Descrição do GIF](./app-capture.gif)

---

## 🎯 Requisitos

1. Exiba o tempo no formato `MM:SS` (ex: `01:43`).
2. Implemente os botões **Iniciar**, **Pausar** e **Resetar**.
3. Use `useRef` para armazenar o `intervalId` retornado pelo `setInterval`.
4. Ao montar o componente, o botão "Iniciar" deve receber **foco automático** (use `useRef` + `.focus()`).
5. Ao clicar em **Resetar**, o cronômetro para e volta a `00:00`.
6. Não deve ser possível criar múltiplos intervalos clicando em "Iniciar" várias vezes.

---

## ⚙️ Restrições

- O `intervalId` **não pode** ser guardado em `useState` (causaria re-render desnecessário).
- Use `useRef` para o `intervalId` e `useState` apenas para o tempo exibido.
- Limpe o intervalo corretamente no cleanup ou no pause/reset.

---

## 💡 Dicas

- `useRef` retorna um objeto `{ current: valor }` que persiste entre renders.
- Alterar `ref.current` **não** causa re-render — é exatamente o que você quer para o intervalo.
- Para o foco automático, crie uma ref apontando para o elemento DOM do botão e chame `ref.current.focus()` dentro de um `useEffect` com array vazio `[]`.

---

## ✅ Critérios de Conclusão

- [ ] O cronômetro conta corretamente em segundos.
- [ ] Pausar e retomar funciona sem reiniciar a contagem.
- [ ] Clicar em "Iniciar" múltiplas vezes não acelera o cronômetro.
- [ ] O botão "Iniciar" está focado automaticamente ao montar.
- [ ] Nenhum `intervalId` é guardado em `useState`.
