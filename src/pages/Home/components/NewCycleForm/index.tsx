import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
  return (
    <FormContainer>
    <label htmlFor= "task" > Vou trabalhar em </label>
    <TaskInput
      id = "task"
      list = "task-suggestions"
      placeholder = "Dê um nome para o seu projeto"
      disabled = {!!activeCycle} 
      {...register('task') }
    />

    <datalist id = "task-suggestions" >
      <option value="Projeto1" />
      <option value="Projeto2" />
      <option value="Projeto3" />
      <option value="Banana" />
    </datalist>

    <label htmlFor = "" > durante </label>
    
    <MinutesAmountInput
      type = "number"
      id = "minutesAmount"
      placeholder = "00"
      step = { 5}
      min = { 1}
      disabled = {!!activeCycle}
      //max={60}
      {...register('minutesAmount', { valueAsNumber: true }) }
    />

  <span> minutos.</span>
  </FormContainer>
  )
}