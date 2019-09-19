API_KEY='13645586-324c8b3465e933c8eb1632a56'
while getopts "c" OPTION
do 
    case $OPTION in 
        c) X=1
         ;;
    esac 
done
read -p "Digite o termo de busca: " SEARCH_TERM
if [ -z $SEARCH_TERM ]
then
    echo "Você precisa especificar um termo para a busca."
    exit
fi
read -p "Digite quantas imagens voce quer: " QTY_RESULTS    
    if [ -z $QTY_RESULTS ]
    then
        echo "Definindo valor padrão para 3 imagens"
        QTY_RESULTS=3
    elif [ $QTY_RESULTS -eq 0 ] || [ $QTY_RESULTS -lt 3 ]
    then
        echo "Numero abaixo de 3 não permitido, definindo valor padrão"
        QTY_RESULTS=3
    elif [ $QTY_RESULTS -lt 0 ] || [ $QTY_RESULTS -gt 200 ]
    then   
        echo "Valor invalido para quantidade de imagens"
        exit
    fi
        RESPONSE=`curl -s -G -L --data-urlencode "key=$API_KEY" --data-urlencode "q=$SEARCH_TERM" --data-urlencode "image_type=photo" --data-urlencode "per_page=$QTY_RESULTS" https://pixabay.com/api | pcregrep -Mo "https:\/\/pixabay.com\/get\/+([Aa-zZ0-9]+[Aa-zZ0-9]+\D+640)+.jpg"`
        if [ "$RESPONSE" == '' ]
        then
            echo "Motivo não encontrado no banco de dados de imagens."
            exit 
        elif [ $X -eq 1 ]
        then
            echo "Elaborando arquivo compactado"
            mkdir $SEARCH_TERM
            cd $SEARCH_TERM    
            wget -q $RESPONSE
            tar cvzf $SEARCH_TERM.tar.gz .
            cd ..
            mv $SEARCH_TERM/$SEARCH_TERM.tar.gz .
            rm -r $SEARCH_TERM
            exit
        else
            mkdir $SEARCH_TERM
            wget $RESPONSE
        fi
