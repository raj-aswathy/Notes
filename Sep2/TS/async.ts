#!/usr/bin/env ts-node

import { promises as fs } from 'fs';
import path from 'path';

// Get the source and destination paths from command line arguments
const [source, destination] = process.argv.slice(2);

// Function to copy a file using fs.promises with async/await
async function copyFileAsync(src: string, dest: string): Promise<void> {
  try {
    // Resolve the full paths
    const sourcePath = path.resolve(src);
    const destinationPath = path.resolve(dest);

    // Check if the source file exists
    await fs.access(sourcePath);

    // Copy the file
    await fs.copyFile(sourcePath, destinationPath);
    console.log(`File copied from "${src}" to "${dest}".`);
  } catch (err: unknown) {
    // Type-safe error handling
    if (err instanceof Error && (err as NodeJS.ErrnoException).code === 'ENOENT') {
      console.error(`Source file "${src}" does not exist.`);
    } else if (err instanceof Error) {
      console.error(`Error copying file: ${err.message}`);
    } else {
      console.error('An unknown error occurred.');
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
