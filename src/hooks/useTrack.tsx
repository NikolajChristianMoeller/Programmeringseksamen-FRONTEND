import { useEffect, useState } from "react";
import Api from "../utils/Api.tsx";

export default function useTrack() {

    type TTrack = {
        id: number
        name: string,
        trackType: string,
        date: string,
        trackValue: string
    }

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
