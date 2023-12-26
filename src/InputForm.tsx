import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import axios from 'axios';
import Select from './Select'; 
import Button from './Button';

type MyFormValues = {
 firstname: string;
 lastName: string;
 pokemon: string;
};

interface InputFormProps {
 onSubmit: SubmitHandler<MyFormValues>;
 onPokemonSelect: (pokemon: MyFormValues) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, onPokemonSelect }) => {
 const { handleSubmit, control, setValue, getValues, formState, register } = useForm<MyFormValues>({
  criteriaMode: 'all',
 });
 const [pokemonList, setPokemonList] = React.useState<string[]>([]);

 React.useEffect(() => {
   const fetchPokemonData = async () => {
     try {
       const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
       const data = response.data.results.map((pokemon: { name: string }) => pokemon.name);
       setPokemonList(data);
     } catch (error) {
       console.error('Error fetching Pokemon data:', error);
     }
   };

   fetchPokemonData();
 }, []);

 return (
   <form onSubmit={handleSubmit(onSubmit)}>
     {/* Existing form fields for name and last name */}
     <div className="flex items-center">
       <label htmlFor="name" className="font-bold text-sm text-gray-500">
         First Name
       </label>
       <input
         type="text"
         id="name"
         className="ml-4 px-3 py-2 border rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
         placeholder="Enter your name"
         {...register('firstname', {
           required: 'Name is required',
           minLength: {
             value: 2,
             message: 'Name must be at least 2 characters long',
           },
           maxLength: {
             value: 12,
             message: 'Name must not exceed 12 characters',
           },
           pattern: {
             value: /^[a-zA-Z]+$/,
             message: 'Name must contain only letters',
           },
         })}
       />
     </div>

     <div className="flex items-center">
       <label htmlFor="lastName" className="font-bold text-sm text-gray-500">
         Last Name
       </label>
       <input
         type="text"
         id="lastName"
         className="ml-4 px-3 py-2 border rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
         placeholder="Enter your last name"
         {...register('lastName', {
           required: 'Last Name is required',
           minLength: {
             value: 2,
             message: 'Last Name must be at least 2 characters long',
           },
           maxLength: {
             value: 12,
             message: 'Last Name must not exceed 12 characters',
           },
           pattern: {
             value: /^[a-zA-Z]+$/,
             message: 'Last Name must contain only letters',
           },
         })}
       />
     </div>

     <div className="flex items-center">
      <label htmlFor="pokemon" className="font-bold text-sm text-gray-500">
        Select Pokemon
      </label>
      <Controller
        name="pokemon"
        control={control}
        render={({ field }) => (
          <Select
            options={pokemonList}
            onSelect={(selectedPokemon) => {
              setValue('pokemon', selectedPokemon);
              field.onChange(selectedPokemon);
              onPokemonSelect({
                firstname: getValues().firstname,
                lastName: getValues().lastName,
                pokemon: selectedPokemon,
              });
            }}
          />
        )}
      />
    </div> 
 
     {formState.errors.pokemon && <span className="text-red-500">{formState.errors.pokemon.message}</span>}
     <div className="flex items-center">
     {formState.errors.firstname && <span className="text-red-500 ml-4">{formState.errors.firstname.message}</span>}
     {formState.errors.lastName && <span className="text-red-500 ml-4">{formState.errors.lastName.message}</span>}
     </div>

     <Button type="submit">Submit</Button>
   </form>
 );
};

export default InputForm;
