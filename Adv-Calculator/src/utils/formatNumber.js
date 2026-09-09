export const formatNumber = (value) => {
	if (value === 'Error') return value

	const number = Number(value)
	if (!Number.isFinite(number)) return 'Error'

	const formatted = Number.isInteger(number)
		? String(number)
		: String(Number(number.toFixed(10)))

	return formatted.length > 12 ? number.toExponential(6) : formatted
}

export default formatNumber
