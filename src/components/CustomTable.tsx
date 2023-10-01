import { View, Text, StyleSheet } from 'react-native'

const TableRow = ({ data, tableCellStyle }) => {
  return (
    <View style={styles.tableRow}>
      {data.map((cellData, index) => (
        <View key={index} style={[styles.tableCell, tableCellStyle]}>
          <Text>{cellData}</Text>
        </View>
      ))}
    </View>
  )
}

const CustomTable = ({ headers, rows, tableStyle, tableCellStyle }) => {
  return (
    <View style={[styles.table, tableStyle]}>
      <TableRow data={headers} tableCellStyle={tableCellStyle} />
      {rows.map((rowData, index) => (
        <TableRow key={index} data={rowData} tableCellStyle={tableCellStyle} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#ccc'
  },
  tableRow: {
    flexDirection: 'row'
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc'
  }
})

export default CustomTable
