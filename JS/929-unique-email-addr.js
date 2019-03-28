/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const resultEmails = new Set() // Sets were added in ES6. Only individual values will be stored

emails.forEach(e => {
  const [local, domain] = e.split('@') // array destructuring; split lets us determine the first character to split on
  const actualEmail = local.split('+')[0].replace(/\./g, '') + '@' + domain  // regex removes periods

  resultEmails.add(actualEmail)
})

return resultEmails.size
}