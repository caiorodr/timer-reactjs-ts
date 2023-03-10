import { Play } from "phosphor-react";
import { useState } from "react";
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



export function Home () {
    const [task, setTask] = useState('');

    function resetForm() {
        setTask('');
    }

    return (
        <HomeContainer>
            <form>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        id="task"  
                        list="task-suggestions" 
                        placeholder="Dê um nome para o seu projeto"
                        onChange={(e) => setTask(e.target.value)}
                        value={task}
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

                <StartCountdownButton disabled={!task} type="submit">
                    <Play size={24}/>
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}