# Globs

In computer programming, glob patterns specify sets of filenames with wildcard characters. The glob command, short for global, originates in the earliest versions of Bell Labs' Unix. The command interpreters of the early versions of Unix relied on a separate program to expand wildcard characters in unquoted arguments to a command: /etc/glob. That program performed the expansion and supplied the expanded list of file paths to the command for execution.

## How to Use

Run 'ts-node buildPlayground.ts' to build the playground. You can then mess around with the files generated in your local 'test_playground' folder. You can run different glob pattern tests in 'runGlobs.ts' or run custom commands through the command line.

## Pattern Matching

1. Wildcard Matching - \*, ?, []

### Wildcard Matching

Asterisks (\*) :

\* - On Linux, will match everything except slashes. On Windows, it will avoid matching backslashes as well as slashes.

\*\* - Recursively matches zero or more directories that fall under the current directory.

\*(pattern_list) - Only matches if zero or one occurrence of any pattern is included in the pattern-list above

## Exercise

Note: install latest bash (e.g. brew install bash)
(shell option)
then run shopt -s globstar
for glob shell support

1. Move each file extension into its own folder under ./test_playground/organized

```
bash: mv ./test_playground/**/*.js ./test_playground/organized/js/
```

see runGlobs.ts Ex.1 as alternate solution using ts globs

2.
