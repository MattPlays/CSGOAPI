const Stat = require('./Stat');
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