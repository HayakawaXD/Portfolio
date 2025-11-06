# Portfolio Website - Gabriel Santos

Este é o portfólio pessoal de Gabriel Santos — Backend Developer com foco em Cybersecurity. O site é uma página estática construída com HTML, CSS e JavaScript leve para formular envio.

## Visão geral

O site contém seções principais:

- About: Apresentação pessoal e links (CV, GitHub, LinkedIn).
- Experience: Experiências e projetos profissionais/estudos.
- Projects: Cards com projetos recentes e links para os repositórios no GitHub.
- Contact: Formulário que envia para Formspree (formspree.io).

Tecnologias usadas:
- HTML5
- CSS3 (layout responsivo)
- JavaScript (pequena lógica para envio do formulário)

## Estrutura do repositório

- `index.html` — página principal.
- `style.css` — estilos do site.
- `script.js` — script que trata o envio do formulário.
- `foto.png`, `API Project.png`, `FIM Project.png`, `Keylogger Project.png` — imagens dos projetos/perfil (se presentes).
- `GabrielCV.pdf` — currículo para download (se presente).

## Como executar localmente

1. Abra o diretório do projeto no seu editor (ex.: VS Code).
2. Abra `index.html` no navegador. Você pode simplesmente dar duplo-clique no arquivo ou usar a extensão Live Server do VS Code para desenvolvimento local.

Comandos Git sugeridos (PowerShell):

```powershell
# Inicializar repositório local
git init
git branch -M main
git add .
git commit -m "Initial commit"

# Adicionar remoto e enviar (substitua <URL-DO-REPO> pelo seu repositório GitHub)
git remote add origin <URL-DO-REPO>
git push -u origin main
```

Se preferir criar e publicar diretamente com o GitHub CLI (autenticado):

```powershell
# cria repo remoto e faz push (ajusta visibilidade com --public ou --private)
gh repo create NOME_DO_REPO --public --source=. --remote=origin --push
```

## Observações e personalização

- Atualize `GabrielCV.pdf`, imagens e links para apontarem para seus arquivos/URLs atuais.
- O formulário usa Formspree (`action` em `index.html`). Substitua pela sua solução (ex.: servidor próprio, Netlify Forms, etc.) se preferir.
- Para hospedar gratuitamente, você pode usar o GitHub Pages (Settings → Pages) ou serviços como Netlify/Vercel.

## Licença

Sinta-se à vontade para usar e modificar este projeto. Adicione uma licença explícita (ex.: MIT) se quiser permitir reuso público.

---

Se quiser, eu posso:  
- inicializar o git localmente e fazer o commit aqui;  
- criar o repositório remoto e enviar os arquivos para o seu GitHub (preciso que você me forneça a URL do repositório ou autorize o uso do GitHub CLI já autenticado).
