import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useState } from 'react'

import showOrHideImage from "../assets/icons/ShowOrHide.png"

export default function SearchField({pokemonTypes}) {
    const [selectedSort, setSelectedSort] = useState('normal');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSortSelect = (sortOption) => {
        setSelectedSort(sortOption);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <section>
            <div className='container'>
                <InputGroup className="textInput-search flex-row-sb-c background-gray-search">
                    <FormControl
                        placeholder="Введите название или ключевые слова..."
                        aria-label="Введите название или ключевые слова..."
                        className='flex-row-left-c textInput-search-field'
                    />

                    <DropdownButton className='flex-col-sb-right' id="input-dropdown" onToggle={handleDropdownToggle} align="end" title={
                        <span>
                            {selectedSort}
                            <img
                                src={showOrHideImage}
                                alt="Показать или скрыть"
                                style={{
                                marginLeft: '10px',
                                width: '12px',
                                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                                transition: 'transform 0.3s ease-in-out',
                                }}
                            />
                        </span>
                    }>
                        <div className='flex-col-sb-right'>
                            {pokemonTypes.map((type.results)=>{
                                return <option value={school.id}>{school.name}</option> <Dropdown.Item onClick={() => handleSortSelect(type.result)}>Недавние</Dropdown.Item>
                            })}
                            <Dropdown.Item onClick={() => handleSortSelect('Недавние')}>Недавние</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortSelect('Наиболее популярные')}>Наиболее популярные</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortSelect('А-Я')}>А-Я</Dropdown.Item>
                        </div>
                    </DropdownButton>
                </InputGroup>
            </div>
        </section>
        
    );
}