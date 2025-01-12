type Combinable = number | string;
type ResultType = "as-number" | "as-string" | "as-boolean";

const combine =
    (a: Combinable, b: Combinable, resultType: ResultType): number | string => {
        let result = (typeof a === 'number' && typeof b === 'number')
            ? a + b
            : a.toString() + b.toString();

        return (resultType === "as-number") ? +result : result.toString();
    };

const c = combine(20, 24, "as-number");