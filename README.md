# Safe Life

Site institucional em landing page única para a Safe Life, especializada em guardião de piscina, operador de piscina, manutenção, conservação e tratamento de piscinas para condomínios, clubes, hotéis e áreas de lazer.

## Tecnologias usadas

- React
- Vite
- Tailwind CSS
- Lucide React
- Framer Motion

## Estrutura de pastas

```txt
projeto-safe-life/
├── public/
│   ├── favicon.svg
│   └── assets/
│       ├── hero/
│       │   └── hero.jpg
│       ├── servicos/
│       │   ├── limpeza-bordas.jpg
│       │   ├── tratamento-agua.jpg
│       │   ├── inspecao-filtros.jpg
│       │   ├── manutencao-bombas.jpg
│       │   ├── verificacao-equipamentos.jpg
│       │   ├── aspiracao-fundo.jpg
│       │   ├── aplicacao-produtos.jpg
│       │   ├── limpeza-pre-filtro.jpg
│       │   └── casa-maquinas.jpg
│       └── profissionais/
│           ├── guardiao-observando.jpg
│           ├── teste-agua.jpg
│           ├── postura-vigilancia.jpg
│           ├── equipe-equipamentos.jpg
│           ├── pose-institucional.jpg
│           └── checklist-tablet.jpg
├── src/
│   ├── components/
│   ├── data/
│   │   └── siteData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois abra a URL exibida pelo Vite, normalmente:

```txt
http://127.0.0.1:5173/
```

## Build de produção

```bash
npm run build
```

O build será gerado em `dist/`.

## Imagens locais

Não há dependência de imagens externas. Para trocar as imagens, substitua os arquivos mantendo os mesmos nomes:

- `public/assets/hero/hero.jpg`
- `public/assets/servicos/limpeza-bordas.jpg`
- `public/assets/servicos/tratamento-agua.jpg`
- `public/assets/servicos/inspecao-filtros.jpg`
- `public/assets/servicos/manutencao-bombas.jpg`
- `public/assets/servicos/verificacao-equipamentos.jpg`
- `public/assets/servicos/aspiracao-fundo.jpg`
- `public/assets/servicos/aplicacao-produtos.jpg`
- `public/assets/servicos/limpeza-pre-filtro.jpg`
- `public/assets/servicos/casa-maquinas.jpg`
- `public/assets/profissionais/guardiao-observando.jpg`
- `public/assets/profissionais/teste-agua.jpg`
- `public/assets/profissionais/postura-vigilancia.jpg`
- `public/assets/profissionais/equipe-equipamentos.jpg`
- `public/assets/profissionais/pose-institucional.jpg`
- `public/assets/profissionais/checklist-tablet.jpg`

Os componentes possuem fallback visual caso alguma imagem não carregue.

## Deploy na Vercel

1. Envie o projeto para o GitHub.
2. Crie um novo projeto na Vercel.
3. Selecione o repositório.
4. Framework preset: `Vite`.
5. Build command: `npm run build`.
6. Output directory: `dist`.

## Subir para o GitHub

```bash
git add .
git commit -m "Cria site institucional Safe Life"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

## Dados da empresa

Os dados reais ficam em `src/data/siteData.js`:

- Safe Life
- CNPJ: 24.040.193/0001-72
- Endereço: Estrada do Pontal, 7290, Bloco 2, Apto 204, Rio de Janeiro - RJ
- Telefone/WhatsApp: 21 97038-6990
- E-mail: rogerio.sampaio2403@gmail.com
