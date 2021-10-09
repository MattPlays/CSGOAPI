declare interface Stat {
    rank: string,
    percentile: number,
    displayName: string,
    displayCategory: string,
    category: string,
    metadata: [],
    value: number,
    displayValue: string,
    displayType: string,
}
declare interface platformInfo {
    platformSlug: string,
    platformUserId: string,
    platformUserHandle: string,
    platformUserIdentifier: string,
    avatarUrl: string,
    additionalParameters: string[],
}
declare interface userInfo {
    userId: number,
    isPremium: boolean,
    isVerified: boolean,
    isInfluencer: boolean,
    isPartner: boolean,
    countryCode: string,
    customAvatarUrl: string,
    customHeroUrl: string,
    socialAccounts: string[],
    pageviews: number,
    isSuspicious: boolean,
}
declare interface Profile {
    platformInfo: platformInfo,
    userInfo: userInfo,
    metadata: object | null,
    segments: {
        type: string, 
        attributes: {}, 
        metadata: {
            name: string
        }, 
        expiryDate: string, 
        stats: Stat[];
    }[],
    availableSegments: any,
    expiryDate: string,
}
declare interface SegmentResponse {
    type: string,
    attributes: {
        key: string,
    },
    metadata: {
        name: string,
        imageUrl: string;
        category: {
            value: string, 
            displayValue: string
        },
    },
    expiryDate: string,
    stats: {
        kills: Stat,
        shotsFired: Stat,
        shotsHit: Stat,
        shotsAccuracy: Stat,
    },
}
declare interface SearchResult {
    platformId: number,
    platformSlug: string,
    platformUserIdentifier: string,
    platformUserId: string,
    platformUserHandle: string,
    avatarUrl: string,
    status: string,
    additionalParameters: string[],
}
export declare class CSGOAPI {
    constructor(authKey: string);
    GetPlayerStats(playerIdentifier: string): Promise<Profile>;
    GetStatSegment(playerIdentifier: string, segmentType: string): Promise<SegmentResponse[]>;
    SearchForPlayer(query: string): Promise<SearchResult[]>;
}