import { Component } from 'react';
import Select from 'react-select'
import { fetchBreeds} from '../api'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export class BreedSelect extends Component {
    async componentDidMount() {
        try {
const breeds = await fetchBreeds()
console.log(breeds)
        } catch (error){

        }


    }
  render() {
    return (
      <div>
        <Select options={options} onChange={option => console.log(option)}/>
      </div>
    );
  }
}
