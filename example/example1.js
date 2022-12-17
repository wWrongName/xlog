const Logger = require("../index.js")

new Logger({
    log_level: 0,
    colorized_log_level: true,
    maximized_log: true,
    gui_output: false,
})

console.trace(
    "Log of the smallest details of code execution. 'Output of everything in a row'"
)
console.debug(
    "Log of large operations, such as threads start/stop or user request"
)
console.info("One time operations, such as loading configs or backup ops")
console.warn("Log unexpected issues, strange params, etc")
console.error("Trigger for developers")
console.fatal("Fatal errors with process.exit(-1)")
