import { useEffect, useState } from "react";
import Api from "../utils/Api.tsx";
import type { TTest1, TTest1CreateAndUpdate } from "../types/test1.type.ts";

export default function useTest1() {

    const [test1, setTest1] = useState<TTest1[]>([]);

    useEffect(() => {
        void getTest1s();
    },[])

    const getTest1s = async () => {
        try {
            const res = await Api.get("test1s");
            setTest1(res)
        }
        catch (e) {
            console.error(e);
        }
    }

    const createTest1 = async (test1: TTest1CreateAndUpdate) => {
        try {
            const res = await Api.post("test1s", test1);
            setTest1((prev) => [...prev, res]);
        }
        catch (e) {
            console.error(e);
        }
    }

    const updateTest1 = async (
        updatedTest1: TTest1CreateAndUpdate,
        id: number
    ): Promise<void> => {
        try {
            const res = await Api.put("test1s", id, updatedTest1);
            setTest1((prev) => {
                if (prev) {
                    const index = prev.findIndex((test1) => test1.id === id);
                    const newTest1 = [...prev];
                    newTest1[index] = res;
                    return newTest1;
                }
                return prev;
            });
        } catch (e) {
            console.error(e);
        }
    };

    const deleteTest1 = async (id: number): Promise<void> => {
        try {
            await Api.delete("test1s", id);
            setTest1((prev) => (prev ? prev.filter((test1) => test1.id !== id) : []));
        } catch (e) {
            console.error(e);
        }
    };

    return {
        test1,
        createTest1,
        updateTest1,
        deleteTest1
    }
}