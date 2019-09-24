#!/bin/bash
#Eu sou Trybe e...
API_KEY="dae2c3971d465e0502748431908b045f"
wget -q --spider http://google.com
if [ $? -eq 0 ]
    then
        echo "A internet está ok."
        
    else
        echo "Sua conexão está offline."
        exit
    fi
CIDADE=$1
if [ "$CIDADE" = "" ]
then 
    echo "Ops, você precisa passar o nome de uma cidade como argumento!"
    exit
fi

RESPONSE=`curl -s -G --data-urlencode "appid=$API_KEY" --data-urlencode "q=$CIDADE" http://api.openweathermap.org/data/2.5/weather | grep -Eoi ".temp.:[0-9][0-9][0-9].[0-9][0-9]" `

if [ -z $RESPONSE ]
then    
    echo "Não encontramos a temperatura"
    
fi

RESPONSE=`echo $RESPONSE | grep -Eo '[0-9][0-9][0-9].[0-9]+$'`
RESPONSE=`echo "scale=2; $RESPONSE - 273.15 " | bc`


echo "A temperatura atual em $CIDADE é $RESPONSE ºC."
