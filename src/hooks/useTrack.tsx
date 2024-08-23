import { useEffect, useState } from "react";
import Api from "../utils/Api.tsx";
import {TTrack} from "../types/track.type.ts";

export default function useTrack() {

    const [tracks, setTrack] = useState<TTrack[]>([]);  // Renamed to 'tracks'

    useEffect(() => {
        void getTracks();
    },[])

    const getTracks = async () => {
        try {
            const res = await Api.get("tracks");
            setTrack(res)  // Updated to 'tracks'
        }
        catch (e) {
            console.error(e);
        }
    }

    return {
        tracks,

    }
}
