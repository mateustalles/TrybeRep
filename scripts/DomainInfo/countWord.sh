#!/bin/bash
#Eu sou Trybe e...
PALAVRA=$1
if [ -z $PALAVRA ]
then
   echo "Ops, você precisa passar um arquivo como argumento!"
   exit
fi
if [ -e $PALAVRA ]
then
   COUNT=`wc -w < $PALAVRA`
   PAGINA=$[$COUNT/300]
   if [ $PAGINA -eq 0 ]
   then
       PAGINA=1
   fi
   TEMPO=$[3*$PAGINA]
   echo "Esta leitura irá demorar $TEMPO minutos."
else
   echo "Ops, o arquivo não existe!"
fi
