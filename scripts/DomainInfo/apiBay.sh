API_KEY='13645586-324c8b3465e933c8eb1632a56'
SEARCH_TERM="kittens"
QTY_RESULTS=3
RESPONSE=`curl -s -G -L --data-urlencode "key=$API_KEY" --data-urlencode "q=$SEARCH_TERM" --data-urlencode "image_type=photo" --data-urlencode "per_page=$QTY_RESULTS" https://pixabay.com/api | grep -Eaoi "https:\/\/pixabay.com\/get\/+([Aa-zZ0-9]+[Aa-zZ0-9]+\D+640)+.jpg" `
echo $RESPONSE