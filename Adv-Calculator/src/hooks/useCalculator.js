import { useState } from 'react'
import { calculate, percentage } from '../utils/calculate'
import { MAX_DIGITS } from '../utils/constants'
import formatNumber from '../utils/formatNumber'

function useCalculator() {
	const [displayValue, setDisplayValue] = useState('0')
	const [previousValue, setPreviousValue] = useState(null)
	const [operator, setOperator] = useState(null)
	const [overwrite, setOverwrite] = useState(false)
	const [lastOperator, setLastOperator] = useState(null)
	const [lastOperand, setLastOperand] = useState(null)

	const handleDigit = (digit) => {
		const value = String(digit)
		if (!/^\d$/.test(value)) return

		if (overwrite || displayValue === 'Error') {
			setDisplayValue(value)
			setOverwrite(false)
			return
		}

		if (displayValue.replace('-', '').replace('.', '').length >= MAX_DIGITS) return
		setDisplayValue(displayValue === '0' ? value : displayValue + value)
	}

	const handleDecimal = () => {
		if (overwrite || displayValue === 'Error') {
			setDisplayValue('0.')
			setOverwrite(false)
		} else if (!displayValue.includes('.')) {
			setDisplayValue(`${displayValue}.`)
		}
	}

	const handleOperator = (nextOperator) => {
		const currentValue = Number(displayValue)
		if (!Number.isFinite(currentValue)) return

		if (previousValue !== null && operator && !overwrite) {
			const result = calculate(previousValue, currentValue, operator)
			if (result === 'Error') {
				setDisplayValue(result)
				return
			}
			setPreviousValue(result)
			setDisplayValue(formatNumber(result))
		} else {
			setPreviousValue(currentValue)
		}

		setOperator(nextOperator)
		setOverwrite(true)
		setLastOperator(null)
		setLastOperand(null)
	}

	const handlePercentage = () => {
		const result = percentage(Number(displayValue))
		setDisplayValue(formatNumber(result))
	}

	const handleToggleSign = () => {
		if (displayValue === '0' || displayValue === 'Error') return
		setDisplayValue(displayValue.startsWith('-') ? displayValue.slice(1) : `-${displayValue}`)
	}

	const handleEquals = () => {
		const currentValue = Number(displayValue)
		if (!Number.isFinite(currentValue)) return null

		let activeOperator = operator
		let leftValue = previousValue
		let rightValue = currentValue

		if (leftValue === null && lastOperator) {
			leftValue = currentValue
			activeOperator = lastOperator
			rightValue = lastOperand
		}

		if (leftValue === null || !activeOperator) return null

		const result = calculate(leftValue, rightValue, activeOperator)
		const formattedResult = formatNumber(result)
		const expression = `${formatNumber(leftValue)} ${activeOperator} ${formatNumber(rightValue)}`

		setDisplayValue(formattedResult)
		setPreviousValue(null)
		setOperator(null)
		setOverwrite(true)
		setLastOperator(activeOperator)
		setLastOperand(rightValue)

		return { expression, result: formattedResult, timestamp: Date.now() }
	}

	const handleClear = () => {
		setDisplayValue('0')
		setPreviousValue(null)
		setOperator(null)
		setOverwrite(false)
		setLastOperator(null)
		setLastOperand(null)
	}

	const handleDelete = () => {
		if (overwrite || displayValue === 'Error') {
			setDisplayValue('0')
			setOverwrite(false)
			return
		}
		setDisplayValue(displayValue.length > 1 ? displayValue.slice(0, -1) : '0')
	}

	return {
		displayValue,
		handleDigit,
		handleDecimal,
		handleOperator,
		handlePercentage,
		handleToggleSign,
		handleEquals,
		handleClear,
		handleDelete,
	}
}

export default useCalculator
