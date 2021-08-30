class SearchResult {
    /**
     * 
     * @param {number} platformId 
     * @param {string} platformSlug 
     * @param {string} platformUserIdentifier 
     * @param {string} platformUserId 
     * @param {string} platformUserHandle 
     * @param {string} avatarUrl 
     * @param {*} status 
     * @param {*} additionalParameters 
     */
    constructor(platformId, platformSlug, platformUserIdentifier, platformUserId, platformUserHandle, avatarUrl, status, additionalParameters) {
        this.platformId = platformId;
        this.platformSlug = platformSlug;
        this.platformUserIdentifier = platformUserIdentifier;
        this.platformUserId = platformUserId;
        this.platformUserHandle = platformUserHandle;
        this.avatarUrl = avatarUrl;
        this.status = status;
        this.additionalParameters = additionalParameters;
    }
}
module.exports = SearchResult;