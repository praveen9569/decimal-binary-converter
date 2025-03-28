document.addEventListener('DOMContentLoaded', function() {
    const decInput = document.getElementById('dec-inp');
    const binInput = document.getElementById('bin-inp');
    const errorMsg = document.getElementById('error-msg');
    
    // Clear error message initially
    errorMsg.textContent = '';
    
    // Convert Decimal to Binary
    decInput.addEventListener('input', function() {
        const decimalValue = decInput.value.trim();
        
        if (decimalValue === '') {
            binInput.value = '';
            errorMsg.textContent = '';
            return;
        }
        
        // Check if input is a valid decimal number
        if (/^-?\d+$/.test(decimalValue)) {
            const number = parseInt(decimalValue, 10);
            
            // Check if number is within safe integer range
            if (number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER) {
                errorMsg.textContent = 'Number is too large/small for accurate conversion';
                binInput.value = '';
            } else {
                errorMsg.textContent = '';
                // Convert to binary (handle negative numbers with two's complement)
                if (number >= 0) {
                    binInput.value = number.toString(2);
                } else {
                    // For negative numbers, show 32-bit two's complement representation
                    binInput.value = (number >>> 0).toString(2);
                }
            }
        } else {
            errorMsg.textContent = 'Please enter a valid decimal number';
            binInput.value = '';
        }
    });
    
    // Convert Binary to Decimal
    binInput.addEventListener('input', function() {
        const binaryValue = binInput.value.trim();
        
        if (binaryValue === '') {
            decInput.value = '';
            errorMsg.textContent = '';
            return;
        }
        
        // Check if input is a valid binary number
        if (/^[01]+$/.test(binaryValue)) {
            errorMsg.textContent = '';
            // Convert binary to decimal
            decInput.value = parseInt(binaryValue, 2);
        } else {
            errorMsg.textContent = 'Please enter a valid binary number (0s and 1s only)';
            decInput.value = '';
        }
    });
});