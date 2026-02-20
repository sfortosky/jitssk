import { google } from 'googleapis';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
    const auth = new google.auth.GoogleAuth({
        keyFile: path.join(process.cwd(), 'credentials.json'),
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    const drive = google.drive({ version: 'v3', auth });
    const result = await drive.files.list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name, mimeType, webViewLink)',
        q: `'${process.env.FOLDER_ID}' in parents and trashed = false`,
    });

    return NextResponse.json(result.data.files ?? []);
}