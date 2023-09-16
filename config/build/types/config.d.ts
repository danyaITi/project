type TBuildMode = 'development'| 'production'

export type THtmlPath = Pick<IBuildPaths, 'html'>

export interface IBuildPaths  {
    entry: string,
    build: string,
    html: string
}

export interface IBuildOptions  {
    mode: TBuildMode,
    paths:IBuildPaths
}

