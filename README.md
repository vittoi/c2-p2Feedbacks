# c2-p2Feedbacks

## Configurando o ambiente local (SO: Windows)
  ### Pré Requisitos
   Para a preparar o ambiente é necessário instalar algumas ferramentas para dar continuidade ao desenvolvimento, as ferramentas que devem ser intaladas são as seguintes:
   
   ### Node.js
   Baixe o [Node.js]([https://nodejs.org/en/download/]) na versão xx.xxx
   Após baixado, instalado abra o PowerShell e verifique a versão executando
   
   ```bash
    node -v 
   ```   
   
   ### Git 
   Baixe o [Git]([[https://www.npackd.org/p/git64/2.32.0.2]]) na versão xx.xxx
   Após baixado, instalado abra o PowerShell e verifique a versão executando
   
   ```bash
    git --version 
   ```   
   `https://gitforwindows.org/`

  ### Clonar repositório 
  ```bash
  git clone https://github.com/vittoi/c2-p2Feedbacks
  ```
  
  
  
 ## Instalação e execução da API no diretório `./REST`
  
  ### Instale as dependências
  ```bash
  npm install
  ```
  
  ### Executando aplicação
  ```bash
    # development
    npm run start

    # watch mode
    npm run start:dev

    # production mode
    npm run start:prod
  ```
 ## Instalação e execução do Front-End no diretório `./FRONT`
   ### Instale as dependências
  ```bash
  npm install
  ```
  
  ### Iniciar o projeto
  ```bash
  npm start
  ```

  Abra [http://localhost:3000](http://localhost:3000) no seu Browser para visualizar.

  A página irá recarregar quando ao salvar mudanças.
