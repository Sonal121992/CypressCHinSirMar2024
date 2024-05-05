// 5th May 2024

describe('Block of Tests',()=>{
    it('Test 1',()=>{
        
    })

    it('Test 2',()=>{

    })

    it('Test 3',()=>{

    })

    it('Test 4',()=>{

    })

    it('Test 5',()=>{

    })
})

// Conditional execution of specific it blocks
const runItBlocks = [1, 2, 3]; // Specify the numbers of the it blocks you want to run

runItBlocks.forEach((blockNumber) => {
    switch (blockNumber) {
        case 1:
            it('Test 1', () => {
                // Test 1 logic
            });
            break;
        case 2:
            it('Test 2', () => {
                // Test 2 logic
            });
            break;
        case 3:
            it('Test 3', () => {
                // Test 3 logic
            });
            break;
        // Add cases for other it blocks you want to run
        default:
            break;
    }
});