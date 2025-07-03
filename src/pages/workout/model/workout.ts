import LZString from 'lz-string';

export function workoutParse(searchParams: URLSearchParams,) {
    let compressedData: string | null = searchParams.get('workout');

    if (compressedData !== null) {
        let decompressedData = LZString.decompressFromEncodedURIComponent(compressedData)

        return (JSON.parse(decompressedData))
    }
}