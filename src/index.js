const fetch = require("node-fetch")
const SegmentResponse = require("./SegmentResponse");
const SearchResult = require("./SearchResult");
const Profile = require("./Profile");
class CSGOAPI {
    constructor(authKey) {
        this.api = "https://public-api.tracker.gg/v2/csgo/standard/"
        this.authKey = authKey
        this.offical = false
    }
    /**
     * 
     * @param {string} playerIndentifer 
     * @returns {Promise<Profile>}
     */
    GetPlayerStats(playerIndentifer) {
        let url = this.api + `profile/steam/${playerIndentifer}`
        return fetch(url, {
            "headers": {
                "TRN-Api-Key": this.authKey,
                "Accept": "application/json",
            },
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return new Profile(data.data.platformInfo, data.data.userInfo, data.data.metadata, data.data.segments, data.data.availableSegments, data.data.expiryDate)
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} playerIndentifer 
     * @param {string} segmentType 
     * @returns {Promise<SegmentResponse[]>}
     */
    GetStatSegement(playerIndentifer, segmentType) {
        let url = this.api + `profile/steam/${playerIndentifer}/segments/${segmentType}`
        return fetch(url, {
            "headers": {
                "TRN-Api-Key": this.authKey,
                "Accept": "application/json",
            },
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return data.map((d) => {return new SegmentResponse(d.type, d.attributes, d.metadata, d.expiryDate, d.stats)})
        }).catch((err) => {throw new Error(err)});
    }
    /**
     * 
     * @param {string} query 
     * @returns {Promise<SearchResult[]>}
     */
    SearchForPlayer(query = "") {
        let url = this.api + `search?platform=steam&query=${query}`
        return fetch(url, {
            "headers": {
                "TRN-Api-Key": this.authKey,
                "Accept": "application/json",
            },
            "method": "GET",
            "mode": "cors"
        }).then(res => res.json()).then((data) => {
            return data.map((d) => {return new SearchResult(d.platformId, d.platformSlug, d.platformUserIdentifier, d.platformUserId, d.platformUserHandle, d.avatarUrl, d.stats, d.additionalParameters)})
        }).catch((err) => {throw new Error(err)});
    }
}
module.exports = {
    CSGOAPI: CSGOAPI
}