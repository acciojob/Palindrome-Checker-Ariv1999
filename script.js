// complete the given function
const text = document.getElementById('text');
const buttom = document.getElementById('check');
const outPut = document.getElementById('outPut');
const str = text.value;
buttom.setEventListener('click', palindrome);
function palindrome(str){
	const revString = str.split('').reverse().join('');
	if(revString === str){
		outPut.innerText = 'true';
	}else{
		outPut.innerText = 'false';
	}
}
