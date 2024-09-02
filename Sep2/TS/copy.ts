#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';

// Get arguments from the command line
const args: string[] = process.argv.slice(2);

if (args.length !== 2) {
  console.error('Usage: copy <source-file> <destination-file>');
  process.exit(1);
}

// Safely destructure the arguments knowing there are exactly two elements
const [source, destination] = args as [string, string];

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
  // Type assertion for better error handling
  if (error instanceof Error) {
    console.error(`Error copying file: ${error.message}`);
  } else {
    console.error('An unknown error occurred.');
  }
  process.exit(1);
}
