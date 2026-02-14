function bubbleSort(input) {
    const arr = [...input]; // Create a copy of the input array
    const steps = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            
            // add comparison step
            steps.push({ type: 'compare', indices: [j, j + 1], array : [...arr] });

            // check if they should swap:
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                steps.push({type: 'swap', indices: [j, j + 1], array: [...arr]});
            }

        }
    }

    // final step
    steps.push({ type: 'sorted', array: [...arr] });
    return steps;
}