const time = (ms) => {
	let hrs = Math.floor(ms / 3600000);
	let min = Math.floor((ms - 3600000 * hrs) / 60000);
	let sec = Math.floor((ms - hrs * 3600000 - min * 60000) / 1000);

	switch (hrs) {
		case 0:
			hrs = "";
			break;
		case 1:
			hrs = hrs +" "+ "hour" + " ";
			break;
		default:
			hrs = hrs +" "+ "hours" + " ";
			break;
	}

    switch (min) {
		case 0:
			min = "";
			break;
		case 1:
			min = min +" "+ "minute" + " ";
			break;
		default:
			min = min +" "+ "minutes" + " ";
			break;
	}

    switch (sec) {
		case 0:
			sec = "";
			break;
		case 1:
			sec = sec +" "+ "second" + " ";
			break;
		default:
			sec = sec +" "+ "seconds" + " ";
			break;
	}

    return (hrs+min+sec).trim()

};


module.exports=time