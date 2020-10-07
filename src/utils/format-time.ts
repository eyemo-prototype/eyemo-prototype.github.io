function pad(x: number) {
	if (x < 10) return `0${x}`
	return x
}

export function formatTime(duration: number | null, long = false) {
	if (!duration) return `00:00:00`
	const hours = Math.floor(duration / 60 / 60)
	const mins = Math.floor(duration / 60)
	const seconds = Math.floor(duration % 60)
	const millis = Math.floor((duration - Math.floor(duration)) * 100)
	let time = `${pad(hours)}:${pad(mins)}:${pad(seconds)}`
	if (long) time = `${time}:${pad(millis)}`
	return time
}
