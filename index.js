//SOLUTION TO PROBLEM 1

function findDistinctSum(set1, set2) {
    let distinctSum = 0;
    
    // Function to check if an element is present in the set
    function isElementPresent(element, set) {
        return set.indexOf(element) !== -1;
    }
    
    // Iterate over elements in set1
    for (let element of set1) {
        if (!isElementPresent(element, set2)) {
            distinctSum += element;
        }
    }
    
    // Iterate over elements in set2
    for (let element of set2) {
        if (!isElementPresent(element, set1)) {
            distinctSum += element;
        }
    }
    
    return distinctSum;
}

// Example usage
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];