#!/bin/bash

#primeiro comentario fala pro
#interpretador qual shell vai executar
#no caso o 'bash'
echo "Olá mundo!"

#esse comentario nunca vai aparecer

echo "Digite a sua idade:"
read IDADE 

echo "Sua idade é: $IDADE"

if [ $IDADE -lt 18 ]
then 
echo "Menor de idade =("
else
echo "Maior de idade =)"
fi