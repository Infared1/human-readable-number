module.exports = function toReadable (number) {
        const ones = [
            '', 'one', 'two', 'three', 'four', 
            'five', 'six', 'seven', 'eight', 
            'nine'
        ];
        
        const teens = [
            'ten', 'eleven', 'twelve', 'thirteen', 
            'fourteen', 'fifteen', 'sixteen', 
            'seventeen', 'eighteen', 'nineteen'
        ];
        
        const tens = [
            '', '', 'twenty', 'thirty', 'forty', 
            'fifty', 'sixty', 'seventy', 'eighty', 
            'ninety'
        ];
        
        const hundreds = [
            '', 'one hundred', 'two hundred', 'three hundred', 
            'four hundred', 'five hundred', 'six hundred', 
            'seven hundred', 'eight hundred', 'nine hundred'
        ];
    
        if (number === 0) return 'zero';
    
        let words = '';
    
        // Обработка сотен
        const hundred = Math.floor(number / 100);
        if (hundred > 0) {
            words += hundreds[hundred] + ' ';
        }
    
        // Обработка десятков и единиц
        const ten = Math.floor((number % 100) / 10);
        const one = number % 10;
    
        if (ten === 1) {
            words += teens[one] + ' ';
        } else {
            if (ten > 0) {
                words += tens[ten] + ' ';
            }
            if (one > 0) {
                words += ones[one] + ' ';
            }
        }
    
        return words.trim();
    }

