# Opinaí (v1)

[Read in English](README.md)

Site de resenhas de filmes, séries e animes.

> **Projeto de 2024.** Foi meu primeiro projeto com HTML, CSS e JavaScript,
> feito em um curso de programação para internet. Está publicado como registro
> do meu ponto de partida.
>
> Reconheço que este código está desatualizado e tem limitações conhecidas:
> a estrutura é repetitiva, partes do site ainda não funcionam e o layout não
> é totalmente responsivo. Estou desenvolvendo uma nova versão do zero para
> mostrar o quanto evoluí desde então.

## O que tem nesta versão

- Página inicial com navbar, carrossel de filmes e sliders de "Obras em Alta" e "Animes"
- Página de detalhes de uma obra (exemplo: Bebê Rena) com banner, sinopse, elenco, trailer e sugestões
- Layout escuro com detalhes em laranja

## Tecnologias

HTML, CSS, JavaScript e Bootstrap 4.

## Como abrir

Baixe o projeto e abra o arquivo `index.html` no navegador.

## Estrutura do projeto

```
opinai-v1/
├── index.html       # Página inicial: navbar, carrossel e sliders de obras
├── pagina.html      # Página de detalhes de uma obra (exemplo: Bebê Rena)
├── css/
│   ├── style.css    # Estilos da página inicial
│   └── pagina.css   # Estilos da página de detalhes
├── js/
│   └── script.js    # Comportamento dos sliders e dos botões
├── README.md        # Descrição do projeto (inglês)
├── README.pt-br.md  # Descrição do projeto (português)
└── LICENSE          # Licença MIT
```

- **`index.html`**: estrutura da página inicial.
- **`pagina.html`**: estrutura da página de detalhes de uma obra.
- **`style.css`** e **`pagina.css`**: visual de cada página (tema escuro, cards, botões dos sliders, ajustes para telas pequenas).
- **`script.js`**: faz os sliders rolarem para os lados e mostra os avisos de login, cadastro e busca.

Bootstrap e jQuery não ficam no repositório: são carregados da internet pelos links no HTML.

## Limitações desta versão

Login, cadastro, busca, favoritos e comentários ainda não funcionam. Eles
estão planejados para a v2.

## Próximos passos (v2)

- Gerar os cards a partir de uma lista de dados em JavaScript
- Uma única página de detalhes para todas as obras
- Busca, favoritos e comentários salvos no navegador
- Layout responsivo pensando primeiro no celular

## Observações

- O conteúdo do site está em português do Brasil.
- Os pôsteres e banners pertencem aos seus respectivos donos e são usados
  apenas para fins de estudo.
