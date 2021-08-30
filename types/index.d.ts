const Profile = require('./Profile');
const SegmentResponse = require("./SegmentResponse");
const SearchResult = require("./SearchResult")
export class CSGOAPI {
    constructor(authKey: string);
    GetPlayerStats(playerIdentifier: string): Promise<Profile>;
    GetStatSegment(playerIdentifier: string, segmentType: string): Promise<SegmentResponse[]>;
    SearchForPlayer(query: string): Promise<SearchResult[]>;
}