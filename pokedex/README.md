# 🎯 Pokedex

Uma aplicação web moderna e responsiva que permite explorar informações detalhadas sobre Pokémons usando a [PokéAPI](https://pokeapi.co/). Interface intuitiva com design inspirado nos tipos de Pokémon.

## 📋 Funcionalidades

- **Listagem de Pokémons**: Exibe Pokémons com informações básicas (número, nome, tipos e imagem)
- **Carregamento dinâmico**: Botão "Carregar Mais" para adicionar novos Pokémons à lista
- **Modal detalhado**: Clique em qualquer Pokémon para ver informações completas:
  - Altura e peso
  - Habilidades
  - Status/estatísticas
  - Imagem em alta qualidade
- **Design responsivo**: Interface adaptável para dispositivos móveis, tablets e desktop
- **Cores por tipo**: Cada Pokémon é colorido conforme seu tipo primário

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização com Grid Layout e Flexbox
- **JavaScript ES6+**: Lógica da aplicação
- **PokéAPI**: API REST para dados dos Pokémons
- **Google Fonts**: Fonte Roboto para tipografia

## 📁 Estrutura do Projeto

```
pokedex/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   ├── global.css       # Estilos globais e responsivos
│   │   └── pokedex.css      # Estilos específicos dos Pokémons
│   └── js/
│       ├── main.js          # Lógica principal da aplicação
│       ├── poke-API.js      # Integração com a PokéAPI
│       └── pokemon_model.js # Modelo de dados do Pokémon
└── README.md               # Documentação do projeto
```

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd primeiro-repositorio/pokedex
   ```

2. **Abra no navegador**:
   - Método 1: Abra o arquivo `index.html` diretamente no navegador
   - Método 2: Use um servidor local (Live Server, http-server, etc.)

3. **Pronto!** A aplicação estará rodando e consumindo dados da PokéAPI

## 💻 Responsividade

A aplicação se adapta automaticamente aos seguintes breakpoints:

- **Mobile** (< 390px): 1 coluna
- **Small tablets** (390px - 575px): 2 colunas  
- **Large tablets** (576px - 991px): 3 colunas
- **Desktop** (≥ 992px): 4 colunas

## 🎨 Tipos de Pokémon Suportados

A aplicação inclui cores específicas para todos os tipos:

| Tipo | Cor |
|------|-----|
| Normal | #a6a877 |
| Fire | #ee7f30 |
| Water | #678fee |
| Electric | #f7cf2e |
| Grass | #77c850 |
| Ice | #98d5d7 |
| Fighting | #bf3029 |
| Poison | #a040a0 |
| Ground | #dfbf69 |
| Flying | #a98ff0 |
| Psychic | #f65687 |
| Bug | #a8b720 |
| Rock | #b8a137 |
| Ghost | #6e5896 |
| Dragon | #6f38f6 |
| Dark | #725847 |
| Steel | #b9b7cf |
| Fairy | #f9aec7 |

## 🔧 Funcionalidades Técnicas

### API Integration
- Consumo da PokéAPI v2
- Tratamento de requisições assíncronas com Promises
- Cache automático de dados pelo navegador

### Interface
- Modal dinâmico para exibição de detalhes
- Event listeners para interações
- Grid CSS para layout responsivo
- Lazy loading de imagens

### Estrutura de Dados
- Modelo Pokemon com propriedades tipadas
- Transformação de dados da API para formato da aplicação
- Mapeamento dinâmico de tipos e cores

## 🌐 API Externa

Este projeto utiliza a [PokéAPI](https://pokeapi.co/), uma API RESTful gratuita que fornece dados completos sobre Pokémons. Nenhuma chave de API é necessária.

**Endpoints utilizados**:
- `GET /pokemon?offset={offset}&limit={limit}` - Lista paginada
- `GET /pokemon/{id_or_name}` - Detalhes específicos

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova funcionalidade'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [PokéAPI](https://pokeapi.co/) pelos dados dos Pokémons
- [Google Fonts](https://fonts.google.com/) pela fonte Roboto
- [Normalize.css](https://necolas.github.io/normalize.css/) para consistência entre navegadores

---

Desenvolvido com ❤️ para treinar JavaScript e consumo de APIs