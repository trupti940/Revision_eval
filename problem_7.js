function debounce(func,delay){
    let time;
    return function(...args){
        clearInterval(time);
        setTimeout(()=>func(...args),delay);
    };
}

const log = () => console.log("Debounced!");
const debouncedLog = debounce(log,2000);
debouncedLog();