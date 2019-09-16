read -p "Digite o primeiro número: " num1

read -p "Digite o segundo número: " num2

echo "Soma:" $[$num1 + $num2]
echo "Diferença:" $[$num1 - $num2]
echo "Multiplicação:" $[$num1 * $num2]
echo "Divisão:"
echo "scale=2; $num1 / $num2" | bc

