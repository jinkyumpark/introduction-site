/*

총 4가지 종류의 괄호가 있습니다.
각 괄호들은 서로 짝이 있으며 그짝은 괄호가 열리고 닫히는 것을 의미합니다.
'(' ')', '{' '}', '[' ']', '<' '>'
이때 주어진 스트링 S가 괄호가 서로 교차하지 않은 형태로 짝이 잘 맞게 이루어진 문자열인지 판단하는 함수를 작성하세요.
[입력]
괄호로 이루어진 스트링 S
[출력]
괄호가 서로 교차하지 않고 짝이 잘 맞게 이루어진다면 1
그렇지 않으면 0을 리턴

*/

class Stack {
	constructor() {
		this._arr = [];
	}

	push(item) {
		this._arr.push(item);
	}
	pop() {
		return this._arr.pop();
	}
	peek() {
		return this._arr[this._arr.length -1];
	}
	length() {
		return this._arr.length;
	}
}

function solution(S) {
	const stack = new Stack();

	for(let c of S) {
		if(c === '(' || c === '{' || c === '[' || c === '<') {
			stack.push(c);
		} else if(c === ')' || c === '}' || c === ']' || c === '>') {
			if(stack.length() == 0) {
				return 0;
			}

			switch(c) {
				case ')':
					if(stack.peek() === '(') {
						stack.pop();
					}
					break;
				case '}':
					if(stack.peek() === '{') {
						stack.pop();
					}
					break;
				case ']':
					if(stack.peek() === '[') {
						stack.pop();
					}
					break;
				case '>':
					if(stack.peek() === '<') {
						stack.pop();
					}
					break;
			}

		}
	}
	return (stack.length() == 0) ? 1 : 0;
}