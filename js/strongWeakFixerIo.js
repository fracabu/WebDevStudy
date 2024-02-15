const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://stockvider.p.rapidapi.com/NASDAQ/AAPL/EOD?start_date=2015-05-20&end_date=2015-07-20');
xhr.setRequestHeader('X-RapidAPI-Key', 'SIGN-UP-FOR-KEY');
xhr.setRequestHeader('X-RapidAPI-Host', 'stockvider.p.rapidapi.com');

xhr.send(data);