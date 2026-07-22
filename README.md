# Site Dr. Jair Júnior de Freitas

Site institucional em React para apresentação profissional, tratamentos odontológicos e geração de contatos. O projeto usa somente o nome, logotipo, fotos profissionais e registros encontrados na pasta oficial fornecida. Dados não confirmados permanecem vazios e não são exibidos.

## Tecnologias

- React + TypeScript + Vite
- React Router DOM
- Tailwind CSS e CSS customizado
- Framer Motion
- Lucide React
- React Helmet Async
- Sharp para otimização local das imagens

## Requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Instalação e execução

```bash
npm install
npm run dev
```

Para validar e gerar a versão de produção:

```bash
npm run lint
npm run build
npm run preview
```

## Estrutura principal

```text
src/
├── assets/
│   ├── logo/
│   ├── dentista/
│   ├── clinica/
│   ├── tratamentos/
│   ├── resultados/
│   ├── videos/
│   └── social/
├── components/
│   ├── common/
│   ├── layout/
│   ├── sections/
│   ├── seo/
│   └── treatments/
├── config/
├── data/
├── pages/
├── services/
├── styles/
├── types/
└── utils/
```

## Personalização obrigatória antes de publicar

Edite `src/config/clinic.ts` e complete apenas dados confirmados:

- CRO/UF
- cidade, estado e bairro
- endereço
- telefone e WhatsApp com DDD
- e-mail e Instagram
- domínio
- coordenadas
- horários
- formação e especializações

Campos vazios não aparecem no rodapé, no contato ou nos dados estruturados.

### WhatsApp

Preencha `whatsapp` somente com um número real. A função em `src/utils/contact.ts` remove a formatação e cria os links `wa.me`. Enquanto o número estiver vazio, os botões exibem estado pendente e não abrem links quebrados.

### Imagens

Os materiais oficiais ficam em `src/assets`. Importe novas imagens em `src/config/assets.ts`; nunca use URLs temporárias do Google Drive. Para criar versões WebP após adicionar JPEG ou PNG:

```bash
npm run optimize:images
```

Atualize os imports para apontar aos arquivos `.webp`. Use nomes descritivos, mantenha os textos alternativos e defina dimensões explícitas.

As peças de serviço originais permanecem arquivadas, mas não foram exibidas por conterem alegações promocionais incompatíveis com o conteúdo responsável solicitado.

### Resultados clínicos

`src/data/results.ts` inclui somente composições prontas encontradas na pasta oficial, sem atribuir um tratamento não informado. Confirme e arquive o termo de autorização de cada paciente antes da publicação. Remova imediatamente qualquer item sem autorização.

### Tratamentos

Cadastre ou edite tratamentos em `src/data/treatments.ts`. Cada registro alimenta automaticamente o catálogo, a rota individual, SEO, FAQ, WhatsApp personalizado e tratamentos relacionados.

### SEO e domínio

- Metadados e JSON-LD: `src/components/seo/SEO.tsx`
- Dados locais: `src/config/clinic.ts`
- Sitemap: `public/sitemap.xml`
- Robôs: `public/robots.txt`

Antes de publicar, substitua `https://example.com` no sitemap pelo domínio real e preencha `website` no arquivo de configuração. Depois, valide o sitemap no Google Search Console.

## Analytics e Tag Manager

Copie `.env.example` para `.env` e preencha somente IDs reais:

```env
VITE_GA_ID=
VITE_GTM_ID=
```

Os eventos já estão centralizados em `src/services/analytics.ts` e usam `window.dataLayer`: `click_whatsapp`, `click_phone`, `click_instagram`, `click_email`, `click_schedule`, `view_treatment`, `view_result`, `submit_contact`, `view_location` e `click_route`.

Nenhum script de terceiros é carregado enquanto os IDs e o consentimento não forem configurados. Ao ativar análise, implemente o carregamento condicionado ao consentimento e atualize a Política de Privacidade.

## Publicação na Vercel

1. Importe o repositório na Vercel.
2. Use `npm run build` como comando de build.
3. Use `dist` como diretório de saída.
4. Cadastre variáveis de ambiente reais, se usadas.
5. O arquivo `vercel.json` já direciona rotas da SPA para `index.html`.
6. Conecte o domínio e atualize `clinicConfig.website` e `public/sitemap.xml`.

## Publicação na Netlify

1. Importe o repositório na Netlify.
2. Use `npm run build` como comando de build.
3. Use `dist` como diretório de publicação.
4. O arquivo `public/_redirects` evita erro 404 ao abrir rotas internas.
5. Conecte o domínio e atualize o domínio nos arquivos de SEO.

## Pendências de conteúdo

- CRO/UF
- cidade, estado, bairro e endereço
- telefone e WhatsApp
- e-mail, Instagram e horários
- domínio e coordenadas
- formação e especializações documentadas
- fotos internas da clínica e equipamentos sem texto promocional embutido
- confirmação dos termos de autorização dos registros clínicos
- revisão jurídica da Política de Privacidade

Não publique placeholders, dados de exemplo ou informações profissionais sem confirmação.
