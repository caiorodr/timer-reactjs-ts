import { HandPalm, Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod'
import { createContext, useEffect, useState } from "react";
import {differenceInSeconds} from  'date-fns' 
import { 
    HomeContainer, 
    StartCountDownButton, 
    StopCountDownButton, 
} from "./styles";
import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";

interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptedDate?: Date
    finishedDate?: Date
}

interface CyclesContextType {
    activeCycle: Cycle | undefined
    activeCycleId: string | null
}

export const CycleContext = createContext({} as CyclesContextType)

export function Home () {

    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
        
    const activeCycle = cycles.find(c => c.id === activeCycleId); 

 
    function handleCreateNewCycle(data: NewCycleFormData) {
        const newCycle: Cycle = {
            id: String(new Date().getTime()),
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        console.log(newCycle)
        setCycles((state) => [...state, newCycle]);
        setActiveCycleId(newCycle.id);
        setAmountSecondsPassed(0);

        reset(); // limpa os campos para o valor original.
    }

    function handleInterruptCycle(){
        setCycles( state =>
            state.map((cycle) => {
                if(cycle.id == activeCycleId){
                    return { ...cycle, interruptedDate: new Date()}
                }else {
                    return cycle;
                }
            }),
        );
        setActiveCycleId(null);
    }

    
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');

    useEffect(() => {
        if(activeCycle){
            document.title = `${minutes} : ${seconds} `
        }
        
    }, [minutes, seconds]);

    const task = watch('task');
    const isSubmitDisabled = !task;
    
    /*
     * Prop Drilling -> Quando a gente tem MUIITAS propriedades APENAS para comunicação entre componentes.

     * Context API -> Permite compartilharmos informações entre VÁrios componentes ao mesmo tempo
    */

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <CycleContext.Provider value={{ activeCycle, activeCycleId }}>
                    <NewCycleForm />
                    <Countdown />
                </CycleContext.Provider>
                { activeCycle ? (
                    <StopCountDownButton onClick={handleInterruptCycle} type="button"  >
                        <HandPalm size={24}/>
                        Stop
                    </StopCountDownButton>
                ): (
                    <StartCountDownButton disabled={isSubmitDisabled} type="submit"  >
                        <Play size={24}/>
                        Começar
                    </StartCountDownButton>
                )}
            </form>
        </HomeContainer>
    )
}