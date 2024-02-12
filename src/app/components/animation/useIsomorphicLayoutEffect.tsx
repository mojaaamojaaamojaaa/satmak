import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;

/*
useEffectか、useLayputEffectかを自動で切り替えて行う。
https://tweenpages.vercel.app/docs#transition-provider 参照
*/
