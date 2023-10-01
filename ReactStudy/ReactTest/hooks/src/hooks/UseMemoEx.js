import { useState, useMemo, useCallback } from "react";

function sum(people) {
    console.log('sum');
    return people.map(person => person.age).reduce((l, r) => l + r, 0);
}

export default function UseMemoEx() {
    const [value, setValue] = useState('');
    const [people] = useState([
        { name: 'Jane', age: 23 },
        { name: 'Clay', age: 39 },
    ]);

    // people이 변했을때만 count를 다시 실행
    const count = useMemo(() => {
        return sum(people);
    }, [people]);

    // 최초에만 수행
    const click = useCallback(() => {
        console.log(value);
    }, []);

    return (
        <div>
            <input value={value} onChange={change} />
            <p>{count}</p>
            <button onClick={click}>Click</button>
        </div>
    );

    function change(e) {
        setValue(e.target.value);
    }
}