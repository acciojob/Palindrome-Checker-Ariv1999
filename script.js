// complete the given function

function palindrome(str){
	const revString = str.split('').reverse().join('');
	return revString === str ? true : false;
}
module.exports = palindrome('maam');
