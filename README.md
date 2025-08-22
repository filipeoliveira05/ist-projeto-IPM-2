# 🖱️ Bake-off #2: Seleção em UIs Densas

## 📌 Sobre o Projeto
Este repositório contém a implementação desenvolvida para o **Bake-off #2 da cadeira de Interação Pessoa-Máquina (IPM)** do curso de Engenharia Informática e de Computadores (IST).

O objetivo foi **diminuir o tempo de escolha e seleção** numa **interface densa com 80 alvos**, garantindo uma interação eficiente e com baixa taxa de erros. Para isso, foi fornecido um código-base em **p5.js**, que serviu como ponto de partida para aplicar técnicas de **design de interface e fatores humanos**.

---

## 🎯 Objetivo do Trabalho
- **Reduzir o tempo médio de seleção** de alvos numa grelha de 8x10 (80 alvos).
- **Melhorar a usabilidade** da interface através de:
  - Estratégias de organização e feedback
  - Aplicação de heurísticas e princípios de interação
- Garantir um **processo iterativo** com testes e ajustes baseados em métricas reais.

---

## 🛠 O que foi feito
- **Análise inicial:** compreensão do código-base e das métricas registadas (tempo médio, taxa de sucesso).
- **Ideação e Prototipagem:** desenvolvimento de alternativas para melhorar a seleção rápida e precisa.
- **Implementação em p5.js:** introdução de soluções de design sem violar as regras do desafio.
- **Avaliação experimental:** testes com utilizadores, comparação A/B e aplicação de testes estatísticos (*t-test*).

---

## 📂 Conteúdo do Repositório
- [index.html](./index.html) → Ficheiro principal do projeto p5.js.
- [sketch.js](./sketch.js) → Código da interface com melhorias implementadas.
- [legendas/](./legendas/) → Labels usadas para os alvos (não modificadas).
- [style.css](./style.css) → Estilos visuais.
- [enunciado-IPM2425P2.pdf](./enunciado-IPM2425P2.pdf) → Documento com as regras e especificações do projeto.

---

## ✅ Funcionalidades e Melhorias Implementadas
As alterações aplicadas visaram **minimizar o tempo médio de seleção** mantendo as restrições do desafio:

- **Layout otimizado:** reorganização visual para reduzir tempo de busca.
- **Realce dinâmico:** feedback visual para guiar a atenção do utilizador.
- **Estratégias de agrupamento:** palavras agrupadas por letra inicial para facilitar a localização de alvos.
- **Elementos consistentes:** mantendo dimensões iguais em qualquer resolução (uso correto de *PPI* e *PPCM*).

---

## 📊 Avaliação
- **Testes com N ≥ 10 utilizadores** para recolha de métricas.
- **Comparação A/B** entre protótipos de diferentes semanas.
- **Aplicação de testes estatísticos** (t-test) para validar diferenças significativas nos tempos médios.
- **Resultados esperados:** reduzir o tempo médio para valores próximos ou inferiores a **2.557s**.

---

## 🔍 Ferramentas Utilizadas
- [p5.js](https://p5js.org/) – biblioteca principal para desenvolvimento da interface.
- [Firebase](https://firebase.google.com/) – armazenamento das métricas.
- **Editor Web:** [editor.p5js.org](https://editor.p5js.org/) (requisito do enunciado).

---

## 📈 Métricas no Bake-off
- **Taxa de sucesso (accuracy)**
- **Tempo médio por alvo**
- **Tempo médio penalizado** (se a taxa de sucesso < 100%)

Quanto menor o tempo médio penalizado, maior a pontuação obtida no bake-off:
```
<= 2.557s → 10 valores
<= 2.673s → 8 valores
<= 2.812s → 6 valores
<= 3.447s → 4 valores
<= 4.083s → 2 valores
> 4.083s  → 0 valores
```
