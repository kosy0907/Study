import { render, screen } from "@testing-library/react";
import Counter from './Couter';
import userEvent from '@testing-library/user-event';

// describe('Counter Component', () => {
//     it('컴포넌트가 정상적으로 생성됨', () => {
//         render(<Counter />);
//     });
// });

// test('adds 1 + 2 to equal 3', () => {
//     expect(1 + 2).toBe(3);
// });


test("Increase Count when Press + Button", () => {
    render(<Counter />);

    const increaseButton = screen.getByText("+");

    userEvent.click(increaseButton);

    expect(document.querySelector(".count").textContent).toBe("1");
});

test("Decrease Count when Press - Button", () => {
    render(<Counter />);

    const decreaseButton = screen.getByText("-");

    userEvent.click(decreaseButton);

    expect(document.querySelector(".count").textContent).toBe("-1");
});