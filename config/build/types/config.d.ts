type TBuildMode = 'development'| 'production'

export type THtmlPath = Pick<IBuildPaths, 'html'>

export interface IBuildPaths  {
    entry: string,
    build: string,
    html: string
}

export type TPort = number

export type TBuildEnv = {
    port: TPort,
    mode: TBuildMode
}

export interface IBuildOptions  {
    mode: TBuildMode,
    paths:IBuildPaths,
    port:TPort,
    isDev:boolean
}

