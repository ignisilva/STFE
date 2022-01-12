import { act, fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("Button 컴포넌트 (@testing-library/react", () => {
  it("컴포넌트 정상 생성", () => {
    const button = render(<Button />);
    expect(button).not.toBe(null);
  });

  it("button 이라고 쓰인 엘리먼트는 HTMLButtonElement 이다", () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
  });

  it('버튼 클릭시, p 태그 안에 "버튼이 눌렸다" 라고 쓰여짐', () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    fireEvent.click(buttonElement);

    const p = getByText("버튼이 눌렸다");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it('버튼 클릭 전에는, p 태그 안에 "버튼이 눌리지 않았다" 라고 쓰여짐', () => {
    const { getByText } = render(<Button />);

    const p = getByText("버튼이 눌리지 않았다");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it('버튼 클릭 5초 후에는, p 태그 안에 "버튼이 눌리지 않았다" 라고 쓰여짐', () => {
    jest.useFakeTimers();

    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    fireEvent.click(buttonElement);

    // after 5 sec
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const p = getByText("버튼이 눌리지 않았다");
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it("버튼 클릭 후 5초간, 버튼이 비활성화 된다", () => {
    jest.useFakeTimers();

    const { getByText } = render(<Button />);
    const buttonElement = getByText("button");
    fireEvent.click(buttonElement);

    // 비활성화
    // expect(buttonElement.disabled).toBeTruthy();
    expect(buttonElement).toBeDisabled();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // 활성화
    // expect(buttonElement.disabled).toBeFalsy();
    expect(buttonElement).not.toBeDisabled();
  });
});
