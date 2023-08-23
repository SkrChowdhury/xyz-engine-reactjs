import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import React from 'react';

const PdfDocument = ({ max_X,min_X,max_Y,min_Y,max_Z,min_Z, minMaxValues }) => (
  <Document>
    <Page size="A4" style={styles.page}>
    <View style={styles.container}>

        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Name</Text>
            <Text style={styles.headerText}>Max Value</Text>
            <Text style={styles.headerText}>Min Value</Text>
          </View>
          <View style={styles.tableBody}>
            <View style={styles.row}>
              <Text style={styles.rowText}>X</Text>
              <Text style={styles.rowText}>
                {max_X !== undefined ? max_X : minMaxValues?.X?.max}
              </Text>
              <Text style={styles.rowText}>
                {min_X !== undefined ? min_X : minMaxValues?.X?.min}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Y</Text>
              <Text style={styles.rowText}>
                {max_Y !== undefined ? max_Y : minMaxValues?.Y?.max}
              </Text>
              <Text style={styles.rowText}>
                {min_Y !== undefined ? min_Y : minMaxValues?.Y?.min}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Z</Text>
              <Text style={styles.rowText}>
                {max_Z !== undefined ? max_Z : minMaxValues?.Z?.max}
              </Text>
              <Text style={styles.rowText}>
                {min_Z !== undefined ? min_Z : minMaxValues?.Z?.min}
              </Text>
            </View>
          </View>
        </View>
    </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  text: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  tableContainer: {
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#3182CE',
    borderBottomWidth: 1,
    borderColor: '#4A90E2',
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  headerText: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  tableBody: {},
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 6,
    backgroundColor: '#3182CE',
  },
  rowText: {
    flex: 1,
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default PdfDocument;
