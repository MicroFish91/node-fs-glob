# Globs

In computer programming, glob patterns specify sets of filenames with wildcard characters. The glob command, short for global, originates in the earliest versions of Bell Labs' Unix. The command interpreters of the early versions of Unix relied on a separate program to expand wildcard characters in unquoted arguments to a command: /etc/glob. That program performed the expansion and supplied the expanded list of file paths to the command for execution.

## How to Use

Build Playground: npm run build
Run Custom Glob Code: npm run glob
npm run glob "{insert glob string here}"

## Pattern Matching

### Asterisks (\*)

\* - On Linux, will match everything except slashes. On Windows, it will avoid matching backslashes as well as slashes.

\*\* - Recursively matches zero or more directories that fall under the current directory.

\*(pattern_list) - Only matches if zero or one occurrence of any pattern is included in the pattern-list above

### Question mark (?)

Matches exactly one character.

??? – Matches all strings with exactly three letters or digits
a?\*.java – Matches any string beginning with a, followed by at least one letter or digit, and ending with .java

{!glob} Matches anything that does not match glob

{a,b,c} matches any one of a, b or c

[abc] matches any character in the set a, b or c

[^abc] matches any character not in the set a, b or c

[a-z] matches any character in the range a to z, inclusive. A leading or trailing dash will be interpreted literally

Since we use java.util.regex patterns to implement globs, this means that in addition to the above, a number of “character class metacharacters” may be used. Keep in mind, their usefulness is limited since the regex quantifier metacharacters (asterisk, questionmark, and curly brackets) are redefined to mean something else in filename glob language, and the regex quantifiers are not available in glob language.

\w matches any alphanumeric character or underscore

\s matches a space or horizontal tab

\S matches a printable non-whitespace.

\d matches a decimal digit

Here are some examples of glob patterns:

\*.java - all files whose names end with “.java”.

\*.[ch] - all files whose names end with either “.c” or “.h”.

\*.{c,cpp,h,hpp,cxx,hxx} - all C or C++ files.

[^#]\* - all files whose names do not start with “#”.

## Commands

### Glob Patterns

1. Queries all files and subfolders matching .ts, .tsx, .js, .jsx under std/

Uses \*, \*\*, and \*()

```
npm run glob "test_playground/std/**/*(*.ts|*.tsx|*.js|*.jsx)"
```

2.

```
npm run glob "test_playground/std/*(test1|test2)/**/*(*.js|*.jsx)"
```

```
npm run glob "test_playground/std/*(*est*)/**/*(*.js|*.jsx)"
```

```
npm run glob "test_playground/std/**/#*.*(js|ts)"
```

3. only queries js and jsx files with a double digit "example" title

uses ?

```
npm run glob "test_playground/std/**/*(*example??).*(js|jsx)"
```

4.

### Bash Example

Note: install latest bash (e.g. brew install bash)
(shell option)
then run shopt -s globstar
for glob shell support

1. Move each file extension into its own folder under ./test_playground/organized

```
bash: mv ./test_playground/**/*.js ./test_playground/organized/js/
```

see runGlobs.ts Ex.1 as alternate solution using ts globs
