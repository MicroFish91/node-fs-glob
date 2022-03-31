# Globs

In computer programming, glob patterns specify sets of filenames with wildcard characters. The glob command, short for global, originates in the earliest versions of Bell Labs' Unix. The command interpreters of the early versions of Unix relied on a separate program to expand wildcard characters in unquoted arguments to a command: /etc/glob. That program performed the expansion and supplied the expanded list of file paths to the command for execution.

## How to Use

Build Playground: npm run build
Run Custom Glob Code: npm run glob
npm run glob "{insert glob string here}"

## Syntax

Glob is NOT a regular language but is wildly used to define a set of filenames with wildcard characters. The syntax is different by implementation and below are the most known patterns.

### Asterisks (\*)

\* - On Linux, will match everything except slashes. On Windows, it will avoid matching backslashes as well as slashes.

\*\* - Recursively matches zero or more directories that fall under the current directory.

\*(pattern_list) - Only matches if zero or one occurrence of any pattern is included in the pattern-list above

### Question mark (?)

Matches exactly one character.

??? – Matches all strings with exactly three letters or digits
a?\*.java – Matches any string beginning with a, followed by at least one letter or digit, and ending with .java

### Braces ({})

Braces specify a collection of subpatterns. For example:

{a,b,c} - matches any one of a, b or c
{temp*,tmp*} - matches all strings beginning with “temp” or “tmp”.
{foo\*,\*[0-9]\*} – matches any string beginning with foo or a numeric value
{!glob} - matches anything that does not match the glob

### Square Brackets ([])

Square brackets convey a set of single characters or, when the hyphen character (-) is used, a range of characters.

[aeiou] matches any lowercase vowel.
[0-9] matches any digit.
[A-Z] matches any uppercase letter.
[a-z,A-Z] matches any uppercase or lowercase letter.
[!abc] exclusion does not match the set of characters abc

### Escape (\\)

To match \*, ?, or the other special characters, you can escape them by using the backslash character, \. For example:

\\\\ matches a single backslash,
\\? matches the question mark.
Note: If you are typing the glob pattern at the console and it contains one of the special characters, you must:

put the pattern in quotes (“\*”),
use the backslash (\*),
or use whatever escape mechanism is supported at the command line.

## Examples

First run 'npm run build'

1. Asterisks (\*)

- few ways to query similar things using \*\*, \*, \*()

```
npm run glob "test_playground/std/**/*(*.ts|*.tsx|*.js|*.jsx)"

npm run glob "test_playground/std/*(test1|test2)/**/*(*.js|*.jsx)"

npm run glob "test_playground/std/*(*est*)/**/*.*(js|jsx)"

npm run glob "test_playground/std/**/#*.*(js|ts)"

```

2. Question mark (?)

- finds any subfile nested in a subfolder with the name ending with double digits - example##.js or example##.jsx

```
npm run glob "test_playground/std/**/*(*example??).*(js|jsx)"
```

4. uses {}

- another way to AND extensions from multiple queries

```
npm run glob "test_playground/std/**/*.{js,jsx,ts,tsx}"

npm run glob "test_playground/std/{test1,test2}/**/*.{js,jsx}"

npm run glob "test_playground/std/**/{again1,again2}/*.ts"
```

5. uses []

- matches char with a range of chars

```
npm run glob "test_playground/std/[!a-z]*/**/*.{js,jsx,ts,tsx}"

npm run glob "test_playground/std/[a-z]*/**/*.{js,jsx,ts,tsx}"

npm run glob "test_playground/std/*[0-9]/**/*.{js,jsx,ts,tsx}"

npm run glob "test_playground/std/*[!0-9]/**/*.{js,jsx,ts,tsx}"

npm run glob "test_playground/std/**/*[0-9][0-9].{js,jsx,ts,tsx}"

npm run glob "test_playground/std/**/*[a-z][0-9].{js,jsx,ts,tsx}"

npm run glob "test_playground/std/**/[#]*.{js,jsx,ts,tsx}"


```

### Bash Example

Note: install latest bash (e.g. brew install bash)
(shell option)
then run shopt -s globstar
for glob shell support

1. Move each file extension into its own folder under ./test_playground/organized

```
bash: mv ./test_playground/std/**/*.js ./test_playground/organized/js/
```

see runGlobs.ts Ex.1 as alternate solution using ts globs

## Return

https://typescript.hotexamples.com/site/file?hash=0xa702006c71b8a3ea4ad884adf264350bda5916505cea20e047cf5e643269bc13&fullName=lede-cli-master/src/installScript.ts&project=tbtimes/lede-cli

[Back to Main](./README.md)
