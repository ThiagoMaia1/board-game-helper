import { useRef, useEffect, RefObject } from 'react'

function useEventListener<T extends HTMLElement = HTMLDivElement>(
  eventName: string,
  handler: (event: Event) => void,
  element?: RefObject<T>,
) {
  const savedHandler = useRef<(event: Event) => void>()

  useEffect(() => {
    const targetElement: T | Window = element?.current || window

    if (!(targetElement?.addEventListener)) return;

    if (savedHandler.current !== handler)
        savedHandler.current = handler;

    const eventListener = (event: Event) => {
      if (!!savedHandler?.current)
        savedHandler.current(event)
    }

    targetElement.addEventListener(eventName, eventListener)
    return () =>
      targetElement.removeEventListener(eventName, eventListener)
    
  }, [eventName, element, handler]);
}

export default useEventListener;