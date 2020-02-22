export default function ProcessAll(data, c) {
    return data.filter(row => row.get('Case') === c).toCollection()
}

