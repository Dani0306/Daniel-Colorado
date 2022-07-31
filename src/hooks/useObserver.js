import { useEffect, useState } from "react";

export const useObserver = (ref, config) => {

    const { root, threshold } = config;
    const [observerEntry, setObserverEntry] = useState(null);

    useEffect(() => {
        if(!ref?.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            setObserverEntry(entry);
        }, { root, threshold })

        observer.observe(ref.current)
        
    }, [ref, root])


    return [observerEntry]

}


