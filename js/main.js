let xhr = new XMLHttpRequest();

xhr.open('get', 'https://www.binance.com/api/v1/ticker/allPrices', true);

xhr.send(null);

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    let str = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i].symbol == 'MDAETH') {
            str += `MDA價格=${data[i].price}<br>`;
        }
        if (data[i].symbol == 'ENGETH') {
            str += `ENG價格=${data[i].price}<br>`;
        }
        if (data[i].symbol == 'ETHUSDT') {
            str += `ETH價格=${data[i].price}<br>`;
        }



    }
    document.querySelector('#data').innerHTML = str;
}



/*
binance
https://www.binance.com/api/v1/ticker/allPrices
https://json2jsonp.com/?url=https%3A%2F%2Fwww.binance.com%2Fapi%2Fv1%2Fticker%2FallPrices&callback=getData

etherdelta
https://api.etherdelta.com/returnTicker
https%3A%2F%2Fapi.etherdelta.com%2FreturnTicker
https://json2jsonp.com/?url=https%3A%2F%2Fapi.etherdelta.com%2FreturnTicker&callback=getData

bittrex
https://bittrex.com/api/v1.1/public/getmarketsummaries
https://json2jsonp.com/?url=https%3A%2F%2Fbittrex.com%2Fapi%2Fv1.1%2Fpublic%2Fgetmarketsummaries&callback=getData


*/