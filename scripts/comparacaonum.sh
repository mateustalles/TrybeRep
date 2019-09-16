#!/bin/bash

read -p "Digite o primeiro numero: " num1
read -p "Digite o segundo numero: " num2

if [ $num1 -ge $num2 ]
then
	echo "$num1 é maior ou igual a $num2"
else
	echo "$num1 é menor que $num2"
fi
