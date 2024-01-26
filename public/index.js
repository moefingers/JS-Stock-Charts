function checkStockColor(stock){
    if(stock === "GME"){
        return 'rgba(61, 161, 61, 0.7)'
    }
    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }
    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }
    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}

async function main() {


    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');


    // get data
    let data = mockData

    const { GME, MSFT, DIS, BNTX } = data;

    const stocks = [GME, MSFT, DIS, BNTX]
    stocks.forEach( stock => stock.values.reverse())

    console.log(stocks)

    console.log(Chart)


    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map(stock => ({
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor:  checkStockColor(stock.meta.symbol),
                borderColor: 'rgba(255, 99, 132, 1)'
            }))
        }
    });
    
    
    
}

main()