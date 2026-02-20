import Image from "next/image";


export default async function Resources() {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/drive`);
    // const files = await res.json();

    return (
        <section id="resources">
            <div className="flex gap-10 justify-center">
                <h1>Check out our free resources</h1>
                <Image src="/Drive.png" alt="Google Drive" width={50} height={50} className="pb-5"/>
            </div>
            {/*<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">*/}
            {/*    {files.map((f: { id: string, name: string, mimeType: string, webViewLink: string}) => (*/}
            {/*        <div key={f.id} className="border rounded-box border-base-200 p-3">*/}
            {/*            <a href={f.webViewLink} target="_blank">*/}
            {/*                <iframe*/}
            {/*                    src={`https://drive.google.com/file/d/${f.id}/preview`}*/}
            {/*                    className="w-full h-40 rounded pointer-events-none"*/}
            {/*                />*/}
            {/*            </a>*/}
            {/*            <p className="mt-2 text-sm font-medium">{f.name}</p>*/}
            {/*            <a href={`https://drive.google.com/uc?export=download&id=${f.id}`}*/}
            {/*               className="link link-hover text-xs text-primary"*/}
            {/*            >*/}
            {/*                Download*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </section>
    );
}