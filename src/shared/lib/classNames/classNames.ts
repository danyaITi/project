type TMode = Record<string, string | boolean>

export const classNames = (
    className:string,
    mods:TMode = {},
    additional:string[] = []
):string => [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([_, value]) => value === true)
        .map(([key, _]) => key),
].join(' ');
