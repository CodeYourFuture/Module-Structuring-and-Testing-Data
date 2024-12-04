function getOrdinalNumber(num) {
    
    const absNum = Math.abs(num);
    const ones = absNum % 10;
    const tens = Math.floor((absNum % 100) / 10);

    let suffix = 'th';

    
    if (tens === 1) {
        suffix = 'th';
    } else {
        
        switch (ones) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
            default:
                suffix = 'th';
                break;
        }
    }

    return `${num}${suffix}`;
}

module.exports = getOrdinalNumber; 
