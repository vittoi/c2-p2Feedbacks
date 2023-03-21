# c2-p2Feedbacks

## Configurando o ambiente local (SO: Windows)
  ### Pré Requisitos
   Para a preparar o ambiente é necessário instalar algumas ferramentas para dar continuidade ao desenvolvimento, as ferramentas que devem ser intaladas são as seguintes:
   
   ### Node.js
   Baixe o [Node.js](https://nodejs.org/en/download/) na versão xx.xxx
   Após baixado, instalado abra o PowerShell e verifique a versão executando
   
   ```bash
    node -v 
   ```   
   
   Verifique se o gerenciador de pacotes npm foi instalado também, execute
   ```bash
    npm -v 
   ```  
   
   ### Git 
   Baixe o [Git](https://www.npackd.org/p/git64/2.32.0.2) na versão 2.32.0.2
   Após baixado, instalado abra o PowerShell e verifique a versão executando
   
   ```bash
    git --version 
   ```   
   
  ### Clonar repositório 
  Abra um terminal e vá para o diretório onde pretende baixar o projeto e execute para baixar todos os arquivos necessários para execução do projeto
  ```bash
  git clone https://github.com/vittoi/c2-p2Feedbacks
  ```
  
   ### MongoDb 
   Baixe o [Mongo](https://www.mongodb.com/try/download/compass) na versão 01.35.0
   Após baixado, instalado execute o MongoCompass e import a conexão clicando em connect no canto superior esquerdo da tela, e depois na opção 'import saved connections'
   
![image](https://user-images.githubusercontent.com/42901778/214258611-f5e9d36d-40fc-4e23-967a-d65ae2cceeab.png)

  vá ao diretório onde o projeto foi instalado e no diretório `.\banco` selecione o arquivo `connection.json`
  
  ## Importar dados do banco
  Agora que já temos a conexão configurada, clique na nova conexão e deois em connect.
  
  ![image](https://user-images.githubusercontent.com/42901778/214261517-b075ccde-1f9b-467a-8342-84d0b08f04d9.png)

  Para importar cada collection abra a opção extensão, clique em uma collection e depois na opção `Add Data`
  
  ![image](https://user-images.githubusercontent.com/42901778/214262158-8de69fd8-6e35-4f7d-9909-444991a62c6b.png)

  Ao clicar em `import file` se direcione para o diretório `./banco\collections` e selecione o arquivo com o mesmo nome da collection
  
  ![image](https://user-images.githubusercontent.com/42901778/214262942-3d4659fe-3a17-4cf1-a5d4-b3d774b99895.png)

  repita o processo para todas as collections.
  
 ## Instalação e execução da API
 Já temos todos os arquivos do projeto local, agora precisamos intalar as dependencias para que se consiga começar os testes.
 
 Para instalar as depencias da API, abra o PowerShell como administrador e se direcione a pasta `./REST`, execute
  
  ```bash
  npm install
  ```
  
  O ambiente do back-end já está preparado, sempre que for usar os serviços execute a aplicação com os seguintes comandos
  ```bash
    # watch mode
    npm run start:dev

    # production mode
    npm run start:prod
  ```
 ## Instalação e execução do Front-End
 Para instalar as depencias do front-end, abra o PowerShell como administrador e se direcione a pasta `./FRONT`, execute
  ```bash
  npm install
  ```
  Depois de terminar a instalação de todas as dependencias você pode executar o projeto com o seguinte comando
  ```bash
  npm start
  ```

  Abra [locahost](http://localhost:3000) no seu Browser para visualizar.

  A página irá recarregar quando ao salvar mudanças.
  
  ## Testes
  
  ### Postman
  
  Antes de fazer os testes veja uma breve explicação dos termos usados neste ambiente e como eles podem ser utilizado.
  
  Baixe o [Postman](https://www.postman.com/downloads/) na versão xx.xxx
  
  Após baixado e instalado abra o Postman.
  
  ### Verbos HTTP
  
  #### GET 
  O método GET é usado para solicitar recursos de um servidor e não deve alterar o estado do servidor ou do recurso solicitado. Ele é seguro e repetível, o que significa que a mesma solicitação pode ser feita várias vezes sem causar efeitos colaterais.
    
  #### POST
  O método POST é usado para enviar dados para um servidor, permitindo a modificação do estado do servidor ou do recurso solicitado. Não é seguro ou repetível e é usado em formulários web e upload de arquivos.
    
  #### PUT
  O método PUT é usado para atualizar um recurso existente em um servidor. Ele envia os dados atualizados para substituir completamente o recurso existente e é idempotente, o que significa que uma solicitação PUT pode ser repetida várias vezes sem alterar o resultado ou o estado do servidor. É usado em APIs RESTful para atualizar recursos existentes.
    
  #### DELETE 
  O método DELETE é usado para remover um recurso existente em um servidor. Ele solicita que o servidor remova completamente o recurso especificado e é idempotente, o que significa que uma solicitação DELETE pode ser repetida várias vezes sem alterar o resultado ou o estado do servidor. É comumente usado em APIs RESTful para remover recursos existentes.
  
  ### Endpoint
  
  Um endpoint em REST é a URL específica usada para acessar um recurso ou serviço em um servidor através de uma API RESTful. Cada endpoint é definido por um método HTTP específico e geralmente inclui parâmetros que definem qual recurso está sendo acessado e o que deve ser feito com ele.
  
  ### Headers
  Os cabeçalhos HTTP são informações adicionais enviadas junto com uma solicitação ou resposta HTTP. Eles fornecem informações sobre o tipo de conteúdo, a versão do protocolo HTTP, autenticação e outros detalhes que ajudam a controlar o comportamento da solicitação ou resposta. Eles são importantes para garantir que as solicitações e respostas sejam interpretadas corretamente pelos servidores e clientes.
  
  ### Exemplo
  
  Os verbos são mapeados nos arquivos .controller, ou seja o controller vai ser o primeiro lugar a executar quando houver uma requisição, assim tudo que aquela ação deve fazer deve começar ali e obedecer os padrões da arquitetura utilizada.
  
  A URL base é https://localhost:3030/
  
  Para criar um novo endpoint na aplicação consultar [NEST docs](https://docs.nestjs.com/recipes/crud-generator)
  
  Aqui você vai encontrar mais informações e boas práticas no padrão [REST](https://www.alura.com.br/artigos/rest-principios-e-boas-praticas) 
  
  Para executar uma requisição escolha o verbo(No exemplo abaixo o selecionado é o GET) que deseja e insira a [URL padrão](https://localhost:3030/) concatenada com o endpoint que deseja.
  
  ![image](https://user-images.githubusercontent.com/42901778/223327816-6237fe3f-be40-4db0-94b5-3a94e7bde402.png)

