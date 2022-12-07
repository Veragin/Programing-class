import { useEffect, useState } from "react";

type Props = {
    subtitle: string;
};

export const Test = ({ subtitle }: Props) => {
    const [title, setTitle] = useState(0);

    useEffect(() => {
        console.log("useEffect call", title);

        return () => console.log("useEffect destrucotr", title);
    }, [title]);

    return (
        <button onClick={() => setTitle((oldTitle) => oldTitle + 1)}>
            {title} {subtitle}
        </button>
    );
};
