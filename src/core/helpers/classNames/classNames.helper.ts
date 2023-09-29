type TMode = Record<string, string | boolean>

export const classNames = (className:string, mods:TMode, additional?:string[]):string => {

    return [
        className,
        ...additional, 
        ...Object.entries(mods).filter(([_,value])=> value === true).map(([key,_])=> key)
    ]
    .join(' ')
}



