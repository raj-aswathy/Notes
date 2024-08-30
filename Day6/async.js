#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

// Get the source and destination paths from command line arguments
const [source, destination] = process.argv.slice(2);

// Function to copy a file using fs.promises with async/await
async function copyFileAsync(src, dest) {
  try {
    // Resolve the full paths
    const sourcePath = path.resolve(src);
    const destinationPath = path.resolve(dest);

    // Check if the source file exists
    await fs.access(sourcePath);

    // Copy the file
    await fs.copyFile(sourcePath, destinationPath);
    console.log(`File copied from "${source}" to "${destination}".`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error(`Source file "${src}" does not exist.`);
    } else {
      console.error(`Error copying file: ${err.message}`);
    }
    process.exit(1);
  }
}

// Ensure both source and destination are provided
if (!source || !destination) {
  console.error('Usage: copy <source> <destination>');
  process.exit(1);
}

// Call the function to copy the file
copyFileAsync(source, destination);
