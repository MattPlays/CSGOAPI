import {Stat} from "./Stat"
interface platformInfo {
    platformSlug: string,
    platformUserId: string,
    platformUserHandle: string,
    platformUserIdentifier: string,
    avatarUrl: string,
    additionalParameters: string[],
}
interface userInfo {
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
export interface Profile {
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