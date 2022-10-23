import React, {Component, useState, useEffect} from 'react'
import ListedTask from './listedTask'
     function App() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tasks, setTask] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        fetch('api/tasks')
            .then(res => res.json())
            .then(data => {
                setTask(data)
                console.log(data)
        } )
    },[show])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            title : title,
            description: description
        })
        fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                M.toast({html: 'Task saved'})
            })

            .catch(err => console.error(err))
        setTitle(" ")
        setDescription(" ")
    }

    const handleChangeInput = (e) => {
        setTitle(e.target.value)

    }

    const handleChangeOtherInput = (e) => {
        setDescription(e.target.value)

    }

    const listTasks = () => {
        setShow(!show)
    }

        return(
            <div>
                <nav className='light-blue darken-4'>
                    <div className='container'> 
                        <a className='brand-logo'>MERN STACK</a>
                    </div>
                </nav>
                <form onSubmit={handleSubmit} >
                    <input onChange={handleChangeInput} placeholder='titulo' value={title}></input>
                    <textarea onChange={handleChangeOtherInput} value = {description}></textarea>
                    <button className='btn-light-blue darken-4'>Enviar</button>
                </form>
                <div>
                    <button onClick={listTasks} className='btn-light-blue darken-4'>Listar tareas</button>
                    <ol>
                         {show ? tasks.map((item, index) => (
                            <ListedTask key={index} item={item}/>
                            )
                         ) : " "} 
                    </ol>

                </div>
            </div>


        )
    }
    


export default App
