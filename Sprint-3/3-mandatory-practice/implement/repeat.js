function repeat(str,count) {
    if (count < 0 ) return 'Negative counts are not valid.'
    let repeated = '';
    for ( i = 0; i < count; i++){
        repeated = repeated + str;
    }
    return repeated;
}

module.exports = repeat;