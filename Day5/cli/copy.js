#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get arguments from the command line
const args = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: copy <source-file> <destination-file>');
  process.exit(1);
}

const [source, destination] = args;

try {
  // Check if source file exists
  if (!fs.existsSync(source)) {
    console.error(`Source file "${source}" does not exist.`);
    process.exit(1);
  }

  // Perform the file copy operation synchronously
  fs.copyFileSync(source, destination);
  console.log(`File copied from "${source}" to "${destination}".`);
} catch (error) {
  console.error(`Error copying file: ${error.message}`);
  process.exit(1);
}
