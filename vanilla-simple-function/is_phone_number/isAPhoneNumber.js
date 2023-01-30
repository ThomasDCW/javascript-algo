// Check if it's a phone number

function isItANum(string) {
  let result = string
    .split('')
    .filter((check) => '0123456789'.includes(check))
    .join('');
  return (
    (result.length == 11 && result[0] == '0' && result) || 'Not a phone number'
  );
}
