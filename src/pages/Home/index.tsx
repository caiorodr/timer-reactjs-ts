import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod'

import { 
    CountdownContainer, 
    FormContainer, 
    HomeContainer, 
    MinutesAmountInput, 
    Separator, 
    StartCountdownButton, 
    TaskInput 
} from "./styles";


// controlled / uncontrolled

/* function register(name: string) {
    return {
        onChange: () => void,
        onBlur: () => void,
        onFocus: () => void,
        ...
    }
}
*/

export function Home () {
    const { register, handleSubmit, watch } = useForm();

    function handleCreateNewCycle(data: any) {
        console.log(data)
    }

    const task = watch('task');
    const isSubmitDisabled = !task
    
    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        id="task"  
                        list="task-suggestions" 
                        placeholder="Dê um nome para o seu projeto"
                        {...register('task')}
                    />
                    
                    <datalist id="task-suggestions">
                        <option value="Projeto1"/>
                        <option value="Projeto2"/>
                        <option value="Projeto3"/>
                        <option value="Banana"/>
                    </datalist>
                   
                    <label htmlFor="">durante</label>
                    <MinutesAmountInput 
                        type="number" 
                        id="minutesAmaunt" 
                        placeholder="00" 
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmaunt', { valueAsNumber: true})}
                    />

                    <span>minutos.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton type="submit" disabled={isSubmitDisabled} >
                    <Play size={24}/>
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}