import LZString from 'lz-string';

export function workoutParse(searchParams: URLSearchParams) {
  const compressedData: string | null = searchParams.get('workout');

  if (compressedData !== null) {
    const decompressedData = LZString.decompressFromEncodedURIComponent(compressedData);

    return JSON.parse(decompressedData);
  }
}
