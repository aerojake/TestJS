//Testing of the testJS app

const { describe, test, getTestResults } = require("./app");

const FG_YELLOW = "\x1b[33m";
const FG_RESET = "\x1b[0m";
const yellowConsoleText = `${FG_YELLOW}%s${FG_RESET}`;
let errorLog = [];

console.log(yellowConsoleText, "Test errors for TestJS who up in yellow");


try {
    describe("Test Printing of Unit Title", () => { });
} catch (err) {
    errorLog.push(["Error printing unit title.", err]);
}


try {
    test("testing the test function", () => { });
} catch (err) {
    errorLog.push(["Error running test function", err]);
}

try {
    describe("Test nesting a test", () => {
        test("should run nested test", () => {

        });
    });
} catch (err) {
    errorLog.push(["Error nesting test function in describe function", err]);
}

try {
    getTestResults();
} catch (err) {
    errorLog.push(["getTestResults not running", err]);
}

try {
    test("create 1 failure in results", false);
    getTestResults();
} catch (err) {
    errorLog.push(["Error getTestResults not running with failed test", err]);
}

//console.clear();
if (errorLog.length > 0) {
    console.table(errorLog);
    console.log();
} else {
    console.log(yellowConsoleText, "\t## NO ERRORS ##: Above output from running tests and not actual errors.\n");
}



