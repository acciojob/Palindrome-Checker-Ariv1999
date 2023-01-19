// complete the given function
const text = document.getElementById('text');
const buttom = document.getElementById('check');
const outPut = document.getElementById('outPut');
buttom.addEventListener('click', palindrome);
function palindrome(){
	const str = text.value;
	const revString = str.split('').reverse().join('');
	if(revString === str){
		outPut.innerHTML = 'true';
	}else{
		outPut.innerHTML = 'false';
	}
}
