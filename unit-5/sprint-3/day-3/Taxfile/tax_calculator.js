const tax = (income) => {
	if (income < 250000) {
		return 0;
	} else if (income>=250000 && income<500000) {
		return 0.05 * income;
	} else if (income>=500000 &&  income < 1000000) {
		return 0.12 * income;
	} else if (income>=1000000) {
		if (0.03 * income < 50000) {
			return income * 0.27;
		}
		return 0.3 * income - 50000;
	}
};

module.exports = tax;
