# React Testing Library
* DOM 위주로 테스트 진행
* 필요한 기능만 지원하기 때문에 가벼움

## 목록
* Install & Import
* describe & it
* test
* Example

### Install & Set up
---
1. Install
    * Create React App으로 세팅했다면 생략
    ```
    npm install --save react-testing-library @testing-library/jest-dom
    ```
2. Set up
    * 각 테스트가 DOM에 렌더링 해놓은 내용 Clean up
    * jest-dom이 제공하는 matcher를 테스트 러너에게 인식
    ```js
    // src/setupTests.js
    import "@testing-library/react/cleanup-after-each";
    import "@testing-library/jest-dom/extend-expect";
    ```

### describe & it
---
* jest에서 제공하는 함수
* `discribe` -  하나의 테스트 그룹
* `it` - describe 안의 작은 단위 테스트
    ```js
    describe('Counter Component', () => {
        it('컴포넌트가 정상적으로 생성됨', () => {
            render(<Counter />);
        });
    });
    ```

### test
---
* React Testing Library에서 권장
    ```js
    test('', () => {
        ...
    });
    ```

### Example
1. 컴포넌트 생성
    ```js
    // src/count/Counter.js
    const Counter = () => {
        const [count, setValue] = useState(0);

        const increase = () => {
            setValue(count + 1);
        };

        const decrease = () => {
            setValue(count - 1);
        };

        return (
            <>
                <div className="count">{count}</div>
                <button onClick={increase} className="plusButton">
                    +
                </button>
                <button onClick={decrease} className="minusButton">
                    -
                </button>
            </>
        );
    };
    ```
2. 테스트 파일 생성 & 수정
    ```js
    /* src/count/Counter.test.js
    '+' 버튼 테스트
    초기 상태에서 한 번 클릭 시 counter의 숫자가 1이 되어야 함 */

    test("Increase Count when Press + Button", () => {
        render(<Counter />);

        const increaseButton = screen.getByText("+");

        userEvent.click(increaseButton);

    expect(document.querySelector(".count").textContent).toBe("1");
    });
    ```