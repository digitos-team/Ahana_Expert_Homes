import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config();

export const appendToSheet = async (data) => {
  try {
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.replace(/"/g, '')?.trim();
    const key = process.env.GOOGLE_PRIVATE_KEY
      ?.replace(/\\n/g, '\n')
      ?.replace(/"/g, '')
      ?.trim();
    const sheetId = process.env.GOOGLE_SHEET_ID?.replace(/"/g, '')?.trim();

    if (!email || !key || !sheetId) {
      const missing = [];
      if (!email) missing.push('GOOGLE_SERVICE_ACCOUNT_EMAIL');
      if (!key) missing.push('GOOGLE_PRIVATE_KEY');
      if (!sheetId) missing.push('GOOGLE_SHEET_ID');
      throw new Error(`Missing environment variables: ${missing.join(', ')}`);
    }

    const serviceAccountAuth = new JWT({
      email,
      key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    // More robust header check for Google Spreadsheet v4
    try {
      await sheet.loadHeaderRow();
    } catch (e) {
      // If no headers (empty sheet), set them first
      await sheet.setHeaderRow(['Date', 'Name', 'Mobile', 'Email', 'UnitType', 'Message']);
    }

    await sheet.addRow({
      Date: new Date().toLocaleString(),
      Name: data.name,
      Mobile: data.mobile,
      Email: data.email,
      UnitType: data.unitType,
      Message: data.message || '',
    });

    console.log('Successfully appended to Google Sheet');
  } catch (error) {
    console.error('Error appending to Google Sheet:', error.message);
    throw new Error(error.message);
  }
};
