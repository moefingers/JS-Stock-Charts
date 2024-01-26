async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');


    // get data
    let data = mockData

    const { GME, MSFT, DIS, BNTX } = data;

    const stocks = [GME, MSFT, DIS, BNTX]

    console.log(stocks)

    console.log(Chart)
}

main()