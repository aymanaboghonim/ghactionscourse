function great(name) {
    return 'Hello, ' + name + '!';
}

module.exports = great; // Export the function for use in other files

if (require.main === module) { 
    console.log(great('World')); // Test the function if this file is run directly
}