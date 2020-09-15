const FG_BLACK = "\x1b[30m";
const FG_RED = "\x1b[31m";
const FG_GREEN = "\x1b[32m";
const FG_YELLOW = "\x1b[33m";
const FG_BLUE = "\x1b[34m";
const FG_MAGENTA = "\x1b[35m";
const FG_CYAN = "\x1b[36m";
const FG_WHITE = "\x1b[37m";
const FG_RESET = "\x1b[0m";
const whiteConsoleText = `${FG_WHITE}%s${FG_RESET}`;
const greenConsoleText = `${FG_GREEN}%s${FG_RESET}`;
const redConsoleText = `${FG_RED}%s${FG_RESET}`;

let totalTests = 0;
let totalPassedTests = 0;
let totalFailedTests = 0;


function describe(unitDescription, fnForTests) {
    console.log();
    console.log(whiteConsoleText, `******* ${unitDescription} ***`);
    fnForTests();
    console.log(whiteConsoleText, `******* END OF ${unitDescription} ***`);
}

function test(expectedDescription, fnToTest) {
    totalTests++;

    try {
        fnToTest();
        console.log(greenConsoleText, `\tPASS: ${expectedDescription}`);
        totalPassedTests++;
    } catch (err) {
        console.log(redConsoleText, `\tFAIL: ${err.message}`);
        totalFailedTests++;
    }
}

function getTestResults() {
    console.log();
    console.log(greenConsoleText, `\t Tests Passed: ${totalPassedTests}`);

    if (totalFailedTests > 0) {
        console.log(redConsoleText, `\t Tests Failed: ${totalFailedTests}`);
    }
    console.log("\t              ___")
    console.log(`\t Total Tests:  ${totalTests}`);
    console.log();
}

module.exports = { describe, test, getTestResults };
