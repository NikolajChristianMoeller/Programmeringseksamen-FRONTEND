import { useEffect, useState } from "react";
import Api from "../utils/Api.tsx";
import type { TEventCreateAndUpdate } from "../types/event.type.ts";

export default function useEvent() {

    const [event, setEvent] = useState<TEventCreateAndUpdate[]>([]);

    useEffect(() => {
        void getEvents();
    },[])

    const getEvents = async () => {
        try {
            const res = await Api.get("events");
            setEvent(res)
        }
        catch (e) {
            console.error(e);
        }
    }

    const createEvent = async (event: TEventCreateAndUpdate) => {
        try {
            console.log("this is what should be send:", event)
            const res = await Api.post("events", event);
            setEvent((prev) => [...prev, res]);
        }
        catch (e) {
            console.error(e);
        }
    }

    const updateEvent = async (
        updatedEvent: TEventCreateAndUpdate,
        id: number
    ): Promise<void> => {
        try {
            const res = await Api.put("events", id, updatedEvent);
            setEvent((prev) => {
                if (prev) {
                    const index = prev.findIndex((event) => event.id === id);
                    const newEvent = [...prev];
                    newEvent[index] = res;
                    return newEvent;
                }
                return prev;
            });
        } catch (e) {
            console.error(e);
        }
    };

    const deleteEvent = async (id: number): Promise<void> => {
        try {
            await Api.delete("events", id);
            setEvent((prev) => (prev ? prev.filter((event) => event.id !== id) : []));
        } catch (e) {
            console.error(e);
        }
    };

    return {
        event,
        createEvent,
        updateEvent,
        deleteEvent,
    }
}