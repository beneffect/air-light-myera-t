// Import Gulp's series or parallel functions if not already done
const { series, parallel } = require('gulp'); // Add this if not present

// Export tasks
exports.js = require('./gulp/tasks/js.js').js;
exports.phpcs = require('./gulp/tasks/phpcs.js').phpcs;
exports.lintstyles = require('./gulp/tasks/lintstyles.js').lintstyles;
exports.devstyles = require('./gulp/tasks/devstyles.js').devstyles;
exports.prodstyles = require('./gulp/tasks/prodstyles.js').prodstyles;
exports.watch = require('./gulp/tasks/watch.js').watch;
exports.default = require('./gulp/tasks/watch.js').watch; // This makes `gulp` command run the watch task

// Define the new build task
// Option 1: Run linting tasks first, then build JS and Styles in parallel
exports.build = series(
    parallel(exports.lintstyles, exports.phpcs), // Lint styles and PHP concurrently
    parallel(exports.js, exports.prodstyles)    // Then build JS and production styles concurrently
);

// Option 2: Run all tasks in a specific sequence
// exports.build = series(
//     exports.lintstyles,
//     exports.phpcs,
//     exports.js,
//     exports.prodstyles
// );
