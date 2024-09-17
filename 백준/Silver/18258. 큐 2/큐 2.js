// 연결리스트를 이루는 노드를 정의 
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 연결 리스트로 큐를 구현
// 핵심 : 큐의 삽입은 큐의 앞쪽에서, 삭제는 뒤쪽에서 일어남 
class Queue {
  constructor() {
    this.head = null; // 큐의 가장 앞 노드를 가리키는 포인터
    this.tail = null; // 큐의 가장 마지막 노드를 가리키는 포인터
    this.length = 0; // 큐의 초기 크기는 0
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (!this.head) return -1;
    const dequeueNode = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.length--;
    return dequeueNode;
  }

  front() {
    return this.head ? this.head.value : -1;
  }

  back() {
    return this.tail ? this.tail.value : -1;
  }

  size() {
    return this.length;
  }

  empty() {
    return this.length === 0 ? 1 : 0;
  }
}

// 입력 처리 
const _ = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let N = +_[0]; // 명령어의 수
const queue = new Queue(); // 연결 리스트로 구현된 큐 생성
let outPut = []; // 결과를 저장할 배열 

// 각 명령을 순회
for (let i = 1; i <= N; i++) {
  // push
  if (_[i].startsWith("push")) {
    data = Number(_[i].split(" ")[1]); // 명령이랑 숫자 분리
    queue.enqueue(data);
  }
  // front : 큐의 가장 앞에 있는 정수를 출력
  if (_[i] === "front") {
    outPut.push(queue.front());
  }
  // back : 큐의 가장 뒤 정수를 출력
  if (_[i] === "back") {
    outPut.push(queue.back());
  }
  // size : 큐에 들어있는 정수 개수를 출력
  if (_[i] === "size") {
    outPut.push(queue.size());
  }
  // empty : 큐가 비어있으면 1, 아니면 0을 출력한다.
  if (_[i] === "empty") {
    outPut.push(queue.empty());
  }
  // pop
  if (_[i] === "pop") {
    outPut.push(queue.dequeue());
  }
}

console.log(outPut.join("\n"));
