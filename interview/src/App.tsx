import { useEffect, useRef, useState } from "react";

const App = () => {
    const [title, setTitle] = useState("A");

    return (
        <>
            <button onClick={() => setTitle("B")}>Click {title} </button>
            <Incrementor title={title} />
        </>
    );
};

type Props = {
    title: string;
};

const Incrementor = ({ title }: Props) => {
    const ref = useRef<HTMLSpanElement>(null);
    const intervalFun = useRef(() => {});

    intervalFun.current = () => {
        if (ref.current !== null) {
            ref.current.innerText = String(Number(ref.current.innerText) + 1);
        }
        console.log(title);
    };

    useEffect(() => {
        const intervalId = setInterval(() => intervalFun.current(), 1);

        return () => clearInterval(intervalId);
    }, []);

    // code

    return <span ref={ref}>0</span>;
};

export default App;
