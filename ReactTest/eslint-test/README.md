# ESLint
코드를 분석하여 문법 오류와 안티패턴을 찾는 정적 코드 분석 도구  
사용자가 규칙을 생성할 수 있다

## 목록
---
* Install
* Rule Example

### Install
---
1. 설치
```
npm i eslint
```

2. 파일 설정
```
npx eslint --init
```

3. 규칙 설정
생성된 eslintrc.js 파일에서 규칙을 설정
```
module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 13
    },
    "rules": {
    }
};
```

4. 실행
```
npx eslint <Your file name.js>
```
### Rule Example
---
세미콜론(;) 검사
```
module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 13
    },
    "rules": {
        "semi": ["error", "always"],
    }
};
```