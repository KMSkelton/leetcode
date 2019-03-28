import re
def numUniqueEmails(emails):
  resultEmails = set() # Deine an empty set. Only individual values will be stored

  for email in emails:
    local,domain = email.split('@') # Pythonic destructuring assignment; can split on first character of type passed in
    local = str(local.split('+')[0]) # split local on +, convert the first element to a string
    local = re.sub('\.(?!$)', '', local) # substitute all periods with empty space
    actualEmail = local + '@' + domain                    
    resultEmails.add(actualEmail)

  return len(resultEmails)
