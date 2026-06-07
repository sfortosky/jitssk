import Link from "next/link";
import Image from "next/image";

interface DriveFile {
    id: string;
    name: string;
    mimeType: string;
    webViewLink: string;
    thumbnailLink?: string;
}

async function fetchDriveResources(): Promise<DriveFile[]> {
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    const apiKey = process.env.GOOGLE_CLOUD_API_KEY;

    if (!folderId || !apiKey) {
        console.error("Missing Google Drive environment variables.");
        return [];
    }

    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+trashed=false&fields=files(id,name,mimeType,webViewLink,thumbnailLink)&key=${apiKey}`;

    try {
        const res = await fetch(url, { next: { revalidate: 3600 } });
        const data = await res.json();
        return data.files || [];
    } catch (error) {
        console.error("Failed to dynamically pull Google Drive items:", error);
        return [];
    }
}

export default async function Resources() {
    const files = await fetchDriveResources();

    return (
        <section id="resources" className="w-full max-w-6xl mx-auto pt-12 pb-50 px-4 flex flex-col gap-6">
            {/* Header */}
            <div className="text-center mb-2 max-w-xl mx-auto">
                <h1 className="text-4xl font-extrabold tracking-tight text-black mb-3">
                    Check out our free resources
                </h1>
            </div>

            {/* Resource Container */}
            <div className="flex items-center gap-6 w-full">

                {/* Google Drive Logo */}
                <div className="shrink-0 flex items-center justify-center pl-2">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg"
                        alt="Google Drive"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                </div>

                {/* Scrollable Resources */}
                <div className="flex-1 overflow-x-auto pb-4 pt-2 flex gap-4 scrollbar-thin scrollbar-thumb-base-300 scrollbar-track-transparent">
                    {files.length === 0 ? (
                        <p className="text-sm text-gray-400 italic py-4">No public resources found in folder...</p>
                    ) : (
                        files.map((file) => (
                            <Link
                                key={file.id}
                                href={file.webViewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group shrink-0 w-36 h-36 bg-base-100 border border-base-200 rounded-xl shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between p-3 relative overflow-hidden"
                            >
                                {/* Document Icon  */}
                                <div className="w-full flex-1 flex items-center justify-center relative">
                                    {file.thumbnailLink ? (
                                        <img
                                            src={file.thumbnailLink}
                                            alt=""
                                            className="max-h-20 object-contain rounded border border-base-200 shadow-xs"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="text-2xl opacity-40">📄</div>
                                    )}
                                </div>

                                {/* Bottom label */}
                                <span className="text-xs font-semibold text-neutral truncate w-full text-center group-hover:text-primary transition-colors mt-2">
                                    {file.name}
                                </span>
                            </Link>
                        ))
                    )}
                </div>

            </div>
        </section>
    );
}