import React, {useState, useRef, useEffect} from 'react'


export const uesOnScreen = (options) => {
    const ref = useRef();
    const [isOnScreen, setIsOnScreen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            let first = entries[0]
            setIsOnScreen(first.isIntersecting)
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, [ref, options]);

    return [ref, isOnScreen];
}