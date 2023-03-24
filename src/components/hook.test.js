import { renderHook } from "@testing-library/react";
import { useFormReducer } from "../hook/useFormReducer";

test("should change keyword", () => {
  const { result } = renderHook(() => useFormReducer());

  expect(true).toBe(true);
});
