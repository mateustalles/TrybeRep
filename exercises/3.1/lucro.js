var vProduto = 200,
    vVenda = 250,
    x=0;

function venda1000 (vProduto,vVenda) {
    vProduto = vProduto*1,2;
    var vFinal = vVenda - vProduto;
    var lucro = (vFinal * 1000);
    console.log (lucro);
    return lucro;
}

venda1000(vProduto,vVenda);