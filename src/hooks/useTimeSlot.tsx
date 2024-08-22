import { useEffect, useState } from "react";
import Api from "../utils/Api.tsx";
import {TTimeSlot, TTimeSlotCreateAndUpdate} from "../types/timeslot.type.ts";

export default function useTimeSlot() {

    const [timeSlot, setTimeSlot] = useState<TTimeSlot[]>([]);

    useEffect(() => {
        void getTimeSlots();
    },[])

    const getTimeSlots = async () => {
        try {
            const res = await Api.get("timeslots");
            setTimeSlot(res)
        }
        catch (e) {
            console.error(e);
        }
    }

    const createTimeSlot = async (timeSlot: TTimeSlotCreateAndUpdate) => {
        try {
            const res = await Api.post("timeslots", timeSlot);
            setTimeSlot((prev) => [...prev, res]);
        }
        catch (e) {
            console.error(e);
        }
    }

    const updateTimeSlot = async (
        updatedTimeSlot: TTimeSlotCreateAndUpdate,
        id: number
    ): Promise<void> => {
        try {
            const res = await Api.put("timeslots", id, updatedTimeSlot);
            setTimeSlot((prev) => {
                if (prev) {
                    const index = prev.findIndex((timeSlot) => timeSlot.id === id);
                    const newTimeSlot = [...prev];
                    newTimeSlot[index] = res;
                    return newTimeSlot;
                }
                return prev;
            });
        } catch (e) {
            console.error(e);
        }
    };

    const deleteTimeSlot = async (id: number): Promise<void> => {
        try {
            await Api.delete("timeslots", id);
            setTimeSlot((prev) => (prev ? prev.filter((timeSlot) => timeSlot.id !== id) : []));
        } catch (e) {
            console.error(e);
        }
    };

    return {
        timeSlot,
        createTimeSlot,
        updateTimeSlot,
        deleteTimeSlot
    }
}