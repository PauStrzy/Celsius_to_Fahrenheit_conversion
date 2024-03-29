let converter = document.querySelector('#converter')
let result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let fahrenheit
let celsius

// T(°F) = T(°C) x 1.8 + 32
// T(°C) = (T(°F) - 32) / 1.8

const change = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
        result.textContent = ''
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
        result.textContent = ''
	}
}

changeBtn.addEventListener('click', change)

const fahrToCel = () => {
	fahrenheit = converter.value * 1.8 + 32
	// Math.round
	result.textContent = `${converter.value} °C to ${fahrenheit.toFixed(1)} °F`
	converter.value = ''
}
const celToFahr = () => {
	celsius = Math.round((converter.value - 32) / 1.8)
	result.textContent = `${converter.value} °F to ${celsius.toFixed(1)} °C`
	converter.value = ''
}

const check = () => {
	if (converter.value !== '') {
		if (one.textContent === '°C') {
			fahrToCel()
		} else {
			celToFahr()
		}
	} else {
		result.textContent = 'Musisz podać wartość'
	}
}

convBtn.addEventListener('click', check)


const reset = () =>
{
    converter.value = ''
    result.textContent = ''
}

resetBtn.addEventListener('click', reset)