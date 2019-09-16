#!/bin/bash

read -p "Digite o nome do arquivo: " arquivo

if [ -e $arquivo ]
then
	echo "Arquivo existe"
else
	echo "Arquivo inexiste"
fi
