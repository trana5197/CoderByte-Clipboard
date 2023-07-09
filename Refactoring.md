# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. The code now uses optional chaining (event?.partitionKey) to check if event.partitionKey exists. This simplifies the code by removing nested if statements and making it more concise.

2. The unnecessary check for candidate after assigning it from event.partitionKey has been removed. Since candidate will always be a string at that point, the additional check is unnecessary.

3. The code combines the check for typeof candidate !== "string" with the assignment of JSON.stringify(candidate). This avoids unnecessary branching in the code.

4. The default value assignment of TRIVIAL_PARTITION_KEY has been moved to the end of the function to align with the return statement.
