const Stat = require("./Stat");
class platformInfo {
    /**
     * 
     * @param {string} platformSlug 
     * @param {string} platformUserId 
     * @param {string} platformUserHandle 
     * @param {string} platformUserIdentifier 
     * @param {string} avatarUrl 
     * @param {string[]?} additionalParameters 
     * @returns {platformInfo}
     */
    constructor(platformSlug, platformUserId, platformUserHandle, platformUserIdentifier, avatarUrl, additionalParameters) {
        this.platformSlug = platformSlug;
        this.platformUserId = platformUserId;
        this.platformUserHandle = platformUserHandle;
        this.platformUserIdentifier = platformUserIdentifier;
        this.avatarUrl = avatarUrl;
        this.additionalParameters = additionalParameters;
    }
}
class userInfo {
    /**
     * 
     * @param {number} userId 
     * @param {boolean} isPremium 
     * @param {boolean} isVerified 
     * @param {boolean} isInfluencer 
     * @param {boolean} isPartner 
     * @param {string} countryCode 
     * @param {string} customAvatarUrl 
     * @param {string} customHeroUrl 
     * @param {string[]} socialAccounts 
     * @param {number} pageviews 
     * @param {boolean} isSuspicious
     */
    constructor(userId, isPremium, isVerified, isInfluencer, isPartner, countryCode, customAvatarUrl, customHeroUrl, socialAccounts, pageviews, isSuspicious) {
        this.userId = userId;
        this.isPremium = isPremium;
        this.isVerified = isVerified;
        this.isInfluencer = isInfluencer;
        this.isPartner = isPartner;
        this.countryCode = countryCode;
        this.customAvatarUrl = customAvatarUrl;
        this.customHeroUrl = customHeroUrl;
        this.socialAccounts = socialAccounts;
        this.pageviews = pageviews;
        this.isSuspicious = isSuspicious;
    }
}
class Profile {
    /**
     * 
     * @param {platformInfo} platformInfo 
     * @param {userInfo} userInfo 
     * @param {object} metadata 
     * @param {{type: string, attributes: any, metadata: {name: string}, expiryDate: string, stats: any}[] | {}} segments 
     * @param {string[]} availableSegments 
     * @param {string} expiryDate 
     */
    constructor(pltformInfo, userinfo, metadata, segments, availableSegments, expiryDate) {
            this.platformInfo = new platformInfo(pltformInfo.platformSlug, pltformInfo.platformUserId, pltformInfo.platformUserHandle, pltformInfo.platformUserIdentifier, pltformInfo.avatarUrl, pltformInfo.additionalParameters),
            this.userInfo = new userInfo(userinfo.userId, userinfo.isPremium, userinfo.isVerified, userinfo.isInfluencer, userinfo.isPartner, userinfo.countryCode, userinfo.customAvatarUrl, userinfo.customHeroUrl, userinfo.socialAccounts, userinfo.pageviews, userinfo.isSuspicious),
            this.metadata = metadata,
            this.segments = segments.map((segment) => {return {
                type: segment.type ?? null,
                attributes: segment.attributes ?? null,
                metadata: {
                    name: segment.metadata.name ?? null,
                },
                expiryDate: segment.expiryDate ?? null,
                stats: segment.stats,
            }}),
            this.availableSegments = availableSegments ?? null,
            this.expiryDate = expiryDate ?? null
        }
}
module.exports = Profile;