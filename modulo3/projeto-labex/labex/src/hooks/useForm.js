import React from "react"

export const useForm = (initialState) => {
  const [form, setForm] = React.useState(initialState)

  //vai pegar o valor dentro de name e inserir o valor de value
  const handleChange = (event) => {
    // const name = event.target.name
    // const value = event.target.value
    // desestruturação
    const { name, value } = event.target
    setForm({...form,  [name]: value });
  };

  const cleanFields = () => {
    setForm(initialState)
  }

  return { form, handleChange, cleanFields };
}