const {create} = require("axios").default;
const SegmentResponse = require("./SegmentResponse");
const SearchResult = require("./SearchResult");
const Profile = require("./Profile");
class CSGOAPI {
    constructor(authKey) {
        this.instance = create({
            baseURL: "https://public-api.tracker.gg/v2/csgo/standard",
            method: "GET",
            headers: {
                "TRN-Api-Key": authKey,
                "Accept": "application/json"
            }
        })
    }
    /**
     * 
     * @param {string} playerIndentifer 
     * @returns {Promise<Profile>}
     */
    async GetPlayerStats(playerIndentifer) {
        const {data} = await this.instance({
            url: `/profile/steam/${playerIndentifer}`,
            responseType: "json"
        });
        return new Profile(data.platformInfo, data.userInfo, data.metadata, data.segments, data.availableSegments, data.expiryDate)
    }
    /**
     * 
     * @param {string} playerIndentifer 
     * @param {string} segmentType 
     * @returns {Promise<SegmentResponse[]>}
     */
   async GetStatSegement(playerIndentifer, segmentType) {
        let url = this.api + `profile/steam/${playerIndentifer}/segments/${segmentType}`
        const {data} = await this.instance({
            url: `profile/steam/${playerIndentifer}/segments/${segmentType}`,
        });
        return data.map((d) => {return new SegmentResponse(d.type, d.attributes, d.metadata, d.expiryDate, d.stats)})
    }
    /**
     * 
     * @param {string} query 
     * @returns {Promise<SearchResult[]>}
     */
    async SearchForPlayer(query = "") {
        let url = this.api + `search?platform=steam&query=${query}`
        const {data} = await this.instance({
            url: `/search`,
            params: {
                "platform": "steam",
                "query": query
            }
        });
        return data.map((d) => {return new SearchResult(d.platformId, d.platformSlug, d.platformUserIdentifier, d.platformUserId, d.platformUserHandle, d.avatarUrl, d.stats, d.additionalParameters)})
    }
}
module.exports = {
    CSGOAPI: CSGOAPI
}