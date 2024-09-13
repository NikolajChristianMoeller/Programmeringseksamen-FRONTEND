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

    /*

    const deleteEventFromTimeSlot = async (timeSlotId: number, eventId: number): Promise<void> => {
        try {
            await Api.remove(`timeslots/${timeSlotId}/events/${eventId}`);
            let timeSlotClone = structuredClone(timeSlot);
            console.log("current time slot state" , timeSlotClone);
            const relevantTimeSlot = timeSlotClone.find((timeSlot) => timeSlot.id === timeSlotId);
            console.log("relevant time slot" , relevantTimeSlot);
            const relevantTimeSlotIndex = timeSlotClone.findIndex((timeSlot) => timeSlot.id === timeSlotId);
            console.log("relevant index" , relevantTimeSlotIndex);
            const timeSlotEvents = relevantTimeSlot?.events?.filter((event) => event.id !== eventId);
            console.log("timeslot events" , timeSlotEvents);
            const newTimeSlot = {
                ...relevantTimeSlot,
                events: timeSlotEvents
            }
            console.log("new time slot" , newTimeSlot);
            timeSlotClone.splice(relevantTimeSlotIndex, 1, newTimeSlot as TTimeSlot);
            console.log("final time slot array" , timeSlotClone);
            setTimeSlot(timeSlotClone);
        } catch (e) {
            console.error(e);
        }
    };

     */

    const deleteEventFromTimeSlot = async (timeSlotId: number, eventId: number): Promise<void> => {
        try {
            await Api.remove(`timeslots/${timeSlotId}/events/${eventId}`);
            setTimeSlot((prev) =>
                prev
                    ? prev.map((timeSlot) =>
                        timeSlot.id === timeSlotId
                            ? {
                                ...timeSlot,
                                events: timeSlot.events.filter((event) => event.id !== eventId),
                            }
                            : timeSlot
                    )
                    : []
            );
        } catch (e) {
            console.error(e);
        }
    };

    const postEventToTimeSlot = async (timeSlotId: number, event: { id: number; eventName: string; minimumDuration: string; }): Promise<void> => {
        try {
            await Api.add(`timeslots/${timeSlotId}/events`, event);
            setTimeSlot((prev) =>
                prev
                    ? prev.map((timeSlot) =>
                        timeSlot.id === timeSlotId
                            ? {
                                ...timeSlot,
                                events: [...timeSlot.events, event],
                            }
                            : timeSlot
                    )
                    : []
            );
        } catch (e) {
            console.error(e);
        }
    };

    return {
        timeSlot,
        createTimeSlot,
        updateTimeSlot,
        deleteTimeSlot,
        deleteEventFromTimeSlot,
        postEventToTimeSlot
    }
}
