// Privent double element in string or array
const noDuplicate = obj => {
        if (Array.isArray(obj)) {
            let temp = new Set(obj)
            return [...temp];
        }
        else if (typeof obj === 'string'){
            let temp = new Set([...obj]);
            return [...temp].join('');
        }
        else {
            console.log(invArg('noDuplicate()'));
            return false;
        }
    }