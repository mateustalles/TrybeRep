#!/bin/bash

API_KEY="dae2c3971d465e0502748431908b045f"

CIDADE=$1
if [ -z $CIDADE ]
then 
    echo "Ops, você precisa passar o nome de uma cidade como argumento!"
fi

RESPONSE=`curl -s -G --data-urlencode "appid=$API_KEY" --data-urlencode "q=$CIDADE" http://api.openweathermap.org/data/2.5/weather | grep -Eoi ".temp.:[0-9][0-9][0-9].[0-9][0-9]" `

if [ -z $RESPONSE ]
then    
    echo "Não encontramos a temperatura"
    exit
fi

RESPONSE=`echo $RESPONSE | grep -Eo '[0-9][0-9][0-9].[0-9]+$'`
RESPONSE=`echo "scale=2; $RESPONSE - 273.15 " | bc`


echo "A temperatura atual em $CIDADE é $RESPONSE ºC."