declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    const content: import('react').FunctionComponent<import('react').SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

declare const __IS_DEV__:boolean;
