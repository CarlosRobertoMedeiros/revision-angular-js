Revisão Angular Js
	
	Obs: Compartilhei as libs entre projetos diversosm por isso o bower não está ligado diretamente no projeto app
	
	Para Instalação
	
		1 - Instale o NodeJS
		2 - Através do NPM instale o bower
		3 - Execute o bower update
		4 - Instale o Json-Server e o HTTP-Server
	
	Para Execução do sistema
	
		1 - Subir o Json-Server(Simulador de Rest)
			json-server --watch EmuladorDados\db.json
		2 - Subir o HTTP-Server(Emulador de Front End)
			http-server 
			Obs.: Realizar essa comando dentro do diretório da aplicação