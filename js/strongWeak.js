fetch('https://api.currencyfreaks.com/v2.0/rates/latest?apikey=f117ef78b86d4043ab95778725dd991a&symbols=USD,NZD,GBP,EUR,AUD,JPY')
  .then(response => response.json())
  .then(data => {
    console.log('Dati:', data);  // Mostra i dati ricevuti dall'API per il debug

    const container = document.getElementById('dataContainer');
    const rates = data.rates;
    // Calcola la forza per ogni valuta
    let strengthData = {
      EUR: calculateStrength(rates.EUR),
      AUD: calculateStrength(rates.AUD),
      GBP: calculateStrength(rates.GBP),
      JPY: calculateStrength(rates.JPY),
      NZD: calculateStrength(rates.NZD),
      USD: calculateStrength(rates.USD)
      
    };

    // Opzioni per il grafico di forza e debolezza
    let strengthChartOptions = {
      type: 'bar',
      data: {
        labels: Object.keys(strengthData),
        datasets: [{
          label: 'Strength',
          data: Object.values(strengthData),
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1,
          
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    // Crea il grafico di forza e debolezza
    let strengthChartCtx = document.getElementById('strengthChart').getContext('2d');
    let strengthChart = new Chart(strengthChartCtx, strengthChartOptions);

    // Determina la coppia forte/debole
    let strongestCurrency = getStrongestCurrency(strengthData);
    let weakestCurrency = getWeakestCurrency(strengthData);
    let selectedPairRate = (1 / rates[strongestCurrency]) / (1 / rates[weakestCurrency]);
    let selectedPairText = `${strongestCurrency}/${weakestCurrency} = ${selectedPairRate.toFixed(4)}`;

    // Opzioni per il grafico della coppia selezionata
    let selectedPairChartOptions = {
      type: 'bar',
      data: {
        labels: [`${strongestCurrency}/${weakestCurrency}`],
        datasets: [{
          label: 'Selected Pair Rate',
          data: [selectedPairRate,],
          backgroundColor: 'rgba(40, 167, 69, 0.5)',
          borderColor: 'rgba(40, 167, 69, 1)',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true
          }
        }
      }
    };

    function calculateStrength(rate) {

      return 1 / rate;

    }

    function getStrongestCurrency(strengthData) {
      let strongestCurrency = '';
      let strongestRate = 0;
      for (let currency in strengthData) {
        if (strengthData[currency] > strongestRate) {
          strongestRate = strengthData[currency];
          strongestCurrency = currency;
        }
      }
      return strongestCurrency;
    }

    function getWeakestCurrency(strengthData) {
      let weakestCurrency = '';
      let weakestRate = Infinity;
      for (let currency in strengthData) {
        if (strengthData[currency] < weakestRate) {
          weakestRate = strengthData[currency];
          weakestCurrency = currency;
        }
      }
      return weakestCurrency;
    }


    // Gestione di USD/JPY
    const usdToJpyRate = parseFloat(rates['JPY']);
    console.log('USD/JPY Rate:', usdToJpyRate); // Mostra il tasso di cambio USD/JPY
    const usdToJpyText = `USD/JPY = ${usdToJpyRate.toFixed(2)}`;
    const usdToJpyContainer = document.createElement('div');
    usdToJpyContainer.className = 'major-currencies-container';
    const usdToJpyElement = document.createElement('div');
    usdToJpyElement.textContent = usdToJpyText;
    usdToJpyContainer.appendChild(usdToJpyElement);
    container.appendChild(usdToJpyContainer);
    usdToJpyContainer.classList.add('panel');
    // Visualizzazione dei rapporti per le altre valute rispetto al USD
    Object.keys(rates).forEach(currency => {
      if (currency !== "JPY") { // Salta JPY perché già gestito
        const rateToUsd = (1 / rates[currency]).toFixed(4);
        console.log(`${currency}/USD Rate:`, rateToUsd); // Mostra il tasso di cambio per ciascuna valuta/USD
        const ratioText = `${currency}/USD = ${rateToUsd}`;
        const currencyContainer = document.createElement('div');
        currencyContainer.className = 'major-currencies-container';
        const ratioElement = document.createElement('div');
        ratioElement.textContent = ratioText;
        currencyContainer.appendChild(ratioElement);
        container.appendChild(currencyContainer);
        currencyContainer.classList.add('panel');
      }
    });





    // Calcolo dei rapporti EUR/USD e AUD/USD
    const eurToUsd = 1 / rates['EUR'];
    const audToUsd = 1 / rates['AUD'];

    // Calcolo del tasso incrociato EUR/AUD
    const eurToAud = eurToUsd / audToUsd;
    const eurToAudElement = document.createElement('div');
    eurToAudElement.className = 'cross-rates-container';
    eurToAudElement.textContent = `EUR/AUD = ${eurToAud.toFixed(4)}`;
    container.appendChild(eurToAudElement);
    eurToAudElement.classList.add('panel');

    // Calcolo del tasso incrociato EUR/JPY
    const usdToJpy = 1 / rates['JPY']

    // Calcolo del tasso incrociato EUR/JPY
    const eurToJpy = eurToUsd / usdToJpy;
    const eurToJpyElement = document.createElement('div');
    eurToJpyElement.className = 'cross-rates-container';
    eurToJpyElement.textContent = `EUR/JPY = ${eurToJpy.toFixed(4)}`;
    container.appendChild(eurToJpyElement);
    eurToJpyElement.classList.add('panel');

    // Calcolo del tasso incrociato EUR/GBP


    const gbpToUsd = 1 / rates['GBP'];

    // Calcolo del tasso incrociato EUR/GBP
    const eurToGbp = eurToUsd / gbpToUsd;
    const eurToGbpElement = document.createElement('div');
    eurToGbpElement.className = 'cross-rates-container';
    eurToGbpElement.textContent = `EUR/GBP = ${eurToGbp.toFixed(4)}`;
    container.appendChild(eurToGbpElement);
    eurToGbpElement.classList.add('panel');

    const nzdToUsd = 1 / rates['NZD'];


    // Calcolo del tasso incrociato EUR/NZD
    const eurToNzd = eurToUsd / nzdToUsd;
    const eurToNzdElement = document.createElement('div');
    eurToNzdElement.className = 'cross-rates-container';
    eurToNzdElement.textContent = `EUR/NZD = ${eurToNzd.toFixed(4)}`;
    container.appendChild(eurToNzdElement);
    eurToNzdElement.classList.add('panel');

    // Calcolo del tasso incrociato GBP/JPY
    const gbpToJpy = gbpToUsd / usdToJpy;
    const gbpToJpyElement = document.createElement('div');
    gbpToJpyElement.className = 'cross-rates-container';
    gbpToJpyElement.textContent = `GBP/JPY = ${gbpToJpy.toFixed(4)}`;
    container.appendChild(gbpToJpyElement);
    gbpToJpyElement.classList.add('panel');

    // Calcolo del tasso incrociato GBP/AUD
    const gbpToAud = gbpToUsd / audToUsd;
    const gbpToAudElement = document.createElement('div');
    gbpToAudElement.className = 'cross-rates-container';
    gbpToAudElement.textContent = `GBP/AUD = ${gbpToAud.toFixed(4)}`;
    container.appendChild(gbpToAudElement);
    gbpToAudElement.classList.add('panel');

    // Calcolo del tasso incrociato GBP/NZD
    const gbpToNzd = gbpToUsd / nzdToUsd;
    const gbpToNzdElement = document.createElement('div');
    gbpToNzdElement.className = 'cross-rates-container';
    gbpToNzdElement.textContent = `GBP/NZD = ${gbpToNzd.toFixed(4)}`;
    container.appendChild(gbpToNzdElement);
    gbpToNzdElement.classList.add('panel');

    // Calcolo del tasso incrociato AUD/JPY
    const audToJpy = audToUsd / usdToJpy;
    const audToJpyElement = document.createElement('div');
    audToJpyElement.className = 'cross-rates-container';
    audToJpyElement.textContent = `AUD/JPY = ${audToJpy.toFixed(4)}`;
    container.appendChild(audToJpyElement);
    audToJpyElement.classList.add('panel');

    // Calcolo del tasso incrociato NZD/JPY
    const nzdToJpy = nzdToUsd / usdToJpy;
    const nzdToJpyElement = document.createElement('div');
    nzdToJpyElement.className = 'cross-rates-container';
    nzdToJpyElement.textContent = `NZD/JPY = ${nzdToJpy.toFixed(4)}`;
    container.appendChild(nzdToJpyElement);
    nzdToJpyElement.classList.add('panel');




  })
  .catch(error => console.error('Errore:', error));

