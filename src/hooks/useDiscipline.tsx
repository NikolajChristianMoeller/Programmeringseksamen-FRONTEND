import { useEffect, useState } from "react";
import Api from "../utils/Api.tsx";
import {TDiscipline} from "../types/discipline.type.ts";

export default function useDiscipline() {

    const [discipline, setDiscipline] = useState<TDiscipline[]>([]);

    useEffect(() => {
        void getDisciplines();
    },[])

    const getDisciplines = async () => {
        try {
            const res = await Api.get("disciplines");
            setDiscipline(res)
        }
        catch (e) {
            console.error(e);
        }
    }

    const createDiscipline = async (discipline: TDiscipline) => {
        try {
            const res = await Api.post("disciplines", discipline);
            setDiscipline((prev) => [...prev, res]);
        }
        catch (e) {
            console.error(e);
        }
    }

    const updateDiscipline = async (
        updatedDiscipline: TDiscipline,
        id: number
    ): Promise<void> => {
        try {
            const res = await Api.put("disciplines", id, updatedDiscipline);
            setDiscipline((prev) => {
                if (prev) {
                    const index = prev.findIndex((discipline) => discipline.id === id);
                    const newDiscipline = [...prev];
                    newDiscipline[index] = res;
                    return newDiscipline;
                }
                return prev;
            });
        } catch (e) {
            console.error(e);
        }
    };
    

    return {
        discipline,
        createDiscipline,
        updateDiscipline
    }
}