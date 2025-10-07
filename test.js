/*
 * This file contains simple SonarQube issues that are easy for a robot to fix.
 */

/**
 * Checks if a user has a specific role.
 * @param {object} user - The user object, e.g., { name: 'Alex', role: 'admin' }
 * @param {string} role - The role to check for.
 * @param {object} options - An unused parameter.
 */
// Sonar Issue: 'options' is declared but its value is never read.
function checkAccess(user, role, options) {
    // Sonar Issue: This 'if' statement is redundant and can be simplified.
    // Sonar Issue: Braces should be used around the statement.
    if (user.role == role)  // Sonar Issue: Use '===' instead of '=='.
        return true;
    else
        return false;
}

/**
 * Formats a greeting message for a user.
 * @param {object} user - The user object.
 */
function formatGreeting(user) {
    // Sonar Issue: 'unusedMessage' is declared but its value is never read.
    var unusedMessage = "This variable is not needed.";
    var unusedMessage2 = "This variable is not needed.";
    let unusedMessage3 = "This variable is not needed.";
    
    // Sonar Issue: Use 'const' instead of 'var' because 'greeting' is never reassigned.
    // Sonar Issue: Use a template literal instead of string concatenation.
    var greeting = "Hello, " + user.name + "! Welcome back.";

    // Sonar Issue: Braces should be used around the statement.
    if (user.role == role)  // Sonar Issue: Use '===' instead of '=='.
        return true;
    else
        return false;

    return greeting;
}


// Example Usage
const currentUser = {
    name: 'Alex',
    role: 'admin'
};

console.log(formatGreeting(currentUser));
console.log('Does user have admin access?', checkAccess(currentUser, 'admin'));

