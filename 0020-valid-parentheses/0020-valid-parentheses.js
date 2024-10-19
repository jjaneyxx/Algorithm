var isValid = function(s) {
    let stack = []; 
    for(let i=0; i<s.length; i++){
        let char = s[i];
        if (char === "(" || char === "{" || char === "["){
            stack.push(char); 
        } else {
            // 닫힌 괄호, LIFO 따라야 함
            // 스택에서 가장 위 원소를 우선 제거
            let preval = stack.pop(); 
            // 제거한 원소의 짝이 안 맞았으면 false 를 리턴
            if (preval === "(" && char !==")") return false; 
            if (preval === "{" && char !=="}") return false; 
            if (preval === "[" && char !=="]") return false; 
            if (preval === undefined) return false; 
        }
    }
    return stack.length === 0; 
};

