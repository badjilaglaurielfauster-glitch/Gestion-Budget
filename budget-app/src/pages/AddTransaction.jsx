import {useState} from "react";
import './AddTransaction.css'

const AddTransaction = () =>{
   const [formData, setFormData] = useState({
       amount:"",
       type:""
   })

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] :e.target.value
        });
    };

   const handleSubmit = (e) =>{
       e.preventDefault();
       console.log(formData);
   }


    return (

        <div className="add-transaction-container">
            <h2>Ajouter une transaction</h2>
            <form onSubmit={handleSubmit}>
            <input
                name="amount"
                type="number"
                placeholder="Montant"
                value={formData.amount}
                onChange={handleChange}

                />

            <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                >
                <option value="">Choisir un type de transaction</option>
                <option value="income">Revenu</option>
                <option value="expense">Dépense</option>
            </select>
            <button type="submit">Ajouter</button>
        </form>
        </div>
    )







}








export default AddTransaction;