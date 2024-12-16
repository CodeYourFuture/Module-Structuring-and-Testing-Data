function repeatTheString(str, count) {
    if (count < 0) {
        throw new Error('Count cannot be negative');
    }
    if (count === 0) {
        return '';
    }
    if (count === 1) {
        return str;
    }
    return str.repeat(count);
}

module.exports = repeatTheString;
