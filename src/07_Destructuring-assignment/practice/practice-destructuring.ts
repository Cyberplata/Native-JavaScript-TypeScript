type AllModelsType = {
    title: string
    year: string
}

type TitleFactoryType = {
    name: string
}

type AssemblyType = {
    titleFactory: TitleFactoryType[]
}

export type MyCarType = {
    brand: string
    model: string
    generation: number
    allModels: AllModelsType[]
    assembly: AssemblyType
}


