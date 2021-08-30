class Stat {
    /**
     * 
     * @param {*} rank 
     * @param {number} percentile 
     * @param {string} displayName 
     * @param {string} displayCategory 
     * @param {string} category 
     * @param {object} metadata 
     * @param {number} value 
     * @param {string} displayValue 
     * @param {string} displayType
     * @returns {Stat} 
     */
    constructor(rank, percentile, displayName, displayCategory, category, metadata, value, displayValue, displayType) {
        this.rank = rank;
        this.percentile = percentile;
        this.displayName = displayName;
        this.displayCategory = displayCategory;
        this.category = category;
        this.metadata = metadata;
        this.value = value;
        this.displayValue = displayValue;
        this.displayType = displayType;
    }
}
module.exports = Stat;