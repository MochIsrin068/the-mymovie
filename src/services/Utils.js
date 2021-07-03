
class Utils{
    static dateReverse = (date) => {
        const dateParts = date.split('-')
        const year = dateParts[0]
        const month = dateParts[1]
        const day = dateParts[2]

        return `${day} - ${month} - ${year}`
    }
}

export default Utils