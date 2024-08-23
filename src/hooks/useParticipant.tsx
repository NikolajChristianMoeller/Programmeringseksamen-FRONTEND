import { useEffect, useState } from "react";
import Api from "../utils/Api.tsx";
import {TParticipant} from "../types/participant.type.ts";

export default function useParticipant() {

    const [participant, setParticipant] = useState<TParticipant[]>([]);

    useEffect(() => {
        void getParticipant();
    },[])

    const getParticipant = async () => {
        try {
            const res = await Api.get("participants");
            setParticipant(res)
        }
        catch (e) {
            console.error(e);
        }
    }

    const createParticipant = async (participants: TParticipant) => {
        try {
            const res = await Api.post("participants", participants);
            setParticipant((prev) => [...prev, res]);
        }
        catch (e) {
            console.error(e);
        }
    }

    const updateParticipant = async (
        updatedParticipant: TParticipant,
        id: number
    ): Promise<void> => {
        try {
            const res = await Api.put("timeslots", id, updatedParticipant);
            setParticipant((prev) => {
                if (prev) {
                    const index = prev.findIndex((participant) => participant.id === id);
                    const newParticipant = [...prev];
                    newParticipant[index] = res;
                    return newParticipant;
                }
                return prev;
            });
        } catch (e) {
            console.error(e);
        }
    };

    return {
        participant,
        createParticipant,
        updateParticipant
    }
}