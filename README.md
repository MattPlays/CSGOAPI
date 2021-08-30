# CSGOAPI
This package is a wrapper for the unofficial CSGOAPI
1. [Counter Strike Global Offensive](#csgo)
    1. [Usage](#csgo-usage)
    2. [Functions](#csgo-functions)
        1. [GetPlayerStats](#csgo-getplayerstats)
            1. [Input](#csgo-getplayerstats-input)
            2. [Output](#csgo-getplayerstats-output)
            3. [Usage](#csgo-getplayerstats-usage)
        2. [GetStatSegment](#csgo-getstatsegment)
            1. [Inputs](#csgo-getstatsegment-inputs)
            2. [Output](#csgo-getstatsegment-output)
            3. [Usage](#csgo-getstatsegment-usage)
        3. [SearchForPlayer](#csgo-searchforplayer)
            1. [Input](#csgo-searchforplayer-input)
            2. [Output](#csgo-searchforplayer-output)
            3. [Usage](#csgo-searchforplayer-usage)
    3. [Return Types](#csgo-returntypes)
        1. [Profile](#csgo-returntypes-profile)
            1. [Stat](#csgo-returntypes-profile-stat)
        2. [SegmentResponse](#csgo-returntypes-segmentresponse)
            1. [Stat](#csgo-returntypes-profile-stat)
        3. [SearchResult](#csgo-returntypes-searchresult)

## Counter Strike Global Offensive <a id="csgo">
**This is an Unoffical API** [Unoffical Docs](https://tracker.gg/developers/docs/titles/csgo)
### Usage <a id="csgo-usage">
```javascript
const {CSGOAPI} = require("@mattplays/csgo-api");
const API = new CSGOAPI("DUMYMAPIKEY");
```
### Functions <a id="csgo-functions">
#### GetPlayerStats <a id="csgo-getplayerstats">
Retrieve career stats for an CSGO player.
##### Input <a id="csgo-getplayerstats-input">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- | 
| playerIdentifier  |`string`  | Yes | The user's handle on Steam, ie. a Steam ID, Steam Community URL, Steam Vanity Username, etc. |
##### Output <a  id="csgo-getplayerstats-output">
The GetPlayerStats function returns a `Promise<Profile>` type
##### Usage <a id="csgo-getplayerstats-usage">
```javascript
const API = new CSGOAPI("DUMYMAPIKEY");
API.GetPlayerStats("DUMMY-PLAYER-IDENTIFIER").then((data) => {
// Your Code Here :D
});
```
#### GetStatSegment <a id="csgo-getstatsegment">
Retrieve a portion of the stats for a CSGO player. We divide stats into logical segments, such as playlists, seasons, heroes, etc. (whatever happens to be useful for a specific game.)
##### Inputs <a id="csgo-getstatsegment-inputs">
| Input  | Type | Required | Description |
| ------------- | ------------- | ------------- |------------- | 
| playerIdentifier  | `string`  | Yes | The user's handle on Steam, ie. a Steam ID, Steam Community URL, Steam Vanity Username, etc. |
| segmentType | `string` | Yes | The type of segment you want to return, ie. 'map', or 'weapon'. | 
##### Output <a id="csgo-getstatsegment-output">
The GetStatSegment function returns a `Promise<SegmentResponse>` type
##### Usage <a id="csgo-getstatsegment-usage">
```javascript
const API = new CSGOAPI("DUMYMAPIKEY");
API.GetStatSegment("DUMMY-PLAYER-IDENTIFIER", "map").then((data) => {
// Your Code Here :D
});
```
#### SearchForPlayer <a id="csgo-searchforplayer">
Allows you to perform a search for a CSGO player using a unique identifier (a Steam ID, Steam Community URL, Steam Vanity Username, etc.) The result set is not guaranteed to be an exhaustive list of players that match the search.
##### Input <a id="csgo-searchforplayer-input">
| Input  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| query  | `string`  | Yes | The user's handle on Steam, ie. a Steam ID, Steam Community URL, Steam Vanity Username, etc. |
##### Output <a id="csgo-searchforplayer-output">
The SearchForPlayer function returns a `Promise<SearchResult[]>` type
##### Usage <a id="csgo-searchforplayer-output">
```javascript
const API = new CSGOAPI("DUMYMAPIKEY");
API.SearchForPlayer("DUMMY-STEAM-ID").then((data) => {
// Your Code Here :D
});
```
### Return Types <a id="csgo-returntypes">
#### Profile <a id="csgo-returntypes-profile">
##### Stat <a id="csgo-returntypes-profile-stat">
```typescript
export interface Stat {
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
```
```typescript
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
```
#### SegmentResponse <a id="csgo-returntypes-segmentresponse">
##### Stat <a id="csgo-returntypes-segmentresponse-stat">
```typescript
export interface Stat {
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
```
```typescript
export interface SegmentResponse {
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
```
#### SearchResult <a id="csgo-returntypes-searchresult">
```typescript
export interface SearchResult {
    platformId: number,
    platformSlug: string,
    platformUserIdentifier: string,
    platformUserId: string,
    platformUserHandle: string,
    avatarUrl: string,
    status: string,
    additionalParameters: string[],
}
```