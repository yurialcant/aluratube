# AluraTube
Projeto criado durante a Imersão React da Alura.
| 🪧 Vitrine.Dev |     |
| -------------  | --- |
| ✨ Nome        | AluraTube
| 🏷️ Tecnologias | JavaScript, React, Nextjs
| 🚀 URL         |https://aluratube-h07hefta5-yurialcant.vercel.app/
| 🤿 Desafio |https://www.alura.com.br/imersao-react/aula01-web-componentes-deploy
#vitrine-dev #vitrinedev#alura

<h1 align ="center"> Projeto AluraTube</h1>
<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20CONSTRUCAO&color=GREEN&style=for-the-badge"/>
<img src="https://img.shields.io/static/v1?label=LANGUANGE&message=JAVASCRIPT&color=YELLOW&style=for-the-badge"/>
</p>

<h1>Primeira Aula</h1>
<h2>A WEB, OS COMPONENTES E O DEPLOY!</h2>
Na nossa primeira aula, fomos aprensentados ao nosso projeto, que é construir uma HomePage semelhante ao que é encontrado no Youtube, para isso decidimos utilizar o React para nos auxiliar e utilizar o VSCode para construir nosso código.
Após instalarmos o React na nossa máquina, criamos a pasta que será utilizada para o projeto e abrimos o VSCode, após abrir a pasta no nosso editor, criamos o arquivo next.config para configurar o framework next que também irá nos ajudar a construir o projeto.

![Captura de Tela (250)](https://user-images.githubusercontent.com/102321564/200426725-7d9586e5-9bb3-4345-86fa-b21c01b8d102.png)

A partir daí criamos o arquivo index dentro da pasta page, onde iremos criar as funções que serão utilizadas na HomePage, para ajudar na construção das nossas funções, 
criamos o arquivo config.json para determinar alguns parâmetros que serão utilizados em nosso index.

![Captura de Tela (251)](https://user-images.githubusercontent.com/102321564/200427539-b20ee23a-f16c-40e6-971f-8ecea824591d.png)

Por fim, antes de voltarmos para nosso index, criamos a pasta src, components e colocamos os arquivos CSSReset, Favorites, Menu e Timeline, todos esses arquivos 
possuem parâmentos de estilização para nosso projeto.

![Captura de Tela (252)](https://user-images.githubusercontent.com/102321564/200428093-2a54230a-7679-4f87-b015-4bf619268f62.png)

Agora podemos voltar ao nosso index, começamos criando a função da HomePage e dentro dela invocamos todas as outras funções construídas no arquivo.

![Captura de Tela (253)](https://user-images.githubusercontent.com/102321564/200428490-614c731a-85e5-46f9-a69e-3269c620fb6a.png)

Criamos a função do nosso Header com alguns parâmetros de estilização.

![Captura de Tela (254)](https://user-images.githubusercontent.com/102321564/200428757-7e7c1f7b-8796-4236-8062-f95bbbeb916f.png)

E para finalizar a nossa primeira aula, criamos as funções de Timeline e de favoritos, optamos por utilizar o map ao invés do foreach ou do for, pois ele é o único método que nos entregava o retorno desejado e da forma esperada.

![Captura de Tela (255)](https://user-images.githubusercontent.com/102321564/200428979-2f4fae71-72b5-47d3-9451-c224ac46191e.png)

![Captura de Tela (256)](https://user-images.githubusercontent.com/102321564/200429109-752f41b6-26b0-452a-9edc-a5d1dd9da5ed.png)

E ao final da primeira aula, obtivemos o seguinte resultado em nosso projeto:
![image](https://user-images.githubusercontent.com/102321564/200429243-99ac9e8f-e625-437a-a2b0-e0077b1ce2e1.png)

<h1>Segunda Aula</h1>
<h2>Entendo o State e fazendo a busca do AluraTube</h2>

Em nossa segunda aula, iniciamos criando a pasta de Menu e adicionando a pasta components, jogamos o arquivo menu dentro da pasta Menu e alteramos o nome do arquivo para index, para não ocorrer problemas com os imports no arquivo principal.

![Captura de Tela (258)](https://user-images.githubusercontent.com/102321564/200649486-6b02f17a-3305-4bff-b9f0-5ace06d6afb7.png)

Criamos o arquivo Search, que irá representar a barra de busca, adicionamos a função search com criação das constantes valorDaBusca e setValorDaBusca e em nosso retorno adicionamos o StyledSearch que é a estilização do botão de busca.

![Captura de Tela (259)](https://user-images.githubusercontent.com/102321564/200650436-d463cdc3-9516-4122-a27e-41381eca0544.png)

Após isso, no arquivo principal adicionamos as constantes com valorDoFiltro e setValorDoFiltro recebendo o React.useState que irá nos ajudar no uso da nossa barra de busca, passando os valores, dentro da nossa HomePage.

![Captura de Tela (260)](https://user-images.githubusercontent.com/102321564/200650965-e67088e1-9a49-4b7f-9b84-83598a426af0.png)

E por fim no nosso mapping de videos adicionamos o filter de video com os Normalized para não ocorrer erros na busca, junto do nosso return com a função includes recebendo nosso searchValueNormalized.

![Captura de Tela (261)](https://user-images.githubusercontent.com/102321564/200651684-67bc6e19-d8fd-4f75-9ec8-4ec6104421da.png)

Portanto ao fim da segunda aula obtivemos o seguinte resultado:

![Captura de Tela (262)](https://user-images.githubusercontent.com/102321564/200651974-a46fb6a5-de08-40e2-b361-700153c49c65.png)

<h1>Terceira Aula</h1>
<h2>Implementando o Dark Mode com CONTEXTAPI</h2>

Nosso objetivo na terceira aula, foi o de criar um modo que irá nos permitir alterar entre o tema light e o dark em nosso projeto, para isso, criamos o arquivo DarkModeSwitch onde nele está implementado a estilização do nosso modo dark e adicionamos a função do switch entre os modos, atravpes do uso combinado entre o useContext do React com o toggleMode para possibilitar a mudança de temas.

![Captura de Tela (263)](https://user-images.githubusercontent.com/102321564/201160271-f670f97c-2463-43f5-b367-e012e5b3d474.png)

Aós isso criamos o arquivo ColorMode para armazenar o Provider que irá armazenar as configurações para as mudanças de temas, setamos um condição para a verificação da mudança de tema.


![Captura de Tela (264)](https://user-images.githubusercontent.com/102321564/201160950-6a2defe8-862f-4ae9-bf06-b69d1072cb7f.png)

Por fim criamos o arquivo _app que irá possuir as definições globais do nosso NextJS e o ThemeProvider que ira prover o tema para nossa aplicação.

![Captura de Tela (265)](https://user-images.githubusercontent.com/102321564/201161530-8b4a0d0b-6448-487e-bf69-bb8f2835a720.png)







