const parse = require('csv-parse/lib/sync')

class CsvHelpers {
    static comparisonOperatorsHash = {
            '<': (a, b) => a < b,
            '>': (a, b) => a > b,
            '=': (a, b) => a == b,
            '==': (a, b) => a == b,
            '===': (a, b) => a === b
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
        const contentArr = parse(bufferToString.trim(), {
          columns: ['city', 'conditionOperator'],
          skip_empty_lines: true
        })
        
        contentArr.shift() // remove table header
    
        for(const prop in contentArr){
            const cond = contentArr[prop].conditionOperator.trim()
            contentArr[prop].conditionOperator = cond.charAt(0)
            contentArr[prop].conditionValue = +cond.slice(1)
            const hash = contentArr[prop].city
            const filledRow = { 
                ...contentArr[prop], 
                id: null, 
                condition: cond, 
                currentTemp: null, 
                lastTriggered: null, 
                duration: 0, 
                status: false 
            };
            table[hash] = filledRow
        }
        return table
    }
    

    static updateTableEntry(result, entry) {
        const tableEntry = {...entry}
        tableEntry.id = result.id
        tableEntry.currentTemp = result.main.temp
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
            if (a.status && !b.staus) return -1
            if (!a.status && b.status) return 1
            if (a.city < b.city) return -1
            if (a.city > b.city) return 1
            })

        return sortedTable
    }
      
}

module.exports = CsvHelpers;