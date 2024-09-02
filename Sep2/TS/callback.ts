#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';

// Get the source and destination paths from command line arguments
const [source, destination] = process.argv.slice(2);

// Function to copy a file using fs.copyFile with callbacks
function copyFileWithCallback(src: string, dest: string): void {
  // Resolve the full paths
  const sourcePath = path.resolve(src);
  const destinationPath = path.resolve(dest);

  // Check if the source file exists
  fs.access(sourcePath, fs.constants.F_OK, (err: NodeJS.ErrnoException | null) => {
    if (err) {
      console.error(`Source file "${sourcePath}" does not exist.`);
      process.exit(1);
    } else {
      // Copy the file asynchronously using callbacks
      fs.copyFile(sourcePath, destinationPath, (err: NodeJS.ErrnoException | null) => {
        if (err) {
          console.error(`Error copying file: ${err.message}`);
          process.exit(1);
        } else {
          console.log(`File copied from "${src}" to "${dest}".`);
        }
      });
    }
  });
}

// Ensure both source and destination are provided
if (!source || !destination) {
  console.error('Usage: copy <source> <destination>');
  process.exit(1);
}

// Call the function to copy the file
copyFileWithCallback(source, destination);
