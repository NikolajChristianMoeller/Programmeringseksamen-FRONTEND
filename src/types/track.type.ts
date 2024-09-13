 export type TTrackType = "FIELD" | "TRACK";
 export type TTrackShape = "OVAL" | "STRAIGHT";
 export type TTrackSurface = "GRASS" | "SAND";
 export type TTrackLength = "METERS" | "KILOMETERS" | "MILES";

 export type TTrack = {
    id: number;
    trackType: TTrackType;
    trackShape: TTrackShape;
    trackSurface: TTrackSurface;
    trackLength: TTrackLength;
    lanes: number;
    disciplines: number[];
};
