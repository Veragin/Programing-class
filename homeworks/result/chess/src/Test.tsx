import { useEffect, useRef, useState } from "react";

type Props = {
    subtitle: string;
};

let count = 0;

export const Test = ({ subtitle }: Props) => {
    const [title] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.innerHTML = "<script>console.log('Hi')</script>";
        }
    }, [ref]);

    useEffect(() => {
        console.log("useEffect call", title);

        return () => console.log("useEffect destructor", title);
    }, [title]);

    return (
        <>
            <span ref={ref}>{count}</span>
            <button
                onClick={() => {
                    count = count + 1;
                }}
            >
                {title} {subtitle}
            </button>
        </>
    );
};
