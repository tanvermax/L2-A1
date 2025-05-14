# L2-A1

## 1 Explain the difference between any, unknown, and never types in TypeScript.

# any
Allows anything: You can assign any type of value to a variable declared as any.

Disables type checking: TypeScript won't check what you're doing with it.

Use only when necessary: It's like telling TypeScript “trust me, I know what I’m doing.”

# unknown
Safe version of any: You can assign any value to unknown, but you can’t use it without type checking.

For inputs you don't trust yet: Often used in functions, APIs, or user inputs.



# never
Represents values that never occur.

Typically used in:

1 Functions that throw errors

2 Functions that never return

3 Exhaustive checks in switch/case



## What is an enum in TypeScript?
An enum (short for enumeration) is a feature in TypeScript that allows you to define a set of named constants. Enums make your code more readable and meaningful by giving names to numeric or string values.

# 💡 Why use enums?
1To define a fixed set of options (like user roles, directions, statuses, etc.)

2 To make code more expressive and less error-prone

3 To reduce the use of magic strings or numbers

