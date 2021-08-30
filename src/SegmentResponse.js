const Stat = require('./Stat');
class SegmentResponse {
    /**
     * 
     * @param {string} type 
     * @param {{key: string}} attributes 
     * @param {{name: string, imageUrl: string, category: {value: string, displayValue: string}}} metadata 
     * @param {string} expiryDate 
     * @param {{kills: Stat, shotsFired: Stat, shotsHit: Stat, shotsAccuracy: Stat}} stats 
     */
    constructor(type, attributes, metadata, expiryDate, stats) {
        this.type = type;
        this.attributes = {
            key: attributes.key ?? "",
        };
        this.metadata = {
            name: metadata.name ?? "",
            imageUrl: metadata.imageUrl ?? "",
            category: {
                value: metadata.category.value ?? "",
                displayValue: metadata.category.displayValue ?? "",
            },
        };
        this.expiryDate = expiryDate;
        this.stats = {
            kills: new Stat(stats.kills.rank, stats.kills.percentile, stats.kills.displayName, stats.kills.displayCategory, stats.kills.category, stats.kills.metadata, stats.kills.value, stats.kills.displayName, stats.kills.displayType),
            shotsFired: new Stat(stats.shotsFired.rank, stats.shotsFired.percentile, stats.shotsFired.displayName, stats.shotsFired.displayCategory, stats.shotsFired.category, stats.shotsFired.metadata, stats.shotsFired.value, stats.shotsFired.displayValue, stats.shotsFired.displayType),
            shotsHit: new Stat(stats.shotsHit.rank, stats.shotsHit.percentile, stats.shotsHit.displayName, stats.shotsHit.displayCategory, stats.shotsHit.category, stats.shotsHit.metadata, stats.shotsHit.value, stats.shotsHit.displayValue, stats.shotsHit.displayType),
            shotsAccuracy: new Stat(stats.shotsAccuracy.rank, stats.shotsAccuracy.percentile, stats.shotsAccuracy.displayName, stats.shotsAccuracy.displayCategory, stats.shotsAccuracy.category, stats.shotsAccuracy.metadata, stats.shotsAccuracy.value, stats.shotsAccuracy.displayValue, stats.shotsAccuracy.displayType),
        }
    }
}
module.exports = SegmentResponse;