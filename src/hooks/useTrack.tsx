import { useEffect, useState } from "react";
import Api from "../utils/Api.tsx";
import type { TTrack } from "../types/track.type.ts";

export default function useTrack() {

    const [tracks, setTracks] = useState<TTrack[]>([]);  // Renamed to 'tracks'

    useEffect(() => {
        void getTracks();
    },[])

    const getTracks = async () => {
        try {
            const res = await Api.get("tracks");
            setTracks(res)  // Updated to 'tracks'
        }
        catch (e) {
            console.error(e);
        }
    }

    const deleteTrack = async (id: number): Promise<void> => {
        try {
            await Api.delete("tracks", id);
            setTracks((prev) => (prev ? prev.filter((track) => track.id !== id) : []));
        } catch (e) {
            console.error(e);
        }
    };

    return {
        tracks,  // Updated to 'tracks'
        deleteTrack
    }
}
