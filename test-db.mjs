import { getAllCombinations } from './src/lib/db.js';

try {
    const start = Date.now();
    const combos = getAllCombinations();
    const end = Date.now();
    console.log(`Combinations: ${combos.length}`);
    console.log(`Time: ${end - start}ms`);
} catch (err) {
    console.error('Error running DB:', err);
}
