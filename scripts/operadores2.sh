#!/bin/bash

if [ $USER = mateus ] && [ -x operadores2.sh ]
then
	echo "Usuário é $USER ou tem permissao sobre o arquivo"
else
	echo "Usuário não é $USER ou não tem permissão de executar o arquivo."
fi

