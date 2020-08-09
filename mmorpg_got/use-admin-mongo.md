# Criando o usuário administrador no Mongodb

## Conecte no banco

    mongo --port 27017
	
## Crie um o usuário administrador com o seguinte comando

### Selecione o banco "admin"

    use admin

### No exemplo eu criei o usuário "admin" com a senha "admin"

	db.createUser({
		user: "admin",
		pwd: "admin",
		roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
	})
	
### String para conexão

    mongodb://admin:admin@localhost:27017/admin
	
[Fonte](https://stackoverflow.com/a/38921949/7986223)