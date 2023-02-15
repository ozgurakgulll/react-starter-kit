import {memo, useMemo, useState} from "react";

function Form(){
    const genders=[
        {key:'1',value:'Erkek'},
        {key: '2',value: 'Kadın'}
    ]

    const categoryList=[
        {key:1,value:'PHP'},
        {key: 2,value: 'Mac'},
        {key: 3,value: '123'},
        {key:4,value: 'aaaa'},
    ]


    const [name,setName]=useState('tayfun')

    const [description,setDescription]=useState('')

    const [gender,setGender]=useState('')
    const [rules,setRules]=useState(true)


    const [categories,setCategories]=useState([2,3])

    const selectedGender=genders.find(g=>g.key===gender)

    const selectedCategories= categories && categoryList.filter(c=>categories.includes(c.key))

    return(
        <>
           App
            <button  onClick={()=>setName('ahmet')}>Adı Değiştir</button>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            {name}
            <br/>
            <textarea value={description} onChange={e=>setDescription(e.target.value)}></textarea>
            {description}
            <select value={gender} onChange={e=>setGender(e.target.value)}>
                <option value="">Seçin</option>
                {
                    genders.map(gender=>(
                    <option value={gender.key}>{gender.value}</option>))
                }
            </select>

            <select value={categories} multiple={true} onChange={e=>setCategories([...e.target.selectedOptions].map(option=>+option.value))}>

                {
                    categoryList.map(category=>(
                    <option value={category.key} key={category.key}>{category.value}</option>))
                }
            </select>
            <br/>
            <label>
                <input type="checkbox" checked={rules} onChange={e=>setRules(e.target.checked)}/>
                Kuralları kabul ediyorum
            </label>
          <pre>
                {JSON.stringify(selectedCategories,null,2)}
          </pre>
        </>
    )
}
export default memo(Form)
