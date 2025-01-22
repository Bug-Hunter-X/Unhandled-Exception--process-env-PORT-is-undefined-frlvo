# Unhandled Exception: process.env.PORT is undefined

This repository demonstrates a common error in Node.js applications where the `process.env.PORT` variable is accessed without checking for its existence.  This can lead to unhandled exceptions and application crashes.

## The Problem

Many Node.js applications use the `process.env.PORT` variable to determine the port on which to listen for incoming requests.  However, if this environment variable is not set, accessing it directly will result in an `undefined` value, leading to unexpected behavior or errors.

## The Solution

The solution is to always check for the existence of `process.env.PORT` before using it.  If it's not defined, provide a default value.  This can be done using optional chaining and the nullish coalescing operator (`??`).

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Observe the unhandled exception.
4. Run `node bugSolution.js` to see the corrected version.

## Learning Outcomes

* Understand how to handle undefined environment variables in Node.js applications.
* Learn about optional chaining and nullish coalescing.
* Implement robust error handling in Node.js applications.