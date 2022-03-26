# Globs

In computer programming, glob patterns specify sets of filenames with wildcard characters. The glob command, short for global, originates in the earliest versions of Bell Labs' Unix. The command interpreters of the early versions of Unix relied on a separate program to expand wildcard characters in unquoted arguments to a command: /etc/glob. That program performed the expansion and supplied the expanded list of file paths to the command for execution.

## How to Use

Run 'ts-node buildPlayground.ts' to build the playground. You can then mess around with the files generated in your local 'test_playground' folder. You can run different glob pattern tests in 'runGlobs.ts' or run custom commands through the command line.

## Glob Patterns

Glob patterns resemble regular expressions somewhat, but have a much simpler syntax. The following character sequences have special meaning within a glob pattern:

? matches any one character

- matches any number of characters

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
