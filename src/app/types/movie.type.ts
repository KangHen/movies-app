export type MovieParams = {
    genre?: string;
    page?: number;
    limit?: number;
    search?: string;
    startYear?: number;
    endYear?: number;
    info?: string;
    sort?: string;
    list?: string;
}

export type PrimaryImage = {
    id: string;
    width: number;
    height: number;
    url: string;
    caption: {
        plainText: string;
        __typename: string;
    };
    __typename: string;
}

export type TitleType = {
    displayableProperty: {
        value: {
            plainText: string;
            __typename: string;
        };
        __typename: string;
    };
    text: string;
    id: string;
    isSeries: boolean;
    isEpisode: boolean;
    categories: [
        {
            value: string;
            __typename: string;
        }
    ];
    canHaveEpisodes: boolean;
    __typename: string;
}

export type Releaseyear = {
    year: number;
    endYear: number|null;
    __typename: string
}

export type ReleaseDate = {
    day: number|null;
    month: number|null;
    year: number|null;
    __typename: string
}

export type Movie = {
    _id: string;
    id: string;
    primaryImage: PrimaryImage;
    titleType: TitleType;
    titleText: {
        text: string;
        __typename: string;
    };
    originalTitleText: {
        text: string;
        __typename: string;
    };
    releaseDate: ReleaseDate;
}

export type RapidAPIResponse = {
    page: number;
    next: string;
    entries: number;
    results: Movie[]
}