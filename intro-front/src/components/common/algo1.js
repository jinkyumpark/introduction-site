/*
주어진 정수 A와 B를 2진수로 표현했을 때, A를 B로 바꾸기 위하여 뒤집어야 하는 비트의 개수를 구하는 함수를 작성하세요.
[입력]
양의 정수 A, B
[출력]
A를 B로 바꾸기 위해 바뀌어야 하는 비트의 개수
*/

function solution(A, B) {
	// Convert A, B to binary
	let a = convertToBinary(A);
	let b = convertToBinary(B);

	// Compare A, B
	let count = 0;
	for(let i = 0; i < a.length; i++) {
		if(a.charAt(i) !== b.charAt(i)) {
			count++;
		}
	}

	return count;
}

function convertToBinary(num) {
	return (num >>> 0).toString(2);	
}