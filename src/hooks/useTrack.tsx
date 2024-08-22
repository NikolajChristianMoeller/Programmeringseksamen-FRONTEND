import { useEffect, useState } from "react";
import Api from "../utils/Api.tsx";
import type { TTrack } from "../types/track.type.ts";

export default function useTrack() {

    const [track, setTrack] = useState<TTrack[]>([]);

    useEffect(() => {
        void getTracks();
    },[])

    const getTracks = async () => {
        try {
            const res = await Api.get("tracks");
            setTrack(res)
        }
        catch (e) {
            console.error(e);
        }
    }

    const deleteTrack = async (id: number): Promise<void> => {
        try {
            await Api.delete("tracks", id);
            setTrack((prev) => (prev ? prev.filter((track) => track.id !== id) : []));
        } catch (e) {
            console.error(e);
        }
    };

    return {
        track,
        deleteTrack
    }
}