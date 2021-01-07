const parse = require('csv-parse/lib/sync')

class TableHelpers {
    static comparisonOperatorsHash = {
            '<': (a, b) => a < b,
            '>': (a, b) => a > b,
            '=': (a, b) => a === b,
            '==': (a, b) => a === b,
            '===': (a, b) => a === b
    }

    static getCondition(condition) {
        const conditionOperator = condition.charAt(0)
        const conditionValue = +condition.slice(1)

        return [conditionOperator, conditionValue]
    }

    static isAlertActive(tableEntry) {
        const comparisonOperator = this.comparisonOperatorsHash[tableEntry.conditionOperator];
        if (comparisonOperator === undefined) {
            throw "Error: comparison condition is not defined"
        }
        if (comparisonOperator(tableEntry.currentTemp, tableEntry.conditionValue)) {
            return true
        }
        return false
    }

    static initTable(fileContent) {
        let table={}
        const bufferToString = fileContent.toString('utf8')
        const initialTable = parse(bufferToString.trim(), {
            columns: ['city', 'conditionOperator'],
            skip_empty_lines: true
        })
        
        initialTable.shift() // remove table header

        for(const prop in initialTable){
            const cond = initialTable[prop].conditionOperator.trim()
            const [conditionOperator,conditionValue ] = this.getCondition(cond)
            const map = initialTable[prop].city

            initialTable[prop].conditionOperator = conditionOperator
            initialTable[prop].conditionValue = conditionValue
            const filledRow = { 
                ...initialTable[prop], 
                id: null, 
                condition: cond, 
                currentTemp: null, 
                lastTriggered: null, 
                duration: 0, 
                status: false 
            };
            table[map] = filledRow
        }
        return table
    }


    static updateTableEntry(weather, entry) {
        const tableEntry = {...entry}
        tableEntry.id = weather.id
        tableEntry.currentTemp = weather.main.temp
        const prevStatus = tableEntry.status
        const currentStatus = this.isAlertActive(tableEntry)
        tableEntry.status = currentStatus
        
        // status states
        // red ---> red or red ---> green
        if ( prevStatus ) {
            tableEntry.duration = Date.now() - tableEntry.lastTriggered
        }
        // green ---> red
        else if (!prevStatus && currentStatus) {
            tableEntry.lastTriggered = Date.now()
            tableEntry.duration = 0
        }
        return tableEntry
    }

    static sortTable(table) {
        const tableArr = Object.values(table)
        const sortedTable = tableArr.sort((a,b)=> {
            if (a.status && !b.status) return -1
            if (!a.status && b.status) return 1
            if (a.city < b.city) return -1
            if (a.city > b.city) return 1
            })

        return sortedTable
    }
        
}

module.exports = TableHelpers;