function palindrome(str) {
    const numericOnly = str
        .toLowerCase()
        .match(/[a-z0-9]/g);
    return numericOnly.join('') ===
        numericOnly.reverse().join('');
}
palindrome("eye");
