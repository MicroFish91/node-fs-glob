# CLI

## Commands

1. [ls](#ls) - List directory contents
2. [echo](#echo) - Prints text to the terminal window
3. [touch](#touch) - Creates a file
4. [mkdir](#mkdir) - Creates a directory
5. [grep](#grep) - Search text for patterns

### ls

Lists directory contents.

ls is probably the most common command. A lot of times, you’ll be working in a directory and you’ll need to know what files are located there. The ls command allows you to quickly view all files within the specified directory.

Syntax: ls [option(s)] [file(s)]

Common options: -a, -l

### echo

Prints text to the terminal window.

echo prints text to the terminal window and is typically used in shell scripts and batch files to output status text to the screen or a computer file. Echo is also particularly useful for showing the values of environmental variables, which tell the shell how to behave as a user works at the command line or in scripts.

Syntax: echo [option(s)] [string(s)]

Common options: -e, -n

### touch

Creates a file.

touch is going to be the easiest way to create new files, but it can also be used to change timestamps on files and/or directories. You can create as many files as you want in a single command without worrying about overwriting files with the same name.

Syntax: touch [option(s)] file_name(s)

Common options: -a, -m, -r, -d

### mkdir

Create a directory.

mkdir is a useful command you can use to create directories. Any number of directories can be created simultaneously which can greatly speed up the process.

Syntax: mkdir [option(s)] directory_name(s)

Common options: -m, -p, -v

### grep

Search.

grep is used to search text for patterns specified by the user. It is one of the most useful and powerful commands. There are often scenarios where you’ll be tasked to find a particular string or pattern within a file, but you don’t know where to start looking, that is where grep is extremely useful. grep is case sensitive.

Syntax: grep [option(s)] pattern [file(s)]

Common options: -i, -c, -n, -w

-i: dont be case sensitive
-w: exact match only
-n: line number of match
-r: recursive
-l: file name of matches only
-f: Takes search string/pattern from a file, one per line
-e: search multiple strings/patterns at once
-E: another way to search multiple strings/patterns at once
-B {num} => -B 4 => see 4 lines before match
-A {num} => -A 4 => see 4 lines after match
-C {num} => -C 2 => 2 lines before and after match

Example:

cat > names.txt
John Williams
John Williamson

grep "John Williams" names.txt
John Williams
John Williamson

grep -w "John Williams" names.txt
John Williams

grep -w "John Williams" ./\*.txt

file names of matches:
grep -wirl "John Williams" ./

num of occurences per file:
grep -wirc "John Williams" ./

history | grep "git commit" | grep "dotfile"

grep -e "line" -e "above" -e "bash" test.txt

grep -E "line|above|bash" test.txt

### man

Print manual or get help for a command

The man command is your manual and is very useful when you need to figure out what a command does. For example, if you didn’t know what the command rmdir does, you could use the man command to find that out.

Syntax: man [option(s)] keyword(s)

Common options: -w, -f, -b

### pwd

Print working directory.

### cd

Change directory.

### mv

Move or rename directory.

mv is used to move or rename directories. Without this command, you would have to individually rename each file which is tedious. mv allows you to do batch file renaming which can save you loads of time.

Syntax: mv [option(s)] argument(s)

Common options: -i, -b

### rmdir

Remove directory.

rmdir will remove empty directories. This can help clean up space on your computer and keep files and folders organized. It’s important to note that there are two ways to remove directories: rm and rmdir. The distinction between the two is that rmdir will only delete empty directories, whereas rm will remove directories and files regardless if they contain data or not.

Syntax: rmdir [option(s)] directory_names

Common options: -p

### locate

Locate a specific file or directory.

This is by far the simplest way to find a file or directory. You can keep your search broad if you don’t know what exactly it is you’re looking for, or you can narrow the scope by using wildcards or regular expressions.

Syntax: locate [option(s)] file_name(s)

Common options: -q, -n, -i

### less

View the contents of a text file but takes up the whole view of your cli.

The less command allows you to view files without opening an editor. It’s faster to use, and there’s no chance of you inadvertently modifying the file.

Syntax: less file_name

Common options: -e, -f, -n

Example: less file1
hello world

### compgen

Shows all available commands, aliases, and functions.

compgen is a handy command when you need to reference all available commands, aliases, and functions.

Syntax: compgen [option(s)]

Common options: -a, -c, -d

### Redirect Operator (> or >>)

The > character is the redirect operator. This takes the output from the preceding command that you’d normally see in the terminal and sends it to a file that you give it. As an example, take echo “contents of file1” > file1. Here it creates a file called file1 and puts the echoed string into it.

">" => create
">>" => append

Syntax: > or >>

Common options: n/a

### cat

Read a file, create a file, and concatenate files.

cat is one of the more versatile commands and serves three main functions: displaying them, combining copies of them, and creating new ones.

Syntax: cat [option(s)] [file_name(s)] [-] [file_name(s)]

Common options: -n

Example:

ls -al / > stdout.txt

- Creating:

cat > file1
hello
(type txt, control-D to finish)

cat > file2
world

- Concatenating:

cat file1 file2 > file3

- Reading:

cat file3
hello world

### Pipe Operator (|)

A pipe takes the standard output of one command and passes it as the input to another.

Syntax: |

Common options: n/a

Example: history | less

### head

Read the start of a file.

By default, the head command displays the first 10 lines of a file. There are times when you may need to quickly look at a few lines in a file and head allows you to do that. A typical example of when you’d want to use head is when you need to analyze logs or text files that change frequently.

Syntax: head [option(s)] file(s)

Common options: -n

### tail

Read the end of a file.

By default, the tail command displays the last 10 lines of a file. There are times when you may need to quickly look at a few lines in a file and tail allows you to do that. A typical example of when you’d want to use tail is when you need to analyze logs or text files that change frequently.

Syntax: tail [option(s)] file_names

Common options: -n

### chmod

Sets the file permissions flag on a file or folder.

There are situations that you’ll come across where you or a colleague will try to upload a file or modify a document and you receive an error because you don’t have access. The quick fix for this is to use chmod. Permissions can be set with either alphanumeric characters (u, g, o) and can be assigned their access with w, r, x. Conversely, you can also use octal numbers (0-7) to change the permissions. For example, chmod 777 my_file will give access to everyone.

Syntax: chmod [option(s)] permissions file_name

Common options: -f, -v

For more info see [permissions](#Permissions) below.

Example: to make a file an executable

- Symbolic:
  chmod +x file1

- Bits:
  chmod 700 (user only) (RWX)
  chmod 770 (user + group) (RWX)
  chmod 777 (user + group + everyone) (RWX)

- Directories:
  Read - Won't see the diredtory
  Execute - Allows you to get into directory

### Permissions

directory:
drwxr-xr-x 33 mfisher staff 1056 Mar 23 21:31 node_modules

file:
-rw-r--r-- 1 mfisher staff 499 Mar 25 21:51 package.json

\- rw- r-- r-- mfisher staff 499
1 2 3 4 5 6 7

1 => directory (d or -)
2 => user permissions
(rwx => read, write, execute (each value is assigned to a bit [0 or 1])
bits -rwx => \_421 => 4 + 2 + 1
3 => group permissions
4 => everyone permissions
5 => user
6 => group
7 =>

- Read: This permission give you the authority to open and read a file. Read permission on a directory gives you the ability to lists its content.

- Write: The write permission gives you the authority to modify the contents of a file. The write permission on a directory gives you the authority to add, remove and rename files stored in the directory. Consider a scenario where you have to write permission on file but do not have write permission on the directory where the file is stored. You will be able to modify the file contents. But you will not be able to rename, move or remove the file from the directory.

- Execute: In Unix/Linux, you cannot run a program unless the execute permission is set. If the execute permission is not set, you might still be able to see/modify the program code(provided read & write permissions are set), but not run it.

### exit

Exit out of a directory.

The exit command will close a terminal window, end the execution of a shell script, or log you out of an SSH remote access session.

Syntax: exit

Common options: n/a

### history

List your most recent commands.

An important command when you need to quickly identify past commands that you’ve used.

Syntax: history

Common options: -c, -d

### clear

Clear your terminal window.

This command is used to clear all previous commands and output from consoles and terminal windows. This keeps your terminal clean and removes the clutter so you can focus on subsequent commands and their output.

Syntax: clear

Common options: n/a

### cp

Copy files and directories.

Use this command when you need to back up your files.

Syntax: cp [option(s)] current_name new_name

Common options: -r, -i, -b

### kill

Terminate stalled processes.

The kill command allows you to terminate a process from the command line. You do this by providing the process ID (PID) of the process to kill. To find the PID, you can use the ps command accompanied by options -aux.

Syntax: kill [signal or option(s)] PID(s)

Common options: -p

### sleep

Delay a process for a specified amount of time.

sleep is a common command for controlling jobs and is mainly used in shell scripts. You’ll notice in the syntax that there is a suffix; the suffix is used to specify the unit of time whether it be s (seconds), m (minutes), or d (days). The default unit of time is seconds unless specified.

Syntax: sleep number [suffix]

Common options: n/a

### Aliases

Custom commands in Bash are known as “aliases”. Aliases are essentially an abbreviation, or a means to avoid typing a long command sequence. They can save a great deal of typing at the command line so you can avoid having to remember complex combinations of commands and options. There is one caveat to using aliases, and that is to be sure you don’t overwrite any keywords.

Syntax: alias alias_name = “command_to_run”

## pushd popd

## which

which node
=> Users/mfisher/.nvm/versions/node/v16.14.2/bin/node

## whatis

## man

man ls

## Shortcuts

- control-u: clear line
- control-l: redraw screen
- control-c: cancel
- control-d: quit
