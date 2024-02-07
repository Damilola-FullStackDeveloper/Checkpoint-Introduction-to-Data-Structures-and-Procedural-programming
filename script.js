//SOLUTION TO PROBLEM 2

// Function to calculate dot product of two vectors
function dotProduct(v1, v2) {
    let result = 0;
    for (let i = 0; i < v1.length; i++) {
        result += v1[i] * v2[i];
    }
    return result;
}

// Function to check if two vectors are orthogonal
function areOrthogonal(v1, v2) {
    return dotProduct(v1, v2) === 0;
}

// Function to generate n pairs of vectors and check if they are orthogonal
function checkOrthogonality(n) {
    const vectors = [];
    // Generate n pairs of random vectors
    for (let i = 0; i < n; i++) {
        const v1 = generateVector();
        const v2 = generateVector();
        vectors.push([v1, v2]);
    }
    // Check orthogonality for each pair of vectors
    for (let i = 0; i < vectors.length; i++) {
        const [v1, v2] = vectors[i];
        console.log(`Pair ${i + 1}: Vector 1: [${v1}], Vector 2: [${v2}], Orthogonal: ${areOrthogonal(v1, v2)}`);
    }
}

// Function to generate a random vector of length 3 with values between -10 and 10
function generateVector() {
    const vector = [];
    for (let i = 0; i < 3; i++) {
        vector.push(Math.floor(Math.random() * 21) - 10);
    }
    return vector;
}

// Test the algorithm with 5 pairs of vectors
checkOrthogonality(5);