import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 25,
    fontSize: 8,
    fontFamily: 'Courier',
  },
  headerRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  headerLeft: {
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    marginRight: 15,
  },
  logoImage: {
    width: 150,
    height: 80,
  },
  headerCenter: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'underline',
    marginBottom: 8,
  },
  fechaText: {
    fontSize: 9,
  },
  headerRight: {
    width: '25%',
    alignItems: 'flex-end',
  },
  hojaText: {
    fontSize: 9,
    marginBottom: 8,
  },
  ceBox: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    marginBottom: 5,
  },
  ceText: {
    fontSize: 9,
  },
  tcText: {
    fontSize: 8,
  },
  infoSection: {
    bottom:20,
    marginBottom: 8,
  },
  infoLine: {
    flexDirection: 'row',
    marginBottom: 3,
    fontSize: 9,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  conceptBox: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    minHeight: 60,
    marginBottom: 10,
  },
  conceptText: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
  currencyHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    minHeight: 18,
  },
  currencyHeaderEmpty: {
    width: '50%',
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
  currencyHeaderBolivianos: {
    width: '25%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyHeaderDolares: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyText: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    minHeight: 18,
  },
  colCodigo: {
    width: '8%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colDetalle: {
    width: '42%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colDebe1: {
    width: '12.5%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colHaber1: {
    width: '12.5%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colDebe2: {
    width: '12.5%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colHaber2: {
    width: '12.5%',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 7,
    fontWeight: 'bold',
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  cellCodigo: {
    width: '8%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 2,
  },
  cellDetalle: {
    width: '42%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 2,
  },
  cellDebe1: {
    width: '12.5%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 2,
    alignItems: 'flex-end',
  },
  cellHaber1: {
    width: '12.5%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 2,
    alignItems: 'flex-end',
  },
  cellDebe2: {
    width: '12.5%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 2,
    alignItems: 'flex-end',
  },
  cellHaber2: {
    width: '12.5%',
    padding: 2,
    alignItems: 'flex-end',
  },
  cellText: {
    fontSize: 7,
  },
  emptyRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    minHeight: 120,
  },
  totalsRow: {
    flexDirection: 'row',
    minHeight: 20,
  },
  totalLabel: {
    width: '50%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalText: {
    fontSize: 8,
    fontWeight: 'bold',
  },
  signatureSection: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#000',
  },
  signatureTopRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    minHeight: 50,
  },
  signatureFieldCol: {
    width: '25%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    padding: 4,
    justifyContent: 'center',
  },
  signatureFieldColLast: {
    width: '25%',
    padding: 4,
    justifyContent: 'center',
  },
  signatureField: {
    marginBottom: 8,
  },
  signatureLabel: {
    fontSize: 7,
    marginBottom: 2,
  },
  signatureLine: {
    borderBottomWidth: 0.8,
    borderBottomColor: '#000',
    minHeight: 12,
  },
  signatureBottomRow: {
    flexDirection: 'row',
    minHeight: 25,
  },
  signatureLabelCol: {
    width: '25%',
    borderRightWidth: 1,
    borderRightColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  signatureLabelColLast: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  signatureText: {
    fontSize: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const ComprobanteEgreso = () => {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <View style={styles.logoContainer}>
              <Image 
                style={styles.logoImage}
                src="./images/gamarra.png" //ruta del logo
              />
            </View> 
          </View>
          
          <View style={styles.headerCenter}>
            <Text style={styles.title}>COMPROBANTE DE EGRESO</Text>
            <Text style={styles.fechaText}>Fecha: 09/09/2025</Text>
          </View>
          
          <View style={styles.headerRight}>
            <Text style={styles.hojaText}>Hoja: 1</Text>
            <View style={styles.ceBox}>
              <Text style={styles.ceText}>CE-202509-00180</Text>
            </View>
            <Text style={styles.tcText}>T/C.Dolar.-      6.9600</Text>
          </View>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoLine}>
            <Text style={styles.infoLabel}>A Favor de: </Text>
            <Text>BANCO MERCANTIL SANTA CRUZ SA CTA 4010681471</Text>
          </View>
          <View style={styles.infoLine}>
            <Text style={styles.infoLabel}>Cheque No: </Text>
            <Text>180271195</Text>
          </View>
          <View style={styles.infoLine}>
            <Text style={styles.infoLabel}>Referencia: </Text>
            <Text>1101020005 BANCO ECONOMICO S.A. M/N CAJA AHORRO</Text>
          </View>
        </View>

        <View style={styles.conceptBox}>
          <Text style={styles.conceptText}>
            HCO MSC2 SA: PAGO DE CETABOL INDUSTRIAS DE ACEITE SA SOL-2047 (ANALISIS DE FERTILIZANTE) S/VIA WEB
          </Text>
        </View>

        <View style={styles.table}>
          
          <View style={styles.currencyHeader}>
            <View style={styles.currencyHeaderEmpty}></View>
            <View style={styles.currencyHeaderBolivianos}>
              <Text style={styles.currencyText}>BOLIVIANOS</Text>
            </View>
            <View style={styles.currencyHeaderDolares}>
              <Text style={styles.currencyText}>DOLARES</Text>
            </View>
          </View>

          <View style={styles.tableHeader}>
            <View style={styles.colCodigo}>
              <Text style={styles.headerText}>CODIGO</Text>
            </View>
            <View style={styles.colDetalle}>
              <Text style={styles.headerText}>DETALLE</Text>
            </View>
            <View style={styles.colDebe1}>
              <Text style={styles.headerText}>DEBE</Text>
            </View>
            <View style={styles.colHaber1}>
              <Text style={styles.headerText}>HABER</Text>
            </View>
            <View style={styles.colDebe2}>
              <Text style={styles.headerText}>DEBE</Text>
            </View>
            <View style={styles.colHaber2}>
              <Text style={styles.headerText}>HABER</Text>
            </View>
          </View>

          <View style={styles.dataRow}>
            <View style={styles.cellCodigo}>
              <Text style={styles.cellText}>10203</Text>
              <Text style={styles.cellText}>1102030</Text>
              <Text style={styles.cellText}>0</Text>
              <Text style={styles.cellText}>450240</Text>
            </View>
            <View style={styles.cellDetalle}>
              <Text style={styles.cellText}>CUENTAS POR COBRAR CLIENTE</Text>
              <Text style={styles.cellText}>INDUSTRIAS DE ACEITE S.A.</Text>
              <Text style={styles.cellText}>INDUSTRIAS DE ACEITE S.A.</Text>
              <Text style={styles.cellText}>Documento:650</Text>
              <Text style={styles.cellText}>HCO MSC2 SA: PAGO DE CETABOL INDUSTRIAS DE</Text>
              <Text style={styles.cellText}>ACEITE SA SOL-2047 (ANALISIS DE</Text>
              <Text style={styles.cellText}>FERTILIZANTE) S/VIA WEB</Text>
            </View>
            <View style={styles.cellDebe1}>
              <Text style={styles.cellText}>436.80</Text>
            </View>
            <View style={styles.cellHaber1}>
              <Text style={styles.cellText}></Text>
            </View>
            <View style={styles.cellDebe2}>
              <Text style={styles.cellText}>62.75</Text>
            </View>
            <View style={styles.cellHaber2}>
              <Text style={styles.cellText}></Text>
            </View>
          </View>

          <View style={styles.dataRow}>
            <View style={styles.cellCodigo}>
              <Text style={styles.cellText}>10102</Text>
              <Text style={styles.cellText}>1101020</Text>
              <Text style={styles.cellText}>0</Text>
            </View>
            <View style={styles.cellDetalle}>
              <Text style={styles.cellText}>BANCO MONEDA NACIONAL</Text>
              <Text style={styles.cellText}>BANCO ECONOMICO S.A. M/N CAJA AHORRO</Text>
              <Text style={styles.cellText}>Documento:180271195</Text>
              <Text style={styles.cellText}>HCO MSC2 SA: PAGO DE CETABOL INDUSTRIAS DE</Text>
              <Text style={styles.cellText}>ACEITE SA SOL-2047 (ANALISIS DE</Text>
              <Text style={styles.cellText}>FERTILIZANTE) S/VIA WEB</Text>
            </View>
            <View style={styles.cellDebe1}>
              <Text style={styles.cellText}></Text>
            </View>
            <View style={styles.cellHaber1}>
              <Text style={styles.cellText}>436.80</Text>
            </View>
            <View style={styles.cellDebe2}>
              <Text style={styles.cellText}></Text>
            </View>
            <View style={styles.cellHaber2}>
              <Text style={styles.cellText}>62.75</Text>
            </View>
          </View>

          <View style={styles.emptyRow}>
            <View style={styles.cellCodigo}></View>
            <View style={styles.cellDetalle}></View>
            <View style={styles.cellDebe1}></View>
            <View style={styles.cellHaber1}></View>
            <View style={styles.cellDebe2}></View>
            <View style={styles.cellHaber2}></View>
          </View>

          {/* Totales */}
          <View style={styles.totalsRow}>
            <View style={styles.totalLabel}>
              <Text style={styles.totalText}>TOTALES</Text>
            </View>
            <View style={styles.cellDebe1}>
              <Text style={styles.totalText}>436.80</Text>
            </View>
            <View style={styles.cellHaber1}>
              <Text style={styles.totalText}>436.80</Text>
            </View>
            <View style={styles.cellDebe2}>
              <Text style={styles.totalText}>62.76</Text>
            </View>
            <View style={styles.cellHaber2}>
              <Text style={styles.totalText}>62.76</Text>
            </View>
          </View>

        </View>

        <View style={styles.signatureSection}>
          <View style={styles.signatureTopRow}>
            <View style={styles.signatureFieldCol}></View>
            <View style={styles.signatureFieldCol}></View>
            <View style={styles.signatureFieldCol}></View>
            
            <View style={styles.signatureFieldColLast}>
              <View style={styles.signatureField}>
                <Text style={styles.signatureLabel}>NOMBRE:</Text>
                <View style={styles.signatureLine}></View>
              </View>
              <View style={styles.signatureField}>
                <Text style={styles.signatureLabel}>CI.:</Text>
                <View style={styles.signatureLine}></View>
              </View>
              <View style={styles.signatureField}>
                <Text style={styles.signatureLabel}>FIRMA:</Text>
                <View style={styles.signatureLine}></View>
              </View>
            </View>
          </View>
          
          <View style={styles.signatureBottomRow}>
            <View style={styles.signatureLabelCol}>
              <Text style={styles.signatureText}>PREPARADO</Text>
            </View>
            <View style={styles.signatureLabelCol}>
              <Text style={styles.signatureText}>REVISADO</Text>
            </View>
            <View style={styles.signatureLabelCol}>
              <Text style={styles.signatureText}>APROBADO</Text>
            </View>
            <View style={styles.signatureLabelColLast}>
              <Text style={styles.signatureText}>RECIBI CONFORME</Text>
            </View>
          </View>
        </View>

      </Page>
    </Document>
  );
};

export default ComprobanteEgreso;