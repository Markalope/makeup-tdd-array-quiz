const assert = require('assert');
const filterY = require('../lib/filterY');

describe('Array function', () => {
    let initial = ['sky', 'hot', 'Yeti', 'green'];
    let filtered = ['Is it hot?', 'Is it green?'];

    it('filters out words containing the letter Y', () => {
        const result = filterY(initial);
        assert.deepEqual(result, ['hot', 'green']);
    });
    
    it('forms a sentence with items in the array that do not contain the letter Y', () => {
        const result = filterY(filtered);
        assert.deepEqual(result, ['Is it hot?', 'Is it green?']);
    });


});