type Direction = "left" | "right" | "up" | "down";
export declare const transition: {
    type: string;
    duration: number;
};
export declare const slideAnimation: (direction: Direction) => {
    initial: {
        x: number;
        y: number;
        opacity: number;
        transition: {
            delay: number;
            type: string;
            duration: number;
        };
    };
    animate: {
        x: number;
        y: number;
        opacity: number;
        transition: {
            delay: number;
            type: string;
            duration: number;
        };
    };
    exit: {
        x: number;
        y: number;
        transition: {
            delay: number;
            type: string;
            duration: number;
        };
    };
};
export declare const fadeAnimation: {
    initial: {
        opacity: number;
        transition: {
            delay: number;
            type: string;
            duration: number;
        };
    };
    animate: {
        opacity: number;
        transition: {
            delay: number;
            type: string;
            duration: number;
        };
    };
    exit: {
        opacity: number;
        transition: {
            delay: number;
            type: string;
            duration: number;
        };
    };
};
export declare const headTextAnimation: {
    initial: {
        x: number;
        opacity: number;
    };
    animate: {
        x: number;
        opacity: number;
    };
    transition: {
        type: string;
        damping: number;
        stiffness: number;
        restDelta: number;
        duration: number;
    };
};
export declare const headContentAnimation: {
    initial: {
        y: number;
        opacity: number;
    };
    animate: {
        y: number;
        opacity: number;
    };
    transition: {
        type: string;
        damping: number;
        stiffness: number;
        restDelta: number;
        duration: number;
        delay: number;
        delayChildren: number;
    };
};
export declare const headContainerAnimation: {
    initial: {
        x: number;
        opacity: number;
        transition: {
            delay: number;
            type: string;
            duration: number;
        };
    };
    animate: {
        x: number;
        opacity: number;
        transition: {
            delay: number;
            type: string;
            duration: number;
        };
    };
    exit: {
        x: number;
        opacity: number;
        transition: {
            delay: number;
            type: string;
            duration: number;
        };
    };
};
export {};
