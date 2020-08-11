# Gerador de aplicativos do Express

Use a ferramenta geradora de aplicativos, express, para rapidamente criar uma estrutura básica de aplicativo.

## Instalar

Instale o express com o comando a seguir:

    npm install express-generator -g
    
## Gerando o projeto
    
Cria um aplicativo do Express chamado "myapp" no diretório utilizando "pug" como "view engine":

    express --view=pug myapp

[Fonte](https://expressjs.com/pt-br/starter/generator.html)
    
## Instalar dependências

    npm install

## Iniciar projeto

    SET DEBUG=core-frontend:* & npm start
    
### Configuração do arquivo `.vscode\launch.json` do Visual Studio Code


    {
        "version"       : "0.2.0",
        "configurations": [{
            "command": "set DEBUG=core-frontend:* & npm start",
            "name"   : "Run npm start",
            "request": "launch",
            "type"   : "node-terminal"
        }, ]
    }
	
Assim basta aperta F5 para iniciar o projeto.
