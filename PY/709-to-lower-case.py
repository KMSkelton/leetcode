class Solution:
    def toLowerCase(self, str: str) -> str:
        modified = [] # strings are immutable, so the characters in str will be added to this list
        for char in str: # standard for...in loop
          if ord(char) > 64 and ord(char) < 91: # uppercase ASCII is 65 to 90 for A-Z
            char = chr(ord(char) + 32) # lowercase ASCII is 32 additional values
          modified.append(char) # append the char to the list
          final = ''.join(modified) # the output is expecting a string, so join modified with no punctuation or spaces
        return(final)