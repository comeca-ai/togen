# Tengo Landing Page

Uma landing page moderna e responsiva desenvolvida com React, TypeScript, Vite e Tailwind CSS.

## Características

- Landing page otimizada para conversão
- Componentes UI reutilizáveis com shadcn/ui
- Suporte a temas com next-themes
- Responsivo em todos os dispositivos
- SEO otimizado

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:8080`

## Build

```bash
npm run build
```

## Estrutura do Projeto

```
src/
├── components/
│   ├── tengo/          # Componentes específicos do Tengo
│   └── ui/             # Componentes UI reutilizáveis
├── pages/
│   └── Tengo.tsx       # Página principal
├── App.tsx             # Componente raiz
└── main.tsx            # Ponto de entrada
```

## Tecnologias

- **React** 18.3
- **TypeScript** 5.8
- **Vite** 5.4
- **Tailwind CSS** 3.4
- **shadcn/ui** - Componentes UI
- **React Router** 6.30
- **React Query** 5.83

## Deploy

Para fazer o deploy, construa o projeto:

```bash
npm run build
```

Os arquivos estáticos estarão na pasta `dist/` pronto para publicar.
